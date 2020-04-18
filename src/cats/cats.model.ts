import {
    Column,
    Model,
    Table,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
@Table
export class Cats extends Model<Cats> {
    @Column
    firstName: string;

    @Column
    Age: number;

    @Column({ defaultValue: true })
    isActive: boolean;
}
