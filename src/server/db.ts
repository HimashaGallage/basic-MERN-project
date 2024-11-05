import { MongoClient } from "mongodb";
import {MONGODB_URI, DB_NAME} from "./config";

//TO REUSE THE SAME CONNECTION
let connectedClient;

export const connectClient = async () => {

    if(connectedClient){
        return connectedClient.db(DB_NAME);
    } else {
        const client = new MongoClient(MONGODB_URI)
        await client.connect();
        await client.db(DB_NAME).command({ ping: 1 });
        console.log("Connected to MongoDB");
    
        connectedClient = client;
        return client.db(DB_NAME);
    }
}

export const stopClient = async() => {
    await connectedClient?.close();
}

