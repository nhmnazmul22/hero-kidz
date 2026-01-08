import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleAuthProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials, req) {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        const result = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (!result.success) {
          return null;
        }

        return result.data;
      },
    }),
    GoogleAuthProvider({
      clientId: process.env.GOGGLE_CLIENT_ID,
      clientSecret: process.env.GOGGLE_CLIENT_SECRET,
    }),
  ],
};

export default authOptions;
