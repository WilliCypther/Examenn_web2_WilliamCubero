import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Marca } from "../entity/Marca";
import { AppDataSource } from "../data-source";

/**
 * Controlador para manejar las operaciones relacionadas con la entidad Marca.
 */

class MarcaController {
  // Inserta una nueva marca en la base de datos.
  //@param req - Objeto de solicitud de Express.
  //@param res - Objeto de respuesta de Express.
  //@returns JSON con la marca recién creada y el código de estado 201 (creado) si tiene éxito.
  //       JSON con un mensaje de error y el código de estado 500 (error del servidor) si hay un error.

  static insertMarca = async (req: Request, res: Response) => {
    try {
      const marcaRepository = AppDataSource.getRepository(Marca);
      const nuevaMarca = marcaRepository.create(req.body);
      const marcaGuardada = await marcaRepository.save(nuevaMarca);
      res.status(201).json(marcaGuardada);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al insertar la marca.", error });
    }
  };

  //Obtiene una marca por su ID de la base de datos.
  //@param req - Objeto de solicitud de Express.
  //@param res - Objeto de respuesta de Express.
  //@returns JSON con la marca encontrada y el código de estado 200 (éxito) si tiene éxito.
  //       JSON con un mensaje de error y el código de estado 404 (no encontrado) si no se encuentra la marca.
  //     JSON con un mensaje de error y el código de estado 500 (error del servidor) si hay un error.

  static getMarcaById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      if (!id) {
        return res
          .status(400)
          .json({ mensaje: "Debe proporcionar el ID de la marca." });
      }

      const marcaRepository = AppDataSource.getRepository(Marca);
      const marca = await marcaRepository.findOne({ where: { id } });

      if (!marca) {
        return res.status(404).json({ mensaje: "Marca no encontrada." });
      }

      res.status(200).json(marca);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener la marca.", error });
    }
  };

  //Obtiene una marca por su ID de la base de datos.
  //@param req - Objeto de solicitud de Express.
  //@param res - Objeto de respuesta de Express.
  //@returns JSON con la marca encontrada y el código de estado 200 (éxito) si tiene éxito.
  //     JSON con un mensaje de error y el código de estado 404 (no encontrado) si no se encuentra la marca.

  static getAllMarcas = async (req: Request, res: Response) => {
    try {
      const marcaRepository = AppDataSource.getRepository(Marca);
      const marcas = await marcaRepository.find();
      res.status(200).json(marcas);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener las marcas.", error });
    }
  };
  
}

export default MarcaController;
