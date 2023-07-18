import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import {
  IsNotEmpty,
  IsInt,
  IsDate,
  IsBoolean,
  Min,
  Max,
  Length,
  IsISO8601,
} from "class-validator";
import { Marca } from "./Marca";
import { Color } from "./Color";
import { Tipo_Vehiculo } from "./TipoVehiculo";

@Entity()
export class Vehiculo {
  // Definimos la columna id como clave primaria con la anotación @PrimaryGeneratedColumn

  @PrimaryGeneratedColumn()
  id: number;

  // Definimos la columna placa con la anotación @Column y aplicamos validación con @IsNotEmpty y @Length
  // La validación @IsNotEmpty asegura que el campo "placa" no esté vacío
  // La validación @Length asegura que el campo "placa" tenga una longitud entre 6 y 10 caracteres
  @Column()
  @IsNotEmpty({ message: "La placa es requerida" })
  @Length(6, 10, { message: "La placa debe tener entre 6 y 10 caracteres" })
  placa: string;

  // Definimos la relación "muchos a uno" con la entidad Marca usando la anotación @ManyToOne
  // La función flecha () => Marca especifica la clase objetivo de la relación (Marca)
  // El parámetro (marca) => marca.vehiculos establece el campo en la entidad Marca
  // que se utilizará para realizar la relación con la entidad Vehiculo
  @ManyToOne(() => Marca, (marca) => marca.vehiculos)
  marca: Marca;

  // Definimos la relación "muchos a uno" con la entidad Color usando la anotación @ManyToOne
  // La función flecha () => Color especifica la clase objetivo de la relación (Color)
  // El parámetro (color) => color.vehiculos establece el campo en la entidad Color
  // que se utilizará para realizar la relación con la entidad Vehiculo
  @ManyToOne(() => Color, (color) => color.vehiculos)
  color: Color;

  // Definimos la columna cilindraje con la anotación @Column y aplicamos validación con @IsInt
  // La validación @IsInt asegura que el campo "cilindraje" sea un valor entero

  @Column()
  @IsInt({ message: "El cilindraje debe ser un valor entero" })
  cilindraje: number;

  // Definimos la relación "muchos a uno" con la entidad Tipo_Vehiculo usando la anotación @ManyToOne
  // La función flecha () => Tipo_Vehiculo especifica la clase objetivo de la relación (Tipo_Vehiculo)
  // El parámetro (tipoVehiculo) => tipoVehiculo.vehiculos establece el campo en la entidad Tipo_Vehiculo
  // que se utilizará para realizar la relación con la entidad Vehiculo

  @ManyToOne(() => Tipo_Vehiculo, (tipoVehiculo) => tipoVehiculo.vehiculos)
  tipoVehiculo: Tipo_Vehiculo;

  // Definimos la columna cantidadPasajeros con la anotación @Column y aplicamos validación con @IsInt, @Min y @Max
  // La validación @IsInt asegura que el campo "cantidadPasajeros" sea un valor entero
  // La validación @Min asegura que el campo "cantidadPasajeros" sea al menos 1
  // La validación @Max asegura que el campo "cantidadPasajeros" no sea mayor a 100

  @Column()
  @IsInt({ message: "La cantidad de pasajeros debe ser un valor entero" })
  @Min(1, { message: "La cantidad de pasajeros debe ser al menos 1" })
  @Max(100, { message: "La cantidad de pasajeros no puede ser mayor a 100" })
  cantidadPasajeros: number;

  // Definimos la columna fecha_ingreso con la anotación @Column y aplicamos validación con @IsDate
  // La validación @IsDate asegura que el campo "fecha_ingreso" sea una fecha válida

  @Column("date")
  @IsDate({ message: "La fecha de ingreso debe ser una fecha válida" })
  fecha_ingreso: Date;

  // Definimos la columna estado con la anotación @Column y aplicamos validación con @IsBoolean
  // La validación @IsBoolean asegura que el campo "estado" sea un valor booleano (verdadero o falso)

  @Column()
  @IsBoolean({ message: "El estado debe ser un valor booleano" })
  estado: boolean;
}
