import { Sequelize } from "sequelize-typescript";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Teams } from "../teams/teams.model";
@Injectable()
export class TeamsService {
    constructor(
        @InjectModel(Teams)
        private readonly teamsModel: typeof Teams,
        private readonly sequelize: Sequelize
    ) {}
    async findAll(): Promise<Teams[]> {
        try {
            await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t };

                await this.teamsModel.create(
                    { Name: "dark" },
                    transactionHost
                );
                await this.teamsModel.create({ Name: "white" }, transactionHost);
            });
        } catch (err) {
            // Transaction has been rolled back
            // err is whatever rejected the promise chain returned to the transaction callback
        }
        return this.teamsModel.findAll();
    }
}
