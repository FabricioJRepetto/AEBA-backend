import express, { json, urlencoded } from "express";
import router from "./routes";
import { allowCors, error404, generalErrorHandler, logger } from "./middlewares";
import connectDB from "./services/database/connectDB";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(allowCors());

app.use(express.json());
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true, limit: "50mb" }));
app.use(logger());

app.use("/", router);
app.use("/*splat", error404);
app.use(generalErrorHandler);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server ready! -------------- Listening on: http://localhost:${PORT}`);
    });
});
