// Importamos las dependencias necesarias de TypeORM y class-validator
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsBoolean } from 'class-validator';
// Importamos la entidad Vehiculo que se relaciona con Tipo_Vehiculo
import { Vehiculo } from './Vehiculo';

// Definimos la entidad Tipo_Vehiculo con la anotación @Entity
@Entity()
export class Tipo_Vehiculo {
    // Definimos la columna id como clave primaria con la anotación @PrimaryGeneratedColumn
  @PrimaryGeneratedColumn()
  id: number;

   
  // Definimos la columna nombre con la anotación @Column y aplicamos validación con @IsNotEmpty
  @Column()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  nombre: string;

  // Definimos la columna estado con la anotación @Column y aplicamos validación con @IsBoolean
  @Column()
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  estado: boolean;

  // Definimos la relación "uno a muchos" con la entidad Vehiculo usando la anotación @OneToMany
  // La función flecha () => Vehiculo especifica la clase objetivo de la relación (Vehiculo)
  // El parámetro (vehiculo) => vehiculo.tipoVehiculo establece el campo en la entidad Vehiculo
  // que se utilizará para realizar la relación con la entidad Tipo_Vehiculo
  @OneToMany(() => Vehiculo, (vehiculo) => vehiculo.tipoVehiculo)
  vehiculos: Vehiculo[];
}
