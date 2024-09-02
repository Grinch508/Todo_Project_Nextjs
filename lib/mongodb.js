import mongoose from "mongoose";

const uri = process.env.MONGO_URI

if (!uri) {
    throw new Error('Please define uri. (check .env folder)')
}

export default async function dbConnect() {
    if (mongoose.connection.readyState !== 1) {
        try {
            await mongoose.connect(uri)
            console.log('connected to database')
        } catch(err) {
            console.log(err) 
            throw new Error('Error connecting to database.')
        }
    } else {
        console.log('Db is already connected')
    }
}