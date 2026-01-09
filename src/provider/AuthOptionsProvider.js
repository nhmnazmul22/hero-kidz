import { loginUser, registerUser } from "@/actions/server/auth";
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

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        const payload = {
          provider: account.provider || "google",
          fullName: user.name,
          email: user.email,
          password: user.email,
          role: "user",
        };

        const result = await registerUser(payload);

        if (!result.success && !result.message.includes("User already exist")) {
          return false;
        }

        return true;
      }
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    // async session({ session, user, token }) {
    //   return session
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token
    // }
  },
};

export default authOptions;
