import {NextAuthOptions} from 'next-auth';
// import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from './db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

interface forSession {
    
    _id: string | null;
    email: string | null;
    role: string | null;
}

export const authOptions: NextAuthOptions = {

    providers: [

        // GithubProvider({

        //     clientId: process.env.GITHUB_ID!,
        //     clientSecret: process.env.GITHUB_SECRET!,
        // }),

    CredentialsProvider({
        name: "Credentials",
        credentials: {
        email: { label: "Username", type: "text"},
        password: { label: "Password", type: "password" }
        },
        async authorize(credentials){
            
            if(!credentials?.email || !credentials?.password){

                throw new Error("missing email or password")
            };

            try{

                await connectToDB();

                const user = await User.findOne({email: credentials.email});

                if(!user){

                    throw new Error("No user found with this email")
                };

                const isValid = await bcrypt.compare(credentials.password, user.password);

                if(!isValid){

                    throw new Error("invalid password")
                }

                return {

                    id: user._id.toString(),
                    email: user.email,
                    sample: 33
                }


            }catch(err){

                console.error("auth error:", err);

                throw err;
                
            }

        }
    })

    ],

    callbacks: {

        async jwt({token, user}){

            if(user){

                token.id = user.id
            };

            return token;
        },

    

        async session({session, token}){

            if(session.user){

                session.user.id = token.id as string;
                
            }

            return session
        }

    },

    pages: {

        signIn: "/login",
        error: "/login"

    },

    session : {

        strategy: "jwt",
        maxAge: 30*24*60*60

    },
    secret: process.env.NEXTAUTH_SECRET


}