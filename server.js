import express from "express"
import 'dotenv/config'
import cors from "cors"
import connectToMongoDB  from "./db/connection.js"
import formRoutes from "./routes/formRoutes.js"
const app = express()
const port=process.env.PORT||4000
app.use(express.json())

connectToMongoDB()
.then(() => {
    app.use(cors());
app.use("/api/form",formRoutes)

app.all("*",(req,res)=>{
    res.status(400).json({messsage:"invalid route"})
})

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});




