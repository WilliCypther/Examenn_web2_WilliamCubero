import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Column, Entity, PrimaryColumn, Unique } from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity()
export class Usuarios {
  // Definimos la columna cedula como clave primaria con la anotación @PrimaryColumn
  @PrimaryColumn()
  @IsNotEmpty({ message: "Falta la cedula" })
  cedula: string;

  // Definimos la columna nombre con la anotación @Column y aplicamos validación con @MaxLength y @IsNotEmpty
  // La validación @MaxLength asegura que el campo "nombre" tenga una longitud máxima de 50 caracteres
  // La validación @IsNotEmpty asegura que el campo "nombre" no esté vacío
  @Column({ length: 50 })
  @MaxLength(50)
  @IsNotEmpty({ message: "Falta el nombre" })
  nombre: string;

  // Definimos la columna apellido1 con la anotación @Column y aplicamos validación con @MaxLength y @IsNotEmpty
  // La validación @MaxLength asegura que el campo "apellido1" tenga una longitud máxima de 50 caracteres
  // La validación @IsNotEmpty asegura que el campo "apellido1" no esté vacío
  @Column()
  @MaxLength(50)
  @IsNotEmpty({ message: "Falta el apellido 1" })
  apellido1: string;

  // Definimos la columna apellido2 con la anotación @Column y aplicamos validación con @MaxLength y @IsNotEmpty
  // La validación @MaxLength asegura que el campo "apellido2" tenga una longitud máxima de 50 caracteres
  // La validación @IsNotEmpty asegura que el campo "apellido2" no esté vacío
  @Column()
  @MaxLength(50)
  @IsNotEmpty({ message: "Falta el apellido 2" })
  apellido2: string;

  // Definimos la columna fecha_ingreso con la anotación @Column
  // Esta columna almacenará la fecha de ingreso del usuario
  @Column()
  fecha_ingreso: Date;

  // Definimos la columna correo con la anotación @Column y aplicamos validación con @IsEmail, @IsNotEmpty y @MaxLength
  // La validación @IsEmail asegura que el campo "correo" sea una dirección de correo electrónico válida
  // La validación @IsNotEmpty asegura que el campo "correo" no esté vacío
  // La validación @MaxLength asegura que el campo "correo" tenga una longitud máxima de 50 caracteres
  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty({ message: "Falta el correo" })
  @MaxLength(50)
  correo: string;

  // Definimos la columna rol con la anotación @Column y aplicamos validación con @IsNotEmpty
  // La validación @IsNotEmpty asegura que el campo "rol" no esté vacío
  @Column()
  @IsNotEmpty({ message: "Falta el rol" })
  rol: string;

  // Definimos la columna contrasena con la anotación @Column y aplicamos validación con @MaxLength, @MinLength y @IsNotEmpty
  // La validación @MaxLength asegura que el campo "contrasena" tenga una longitud máxima de 30 caracteres
  // La validación @MinLength asegura que el campo "contrasena" tenga una longitud mínima de 5 caracteres
  // La validación @IsNotEmpty asegura que el campo "contrasena" no esté vacío
  @Column()
  @Column()
  @MaxLength(30)
  @MinLength(5)
  @IsNotEmpty({ message: "Falta la contraseña" })
  contrasena: string;

  // Definimos la columna estado con la anotación @Column y establecemos un valor por defecto (true)
  // Esta columna almacenará el estado del usuario, donde true indica activo y false indica inactivo
  @Column({ default: true })
  estado: boolean;

  // Método para hashear la contraseña del usuario antes de guardarla en la base de datos
  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.contrasena = bcrypt.hashSync(this.contrasena, salt);
  }
  // Método para verificar si la contraseña proporcionada coincide con la contraseña almacenada (hash) del usuario

  checkPassword(contra: string): boolean {
    return bcrypt.compareSync(contra, this.contrasena);
  }
}
