package dao

import com.typesafe.sslconfig.ssl.FakeChainedKeyStore.User
import javax.inject.Inject
import models.Tables.{Feedback, FeedbackRow, Users}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile

import scala.concurrent.{ExecutionContext, Future}

class feedbackDao @Inject()(protected val dbConfigProvider: DatabaseConfigProvider)(implicit exec: ExecutionContext)
  extends HasDatabaseConfigProvider[JdbcProfile]{

  import profile.api._

  def addFeedback(row:FeedbackRow) : Future[Int] = {
    db.run(Feedback returning Feedback.map(_.fid) += row)
  }

  def getFeedsByUid(uid:String) : Future[Seq[FeedbackRow]] = {
    db.run(Feedback.filter(_.uid===uid.toInt).filter(_.status===1).sortBy(_.subtime.desc).result)
  }

  def getFeedsByFid(fid:String) : Future[FeedbackRow] = {
    db.run(Feedback.filter(_.fid===fid.toInt).result.head)
  }

  def getAllFeeds : Future[Seq[(Int,String,String,String,String,String)]] = {
    val query = for {
      c <- Feedback
      s <- Users if c.uid===s.id
    } yield (c.fid,c.subtime,c.title,c.process,s.name,s.phone)
    db.run(query.sortBy(_._2.desc).result)

//    db.run(Feedback.sortBy(_.subtime.desc).result)
  }

  def updateStatus(fid:String): Future[Unit]={
    db.run(Feedback.filter(_.fid ===Integer.parseInt(fid)).map(_.status).update(0)).map(_=>())
  }

  def updateProcess(fid:String,process:String): Future[Unit]={
    db.run(Feedback.filter(_.fid ===Integer.parseInt(fid)).map(_.process).update(process)).map(_=>())
  }

  def deleteFeedback(fid:String):Future[Unit]={
    db.run(Feedback.filter(_.fid===Integer.parseInt(fid)).delete).map(_=>())
  }

}
