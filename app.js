// const express=require("express");
// const app=express();
// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.json({
//         message:"Student API is running successfully",
//         environment:process.env.NODE_ENV || "development"
//     });
// });
// app.get("/health",(req,res)=>{
//     res.status(200).json({
//         status:"OK"
//     });
// });
// app.get("/students",(req,res)=>{
//     const students=[
//         {id:1,name:"Ravi",course:"NodeJS"},
//         {id:2,name:"Priya",course:"JAVA"},
//         {id:3,name:"Anil",course:"Python"},
//     ];
//     res.json(students);
// });

// app.post("/students",(req,res)=>{
//     const{name,course}=req.body,
//     res.status(201).json({
//         message:"Student received successfully",
//         student:{name,course}
//     });
// });
// const port=process.env.port || 3001;
// app.listen(port,"0.0.0.0",()=>{
//     console.log("server runnning on port");
// });

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Student API is running successfully",
        environment: process.env.NODE_ENV || "development"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK"
    });
});

app.get("/students", (req, res) => {
    const students = [
        { id: 1, name: "Ravi", course: "NodeJS" },
        { id: 2, name: "Priya", course: "JAVA" },
        { id: 3, name: "Anil", course: "Python" },
    ];
    res.json(students);
});

app.post("/students", (req, res) => {
    const { name, course } = req.body;
    res.status(201).json({
        message: "Student received successfully",
        student: { name, course }
    });
});

const port = process.env.PORT || 3001;

app.listen(port, "0.0.0.0", () => {
    console.log("server runnning on port", port);
});

