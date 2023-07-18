import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { IsNotEmpty, IsBoolean } from "class-validator";
import { Vehiculo } from "./Vehiculo";

@Entity()
export class Marca {
  // Definimos la columna id como clave primaria con la anotación @PrimaryGeneratedColumn
  @PrimaryGeneratedColumn()
  id: number;

  // Definimos la columna nombre con la anotación @Column y aplicamos validación con @IsNotEmpty
  // Esta validación asegura que el campo "nombre" no esté vacío
  @Column()
  @IsNotEmpty({ message: "El nombre es requerido" })
  nombre: string;

  // Definimos la columna metalizado con la anotación @Column y aplicamos validación con @IsBoolean
  // Esta validación asegura que el campo "metalizado" sea un valor booleano (verdadero o falso)
  @Column()
  @IsBoolean({ message: 'El campo "metalizado" necesita ser un tipo booleano' })
  metalizado: boolean;

  // Definimos la columna estado con la anotación @Column y aplicamos validación con @IsBoolean
  // Esta validación asegura que el campo "estado" sea un valor booleano (verdadero o falso)
  @Column()
  @IsBoolean({ message: "Se necesita que el estado debe ser un tipo booleano" })
  estado: boolean;

  // Definimos la relación "uno a muchos" con la entidad Vehiculo usando la anotación @OneToMany
  // La función flecha () => Vehiculo especifica la clase objetivo de la relación (Vehiculo)
  // El parámetro (vehiculo) => vehiculo.marca establece el campo en la entidad Vehiculo
  // que se utilizará para realizar la relación con la entidad Tipo_Vehiculo
  // En este caso, la relación indica que un tipo de vehículo (Tipo_Vehiculo) puede tener varios vehículos asociados (Vehiculo)
  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.marca)
  vehiculos: Vehiculo[];
}
