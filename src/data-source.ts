import "reflect-metadata"
import { DataSource } from "typeorm"
import { Color } from "./entity/Color"
import { Marca } from "./entity/Marca"
import { Vehiculo } from "./entity/Vehiculo"
import { Tipo_Vehiculo } from "./entity/TipoVehiculo"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "bdExamen",
    synchronize: true,
    logging: false,
    entities: [Color,Marca,Tipo_Vehiculo,Vehiculo],
    migrations: [],
    subscribers: [],
})
