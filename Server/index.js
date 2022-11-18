import express from 'express'
import dotenv from 'dotenv'

// Database Connection

import ConnectDB from "./database/connection"

import Auth from "./api/auth"

dotenv.config()

const zomatoPI = express()

zomatoPI.use(express.json())

zomatoPI.get("/" , (req,res) => {
    res.json({
        message : "Server is running"
    })
})

zomatoPI.use("/auth", Auth)

const PORT = 4000;

zomatoPI.listen(PORT, () => {
   ConnectDB()
   .then(() => {
    console.log("Server is running !!")
   })

   .catch((error) => {
    console.log("Server is running, but DB connection failed")
    console.log(error)
   })

//    console.log("Server is running !!")
}) 