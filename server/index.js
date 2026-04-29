const express=require("express");
const cors=require("cors");
const employeeRoutes=require("./employeeRoutes")
const app=express();

const corsOptions = {
  origin: [
    "http://localhost:5008",
    // "https://client-crudoperation.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api",employeeRoutes)

const PORT = process.env.PORT || 5007;
app.listen(PORT,()=>{
    console.log("server is listening at 5007")
})