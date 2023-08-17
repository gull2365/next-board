"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((item, order) => {
        return (
          <div className="list-item" key={order}>
            <Link prefetch={false} href={`/detail/${result[order]._id}`}>
              <h4>{result[order].title}</h4>
            </Link>
            <p>{result[order].content}</p>
            <Link href={`/edit/${result[order]._id}`} className="list-btn">
              ✏️
            </Link>
            <span
              onClick={(e) => {
                fetch("/api/post/remove", {
                  method: "DELETE",
                  body: result[order]._id,
                })
                  .then((r) => r.json())
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
              }}
            >
              🗑️
            </span>
          </div>
        );
      })}
    </div>
  );
}
