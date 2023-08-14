import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("board");
  let result = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {result.map((item, order) => {
        return (
          <div className="list-item" key={order}>
            <h4>{result[order].title}</h4>
            <p>{result[order].content}</p>
          </div>
        );
      })}
    </div>
  );
}
