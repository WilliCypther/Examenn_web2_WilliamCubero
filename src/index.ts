import * as express from "express";
import { AppDataSource } from "./data-source";
import cors = require("cors");
import helmet from "helmet";
import vehiculoRoutes from "./routes/Vehiculo"; // Importamos las rutas de vehículo
import marcaRoutes from "./routes/marca"; // Importamos las rutas de marca

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {
  // Crear la aplicación de Express
  const app = express();
  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  // Asociar las rutas de vehículo
  app.use("/vehiculo", vehiculoRoutes);

  // Asociar las rutas de marca
  app.use("/marca", marcaRoutes);

  // Otras rutas para otras entidades, si las tienes
  // ...

  // Iniciar el servidor Express
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}`);
  });
}).catch((error) => console.log(error));
