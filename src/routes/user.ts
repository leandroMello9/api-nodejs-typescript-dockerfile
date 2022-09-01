import { Router } from 'express';
import UserController from '../controller/UserController'
const userRoutes = Router();

userRoutes.get("");
userRoutes.post("", UserController.store);
userRoutes.put("")
userRoutes.delete("");

export default userRoutes;