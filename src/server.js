import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("I still love you! ❤❤");
}

const handleLogin = (req, res) => {
    return res.send("Login Here!");
}

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const hadleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 💨💨💨`);

app.listen(PORT, hadleListening);