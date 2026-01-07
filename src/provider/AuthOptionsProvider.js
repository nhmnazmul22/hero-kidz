import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};

export default authOptions;
