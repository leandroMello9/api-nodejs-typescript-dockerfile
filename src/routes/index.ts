import express from "express";
import authenticatorRoutes from "./authenticator";
import todoRoutes from "./todo";
import userRoutes from "./user";

const routes = express();

routes.use("/todo", todoRoutes);
routes.use("/user", userRoutes);
routes.use("/auth", authenticatorRoutes);

export default routes;