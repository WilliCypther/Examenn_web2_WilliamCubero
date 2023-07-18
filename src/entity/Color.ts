import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsBoolean, Length } from 'class-validator';
import { Vehiculo } from './Vehiculo';

@Entity()
export class Color {

  // Definimos la columna id como clave primaria con la anotación @PrimaryGeneratedColumn
  @PrimaryGeneratedColumn()
  id: number;


  // Definimos la columna nombre con la anotación @Column y aplicamos validación con @IsNotEmpty y @Length
  // La validación @IsNotEmpty asegura que el campo "nombre" no esté vacío
  // La validación @Length asegura que el campo "nombre" tenga una longitud entre 3 y 30 caracteres
  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @Length(3, 30, { message: 'El nombre debe tener entre 3 y 30 caracteres' })
  nombre: string;

  // Definimos la columna estado con la anotación @Column y aplicamos validación con @IsBoolean
  // Esta validación asegura que el campo "estado" sea un valor booleano (verdadero o falso)
  @Column()
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  estado: boolean;

  // Definimos la relación "uno a muchos" con la entidad Vehiculo usando la anotación @OneToMany
  // La función flecha () => Vehiculo especifica la clase objetivo de la relación (Vehiculo)
  // El parámetro (vehiculo) => vehiculo.color establece el campo en la entidad Vehiculo
  // que se utilizará para realizar la relación con la entidad Color
  // En este caso, la relación indica que un color (Color) puede estar asociado a varios vehículos (Vehiculo)
  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.color)
  vehiculos: Vehiculo[];
}
