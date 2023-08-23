"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${props._id}`)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  });

  return (
    <div>
      <div>댓글 목록</div>
      <hr></hr>
      {data.length > 0
        ? data.map((a, i) => <p key={i}>{a.comment}</p>)
        : "로딩중"}
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          })
            .then((response) => response.json())
            .then(() => {
              // 새로운 댓글을 상태에 추가
              const newComment = { comment: comment };
              setData((prevData) => [...prevData, newComment]);
              setComment(""); // 댓글 입력 필드 초기화
            });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
