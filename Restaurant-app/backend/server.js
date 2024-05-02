

// import express from "express";

// import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
// import reservationRouter from "./routes/reservationRoute.js";
// import { dbConnection } from "./database/dbConnection.js";

// const app = express();

// const PORT=4000;

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type"],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.use("/reservation", reservationRouter);
// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     success: true,
//     message: "HELLO WORLD AGAIN"
//   })
// })

// dbConnection();

// app.use(errorMiddleware);

// export default app;

// app.listen(PORT, ()=>{
//     console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
// })







import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "https://vikas12200441.netlify.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservationRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

dbConnection();

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
