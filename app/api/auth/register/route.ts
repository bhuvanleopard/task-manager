import {NextRequest, NextResponse} from 'next/server';
import User from '@/models/User';


export async function POST(request: NextRequest){
    
    try{

        const {email, password} = await request.json();

        if(!email || !password){

            return NextResponse.json(
                
                {error: "email or password missing !!!"},
                {status: 400}
            )

        };

        const check = await User.findOne({email});

        if(!check){

            await User.create(({email, password}));

            return NextResponse.json(
            {msg: "user registered successfully", },
            {status: 201})

        };

        return NextResponse.json({msg: `user with email: ${email} already exists`}, {status: 409})


    }catch(err){

        console.error("user registration error", err);

        return NextResponse.json({msg: "something went wrong, please try later"}, {status: 500})

    }
}
