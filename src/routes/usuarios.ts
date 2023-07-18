import { Router } from "express";
import UsuariosController from "../controller/UsuarioController";

const routes = Router();
// Ruta para agregar un nuevo usuario
routes.post("", UsuariosController.add);

export default routes;