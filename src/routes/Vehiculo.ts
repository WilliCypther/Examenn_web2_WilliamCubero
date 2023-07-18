// index.ts (Archivo de rutas principal)
import { Router } from "express";
import  VehiculoController  from "../controller/VehiculoController";

const routes = Router();

// Ruta para obtener un vehículo por placa
routes.post("", VehiculoController.insertVehiculo);
// Ruta para obtener un vehículo por su placa
routes.get("/:placa", VehiculoController.getVehiculoByPlaca);
// Ruta para eliminar un vehículo por su ID
routes.delete("/:id", VehiculoController.deleteVehiculo);


// Otras rutas para insertar, actualizar, etc. otros recursos relacionados con vehículos
// Por ejemplo: routes.put("/:id", VehiculoController.updateVehiculo);
// Otras rutas relacionadas con vehículos...

export default routes;
