import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const handler=NextAuth({
  providers: [
    CredentialsProvider({
        name:"email",
        credentials:{
            email:{label:"Email",type:"email",placeholder:"Email"},
            password:{label:"Password",type:"password",placeholder:"Password"}
        },
        async authorize(credentials: Record<"email" | "password", string> | undefined) {
            if (!credentials) {
                return null;
            }
            // You can add your authentication logic here using credentials.email and credentials.password
            return {
                id: "1"
            };
        },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    })
    
    // Add other providers here if needed
  ],
  callbacks: {
    session({ session }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
})

export const GET=handler;
export const POST=handler;