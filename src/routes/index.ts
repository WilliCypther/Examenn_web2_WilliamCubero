import { Router } from "express";
import Marca from "./marca";
import { checkjwt } from "../middleware/jwt";
import  Vehiculo from "./Vehiculo";
const routes = Router();

routes.use("/marcas", Marca);
routes.use("/Vehiculo", Vehiculo);

export default routes;