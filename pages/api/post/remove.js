import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "GET") {
    console.log(요청.query._id);
    let db = (await connectDB).db("board");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(요청.query._id) });
    응답.status(200).json("삭제완료");
  }
}
