import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List(props) {
  const db = (await connectDB).db("board");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((item, order) => {
        return (
          <div className="list-item" key={order}>
            <Link prefetch={false} href={`/detail/${result[order]._id}`}>
              <h4>{result[order].title}</h4>
            </Link>
            <DetailLink />
            <p>{result[order].content}</p>
          </div>
        );
      })}
    </div>
  );
}
