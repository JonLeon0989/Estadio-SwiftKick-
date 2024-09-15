import dotenv from"dotenv"
dotenv.config({path:"./src/config/.env"})

const {PORT}= process.env;

export{PORT}