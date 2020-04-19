import {
    Column,
    Model,
    Table,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import { User } from "../users/user.model";
@Table
export class Cats extends Model<Cats> {
    @Column
    firstName: string;

    @Column
    Age: number;

    @Column({ defaultValue: true })
    isActive: boolean;
    
    @HasMany(() => User)
    User: User[];
}
