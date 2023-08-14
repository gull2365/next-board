import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List(props) {
  const db = (await connectDB).db("board");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((item, order) => {
        return (
          <div className="list-item" key={order}>
            <Link href={`/detail/${result[order]._id}`}>
              <h4>{result[order].title}</h4>
            </Link>
            <p>{result[order].content}</p>
          </div>
        );
      })}
    </div>
  );
}
