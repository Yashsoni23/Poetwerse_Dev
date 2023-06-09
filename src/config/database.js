import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, 
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}
