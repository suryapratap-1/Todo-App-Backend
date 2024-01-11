import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js"
import { router } from "./routes/todo.route.js";

dotenv.config({ path: "./env" })

connectDB()
.then( () => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port: http://localhost:${process.env.PORT}`)
    })

    app.use("/api/v1/", router)
})
.catch((error) => {
    console.log("MongoDB connection failed!! Error: ", error)
})