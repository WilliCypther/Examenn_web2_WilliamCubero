import { Router } from "express";
import MarcaController from "../controller/MarcaController";
import VehiculoController from "../controller/VehiculoController";

const routes = Router();
// Ruta para insertar una nueva marca de vehículo
routes.post("", MarcaController.insertMarca);
// Ruta para obtener una marca de vehículo por su ID
routes.get("/:id", MarcaController.getMarcaById);
// Ruta para obtener todas las marcas de vehículos
routes.get("", MarcaController.getAllMarcas);




// Rutas relacionadas con los vehículos (Las realice en  otro archivo de rutas)
//routes.post("/vehiculo", VehiculoController.insertVehiculo);
//routes.get("/vehiculo/:id", VehiculoController.getVehiculoById);
//routes.get("/vehiculo", VehiculoController.getAllVehiculos);

//routes.post("/marca", MarcaController.getAll);

export default routes;
