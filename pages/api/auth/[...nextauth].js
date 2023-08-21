import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "fc0284a4cfd01673f56e",
      clientSecret: "c8d457db4d36a920993a11936dd2eed01e29ea6f",
    }),
  ],
  secret: "q1w2e3r4",
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);
