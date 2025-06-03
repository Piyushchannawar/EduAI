import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/dbConnect.js';
import userRoute from "./routes/user.route.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';
import courseRoute from "./routes/course.route.js"


dotenv.config();
const app = express();

connectDB();

// middlewares
app.use(express.json());
app.use(cookieParser())
// cors
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))



const PORT = process.env.PORT || 3000;



// apis

app.use("/api/v1/user",userRoute);
app.use("/api/v1/course",courseRoute);




app.listen(PORT, () => {
    console.log('Server is running on http://localhost:'+ PORT);
});
