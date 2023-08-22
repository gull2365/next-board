import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  if (요청.method == "POST") {
    console.log(session);
    if (요청.body.name || 요청.body.email || 요청.body.password == "") {
      if (session.user.email == 요청.body.email) {
        return 응답
          .status(500)
          .json("공백이거나 혹은 이미 있는 이메일 입니다.");
      }
    } else {
      console.log(요청.body);
      let hash = await bcrypt.hash(요청.body.password, 10);
      요청.body.password = hash;
      let db = (await connectDB).db("board");
      await db.collection("user_cred").insertOne(요청.body);
      return 응답.status(200).json("가입성공");
    }
  }
}
