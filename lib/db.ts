import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!

if(!MONGODB_URI){

    throw new Error("Please define mongo_uri in env variables");
};

let cached = global.mongoose

if(!cached){

    global.mongoose = {conn: null, promise: null}
};

export async function connectToDB(){

    if(cached.conn){

        return cached.conn
    }

    if(!cached.promise){

        const opts = {

            bufferCommands: true,
            maxPoolSize: 10

        } // required for paid plans for fine tuning

        mongoose
        .connect(MONGODB_URI, opts)
        .then(()=>mongoose.connection)
    }

    try{

        cached.conn = await cached.promise;

    }catch(err){

        cached.promise = null;

        throw err


    };

    return cached.conn
}