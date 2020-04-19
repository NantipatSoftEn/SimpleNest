import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { Cats } from "../cats/cats.model";
@Table
export class User extends Model<User> {
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column({ defaultValue: true })
    isActive: boolean;

    @ForeignKey(() => Cats)
    @Column
    catsId: number;

    @BelongsTo(() => Cats)
    cats: Cats;
}
