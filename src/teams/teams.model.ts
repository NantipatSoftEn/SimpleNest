import { Column, Model, Table,HasMany } from 'sequelize-typescript';
import { Cats } from "../cats/cats.model";
@Table
export class Teams extends Model<Teams> {

    
  @Column
  Name: string;
  @HasMany(() => Cats)
  players: Cats[];
}