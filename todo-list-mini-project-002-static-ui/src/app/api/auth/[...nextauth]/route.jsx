import { LoginService } from "@/services/auth/user.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(data) {
        const userData = {
          email: data?.userEmail,
          password: data?.userPassword,
        };
        const userInfo = await LoginService(userData);
        if (userInfo?.status === 400) {
          throw new Error(userInfo?.detail);
        }
        const { payload } = userInfo;
        return payload;
      },
    }),
  ],

  // Optional: Usage When Deployment
  secret: process.env.NEXTAUTH_SECRET,

  // Optional
  session: {
    strategy: "jwt", // Adjust this based on your session strategy
  },

  // Custom Login page
  // pages: {
  //   signIn: "/login",
  // },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
