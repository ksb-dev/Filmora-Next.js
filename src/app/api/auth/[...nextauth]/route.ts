import NextAuth from "next-auth";
import { authOptions } from "@/lib/getAuthOptions";

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
