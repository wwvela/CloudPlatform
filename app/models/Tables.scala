package models
// AUTO-GENERATED Slick data model
/** Stand-alone Slick data model for immediate use */
object Tables extends {
  val profile = slick.jdbc.MySQLProfile
} with Tables

/** Slick data model trait for extension, choice of backend or usage in the cake pattern. (Make sure to initialize this late.) */
trait Tables {
  val profile: slick.jdbc.JdbcProfile
  import profile.api._
  import com.github.tototoshi.slick.MySQLJodaSupport._
  import org.joda.time.DateTime
  import slick.model.ForeignKeyAction
  // NOTE: GetResult mappers for plain SQL are only generated for tables where Slick knows how to map the types of all columns.
  import slick.jdbc.{GetResult => GR}

  /** DDL for all tables. Call .create to execute. */
  lazy val schema: profile.SchemaDescription = Array(Ak.schema, Dutys.schema, Feedback.schema, Notice.schema, Running.schema, Soft.schema, Users.schema).reduceLeft(_ ++ _)
  @deprecated("Use .schema instead of .ddl", "3.0")
  def ddl = schema

  /** Entity class storing rows of table Ak
   *  @param accesskeyid Database column AccessKeyId SqlType(TEXT)
   *  @param accesskeysecret Database column AccessKeySecret SqlType(TEXT) */
  case class AkRow(accesskeyid: String, accesskeysecret: String)
  /** GetResult implicit for fetching AkRow objects using plain SQL queries */
  implicit def GetResultAkRow(implicit e0: GR[String]): GR[AkRow] = GR{
    prs => import prs._
    AkRow.tupled((<<[String], <<[String]))
  }
  /** Table description of table ak. Objects of this class serve as prototypes for rows in queries. */
  class Ak(_tableTag: Tag) extends profile.api.Table[AkRow](_tableTag, Some("cloudplatform"), "ak") {
    def * = (accesskeyid, accesskeysecret) <> (AkRow.tupled, AkRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(accesskeyid), Rep.Some(accesskeysecret))).shaped.<>({r=>import r._; _1.map(_=> AkRow.tupled((_1.get, _2.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column AccessKeyId SqlType(TEXT) */
    val accesskeyid: Rep[String] = column[String]("AccessKeyId")
    /** Database column AccessKeySecret SqlType(TEXT) */
    val accesskeysecret: Rep[String] = column[String]("AccessKeySecret")
  }
  /** Collection-like TableQuery object for table Ak */
  lazy val Ak = new TableQuery(tag => new Ak(tag))

  /** Entity class storing rows of table Dutys
   *  @param id Database column id SqlType(INT), AutoInc, PrimaryKey
   *  @param taskname Database column taskname SqlType(VARCHAR), Length(255,true)
   *  @param uid Database column uid SqlType(INT)
   *  @param sabbrename Database column sabbrename SqlType(TEXT)
   *  @param sname Database column sname SqlType(TEXT)
   *  @param subtime Database column subtime SqlType(TEXT)
   *  @param finitime Database column finitime SqlType(TEXT)
   *  @param status Database column status SqlType(TEXT)
   *  @param input Database column input SqlType(TEXT)
   *  @param param Database column param SqlType(TEXT)
   *  @param elements Database column elements SqlType(TEXT) */
  case class DutysRow(id: Int, taskname: String, uid: Int, sabbrename: String, sname: String, subtime: String, finitime: String, status: String, input: String, param: String, elements: String)
  /** GetResult implicit for fetching DutysRow objects using plain SQL queries */
  implicit def GetResultDutysRow(implicit e0: GR[Int], e1: GR[String]): GR[DutysRow] = GR{
    prs => import prs._
    DutysRow.tupled((<<[Int], <<[String], <<[Int], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String]))
  }
  /** Table description of table dutys. Objects of this class serve as prototypes for rows in queries. */
  class Dutys(_tableTag: Tag) extends profile.api.Table[DutysRow](_tableTag, Some("cloudplatform"), "dutys") {
    def * = (id, taskname, uid, sabbrename, sname, subtime, finitime, status, input, param, elements) <> (DutysRow.tupled, DutysRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(taskname), Rep.Some(uid), Rep.Some(sabbrename), Rep.Some(sname), Rep.Some(subtime), Rep.Some(finitime), Rep.Some(status), Rep.Some(input), Rep.Some(param), Rep.Some(elements))).shaped.<>({r=>import r._; _1.map(_=> DutysRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7.get, _8.get, _9.get, _10.get, _11.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(INT), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column taskname SqlType(VARCHAR), Length(255,true) */
    val taskname: Rep[String] = column[String]("taskname", O.Length(255,varying=true))
    /** Database column uid SqlType(INT) */
    val uid: Rep[Int] = column[Int]("uid")
    /** Database column sabbrename SqlType(TEXT) */
    val sabbrename: Rep[String] = column[String]("sabbrename")
    /** Database column sname SqlType(TEXT) */
    val sname: Rep[String] = column[String]("sname")
    /** Database column subtime SqlType(TEXT) */
    val subtime: Rep[String] = column[String]("subtime")
    /** Database column finitime SqlType(TEXT) */
    val finitime: Rep[String] = column[String]("finitime")
    /** Database column status SqlType(TEXT) */
    val status: Rep[String] = column[String]("status")
    /** Database column input SqlType(TEXT) */
    val input: Rep[String] = column[String]("input")
    /** Database column param SqlType(TEXT) */
    val param: Rep[String] = column[String]("param")
    /** Database column elements SqlType(TEXT) */
    val elements: Rep[String] = column[String]("elements")
  }
  /** Collection-like TableQuery object for table Dutys */
  lazy val Dutys = new TableQuery(tag => new Dutys(tag))

  /** Entity class storing rows of table Feedback
   *  @param fid Database column fid SqlType(INT), AutoInc, PrimaryKey
   *  @param uid Database column uid SqlType(INT)
   *  @param subtime Database column subtime SqlType(TEXT)
   *  @param title Database column title SqlType(TEXT)
   *  @param content Database column content SqlType(LONGTEXT), Length(2147483647,true)
   *  @param status Database column status SqlType(INT)
   *  @param process Database column process SqlType(TEXT) */
  case class FeedbackRow(fid: Int, uid: Int, subtime: String, title: String, content: String, status: Int, process: String)
  /** GetResult implicit for fetching FeedbackRow objects using plain SQL queries */
  implicit def GetResultFeedbackRow(implicit e0: GR[Int], e1: GR[String]): GR[FeedbackRow] = GR{
    prs => import prs._
    FeedbackRow.tupled((<<[Int], <<[Int], <<[String], <<[String], <<[String], <<[Int], <<[String]))
  }
  /** Table description of table feedback. Objects of this class serve as prototypes for rows in queries. */
  class Feedback(_tableTag: Tag) extends profile.api.Table[FeedbackRow](_tableTag, Some("cloudplatform"), "feedback") {
    def * = (fid, uid, subtime, title, content, status, process) <> (FeedbackRow.tupled, FeedbackRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(fid), Rep.Some(uid), Rep.Some(subtime), Rep.Some(title), Rep.Some(content), Rep.Some(status), Rep.Some(process))).shaped.<>({r=>import r._; _1.map(_=> FeedbackRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column fid SqlType(INT), AutoInc, PrimaryKey */
    val fid: Rep[Int] = column[Int]("fid", O.AutoInc, O.PrimaryKey)
    /** Database column uid SqlType(INT) */
    val uid: Rep[Int] = column[Int]("uid")
    /** Database column subtime SqlType(TEXT) */
    val subtime: Rep[String] = column[String]("subtime")
    /** Database column title SqlType(TEXT) */
    val title: Rep[String] = column[String]("title")
    /** Database column content SqlType(LONGTEXT), Length(2147483647,true) */
    val content: Rep[String] = column[String]("content", O.Length(2147483647,varying=true))
    /** Database column status SqlType(INT) */
    val status: Rep[Int] = column[Int]("status")
    /** Database column process SqlType(TEXT) */
    val process: Rep[String] = column[String]("process")
  }
  /** Collection-like TableQuery object for table Feedback */
  lazy val Feedback = new TableQuery(tag => new Feedback(tag))

  /** Entity class storing rows of table Notice
   *  @param id Database column id SqlType(INT), AutoInc, PrimaryKey
   *  @param title Database column title SqlType(TEXT)
   *  @param pubtime Database column pubtime SqlType(TEXT)
   *  @param failtime Database column failtime SqlType(TEXT)
   *  @param width Database column width SqlType(TEXT)
   *  @param top Database column top SqlType(TEXT)
   *  @param left Database column left SqlType(TEXT)
   *  @param content Database column content SqlType(TEXT) */
  case class NoticeRow(id: Int, title: String, pubtime: String, failtime: String, width: String, top: String, left: String, content: String)
  /** GetResult implicit for fetching NoticeRow objects using plain SQL queries */
  implicit def GetResultNoticeRow(implicit e0: GR[Int], e1: GR[String]): GR[NoticeRow] = GR{
    prs => import prs._
    NoticeRow.tupled((<<[Int], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String]))
  }
  /** Table description of table notice. Objects of this class serve as prototypes for rows in queries. */
  class Notice(_tableTag: Tag) extends profile.api.Table[NoticeRow](_tableTag, Some("cloudplatform"), "notice") {
    def * = (id, title, pubtime, failtime, width, top, left, content) <> (NoticeRow.tupled, NoticeRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(title), Rep.Some(pubtime), Rep.Some(failtime), Rep.Some(width), Rep.Some(top), Rep.Some(left), Rep.Some(content))).shaped.<>({r=>import r._; _1.map(_=> NoticeRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7.get, _8.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(INT), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column title SqlType(TEXT) */
    val title: Rep[String] = column[String]("title")
    /** Database column pubtime SqlType(TEXT) */
    val pubtime: Rep[String] = column[String]("pubtime")
    /** Database column failtime SqlType(TEXT) */
    val failtime: Rep[String] = column[String]("failtime")
    /** Database column width SqlType(TEXT) */
    val width: Rep[String] = column[String]("width")
    /** Database column top SqlType(TEXT) */
    val top: Rep[String] = column[String]("top")
    /** Database column left SqlType(TEXT) */
    val left: Rep[String] = column[String]("left")
    /** Database column content SqlType(TEXT) */
    val content: Rep[String] = column[String]("content")
  }
  /** Collection-like TableQuery object for table Notice */
  lazy val Notice = new TableQuery(tag => new Notice(tag))

  /** Entity class storing rows of table Running
   *  @param id Database column id SqlType(INT), AutoInc, PrimaryKey
   *  @param content Database column content SqlType(TEXT) */
  case class RunningRow(id: Int, content: String)
  /** GetResult implicit for fetching RunningRow objects using plain SQL queries */
  implicit def GetResultRunningRow(implicit e0: GR[Int], e1: GR[String]): GR[RunningRow] = GR{
    prs => import prs._
    RunningRow.tupled((<<[Int], <<[String]))
  }
  /** Table description of table running. Objects of this class serve as prototypes for rows in queries. */
  class Running(_tableTag: Tag) extends profile.api.Table[RunningRow](_tableTag, Some("cloudplatform"), "running") {
    def * = (id, content) <> (RunningRow.tupled, RunningRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(content))).shaped.<>({r=>import r._; _1.map(_=> RunningRow.tupled((_1.get, _2.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(INT), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column content SqlType(TEXT) */
    val content: Rep[String] = column[String]("content")
  }
  /** Collection-like TableQuery object for table Running */
  lazy val Running = new TableQuery(tag => new Running(tag))

  /** Entity class storing rows of table Soft
   *  @param id Database column id SqlType(INT), AutoInc, PrimaryKey
   *  @param types Database column types SqlType(VARCHAR), Length(255,true)
   *  @param abbrename Database column abbrename SqlType(VARCHAR), Length(255,true)
   *  @param sname Database column sname SqlType(TEXT)
   *  @param descreption Database column descreption SqlType(TEXT)
   *  @param pic Database column pic SqlType(TEXT)
   *  @param likefreq Database column likefreq SqlType(INT)
   *  @param money Database column money SqlType(INT)
   *  @param status Database column status SqlType(INT) */
  case class SoftRow(id: Int, types: String, abbrename: String, sname: String, descreption: String, pic: String, likefreq: Int, money: Int, status: Int)
  /** GetResult implicit for fetching SoftRow objects using plain SQL queries */
  implicit def GetResultSoftRow(implicit e0: GR[Int], e1: GR[String]): GR[SoftRow] = GR{
    prs => import prs._
    SoftRow.tupled((<<[Int], <<[String], <<[String], <<[String], <<[String], <<[String], <<[Int], <<[Int], <<[Int]))
  }
  /** Table description of table soft. Objects of this class serve as prototypes for rows in queries. */
  class Soft(_tableTag: Tag) extends profile.api.Table[SoftRow](_tableTag, Some("cloudplatform"), "soft") {
    def * = (id, types, abbrename, sname, descreption, pic, likefreq, money, status) <> (SoftRow.tupled, SoftRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(types), Rep.Some(abbrename), Rep.Some(sname), Rep.Some(descreption), Rep.Some(pic), Rep.Some(likefreq), Rep.Some(money), Rep.Some(status))).shaped.<>({r=>import r._; _1.map(_=> SoftRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7.get, _8.get, _9.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(INT), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column types SqlType(VARCHAR), Length(255,true) */
    val types: Rep[String] = column[String]("types", O.Length(255,varying=true))
    /** Database column abbrename SqlType(VARCHAR), Length(255,true) */
    val abbrename: Rep[String] = column[String]("abbrename", O.Length(255,varying=true))
    /** Database column sname SqlType(TEXT) */
    val sname: Rep[String] = column[String]("sname")
    /** Database column descreption SqlType(TEXT) */
    val descreption: Rep[String] = column[String]("descreption")
    /** Database column pic SqlType(TEXT) */
    val pic: Rep[String] = column[String]("pic")
    /** Database column likefreq SqlType(INT) */
    val likefreq: Rep[Int] = column[Int]("likefreq")
    /** Database column money SqlType(INT) */
    val money: Rep[Int] = column[Int]("money")
    /** Database column status SqlType(INT) */
    val status: Rep[Int] = column[Int]("status")
  }
  /** Collection-like TableQuery object for table Soft */
  lazy val Soft = new TableQuery(tag => new Soft(tag))

  /** Entity class storing rows of table Users
   *  @param id Database column id SqlType(INT), AutoInc, PrimaryKey
   *  @param phone Database column phone SqlType(VARCHAR), Length(255,true)
   *  @param email Database column email SqlType(VARCHAR), Length(255,true)
   *  @param pwd Database column pwd SqlType(VARCHAR), Length(255,true)
   *  @param name Database column name SqlType(VARCHAR), Length(255,true)
   *  @param company Database column company SqlType(VARCHAR), Length(255,true)
   *  @param authority Database column authority SqlType(VARCHAR), Length(255,true)
   *  @param like Database column like SqlType(TEXT)
   *  @param ip Database column ip SqlType(TEXT)
   *  @param readnote Database column readnote SqlType(TEXT) */
  case class UsersRow(id: Int, phone: String, email: String, pwd: String, name: String, company: String, authority: String, like: String, ip: String, readnote: String)
  /** GetResult implicit for fetching UsersRow objects using plain SQL queries */
  implicit def GetResultUsersRow(implicit e0: GR[Int], e1: GR[String]): GR[UsersRow] = GR{
    prs => import prs._
    UsersRow.tupled((<<[Int], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String], <<[String]))
  }
  /** Table description of table users. Objects of this class serve as prototypes for rows in queries. */
  class Users(_tableTag: Tag) extends profile.api.Table[UsersRow](_tableTag, Some("cloudplatform"), "users") {
    def * = (id, phone, email, pwd, name, company, authority, like, ip, readnote) <> (UsersRow.tupled, UsersRow.unapply)
    /** Maps whole row to an option. Useful for outer joins. */
    def ? = ((Rep.Some(id), Rep.Some(phone), Rep.Some(email), Rep.Some(pwd), Rep.Some(name), Rep.Some(company), Rep.Some(authority), Rep.Some(like), Rep.Some(ip), Rep.Some(readnote))).shaped.<>({r=>import r._; _1.map(_=> UsersRow.tupled((_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7.get, _8.get, _9.get, _10.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))

    /** Database column id SqlType(INT), AutoInc, PrimaryKey */
    val id: Rep[Int] = column[Int]("id", O.AutoInc, O.PrimaryKey)
    /** Database column phone SqlType(VARCHAR), Length(255,true) */
    val phone: Rep[String] = column[String]("phone", O.Length(255,varying=true))
    /** Database column email SqlType(VARCHAR), Length(255,true) */
    val email: Rep[String] = column[String]("email", O.Length(255,varying=true))
    /** Database column pwd SqlType(VARCHAR), Length(255,true) */
    val pwd: Rep[String] = column[String]("pwd", O.Length(255,varying=true))
    /** Database column name SqlType(VARCHAR), Length(255,true) */
    val name: Rep[String] = column[String]("name", O.Length(255,varying=true))
    /** Database column company SqlType(VARCHAR), Length(255,true) */
    val company: Rep[String] = column[String]("company", O.Length(255,varying=true))
    /** Database column authority SqlType(VARCHAR), Length(255,true) */
    val authority: Rep[String] = column[String]("authority", O.Length(255,varying=true))
    /** Database column like SqlType(TEXT) */
    val like: Rep[String] = column[String]("like")
    /** Database column ip SqlType(TEXT) */
    val ip: Rep[String] = column[String]("ip")
    /** Database column readnote SqlType(TEXT) */
    val readnote: Rep[String] = column[String]("readnote")
  }
  /** Collection-like TableQuery object for table Users */
  lazy val Users = new TableQuery(tag => new Users(tag))
}
