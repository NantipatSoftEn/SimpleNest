import {
    Column,
    Model,
    Table,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import { Teams } from "../teams/teams.model";
@Table
export class Cats extends Model<Cats> {
    @Column
    firstName: string;

    @Column
    Age: number;

    @Column({ defaultValue: true })
    isActive: boolean;

    @ForeignKey(() => Teams)
    @Column
    teamId: number;

    @BelongsTo(() => Teams)
    team: Teams;
}
