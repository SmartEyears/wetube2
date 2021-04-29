import express from "express";

const app = express();

const PORT = 4000;

const gossipMiddleware = (req, res, next) => {
    console.log("i am middle");
    next();
};

const handleHome = (req, res) => {
    return res.send("I still love you! ❤❤");
}

const handleLogin = (req, res) => {
    return res.send("Login Here!");
}

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const hadleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 💨💨💨`);

app.listen(PORT, hadleListening);