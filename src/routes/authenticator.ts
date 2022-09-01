import { Router } from 'express';
import AuthenticatorController from '../controller/AuthenticatorController'
const authenticatorRoutes = Router();

authenticatorRoutes.get("");
authenticatorRoutes.post("", AuthenticatorController.store);
export default authenticatorRoutes;