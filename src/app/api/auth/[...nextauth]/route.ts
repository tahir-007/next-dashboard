import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Setting up NextAuth with a credentials provider
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Arshiya Patel",
          email: "arshiya.patel1999@gmail.com",
        };

        // Hardcoded email and password for authentication
        const hardcodedEmail = "arshiya.patel1999@gmail.com";
        const hardcodedPassword = "Admin@123";

        if (
          credentials?.email === hardcodedEmail &&
          credentials.password === hardcodedPassword
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
