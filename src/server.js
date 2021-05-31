import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Hi! Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleUserEdit = (req, res) => res.send("User EditPage");

userRouter.get("/edit", handleUserEdit);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleLogin = (req, res) => {
    return res.send("Login Here!");
}

const hadleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 💨💨💨`);

app.listen(PORT, hadleListening);