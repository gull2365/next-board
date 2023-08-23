import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Write() {
  let session = await getServerSession(authOptions);
  return (
    <div className="p-20">
      {session ? (
        <div className="p-20">
          <h4>글작성</h4>
          <form action="/api/post/new" method="POST">
            <input name="title" placeholder="글제목" />
            <input name="content" placeholder="글내용" />
            <button type="submit">전송</button>
          </form>
        </div>
      ) : (
        <h3>로그인 후 이용해주세요</h3>
      )}
    </div>
  );
}
