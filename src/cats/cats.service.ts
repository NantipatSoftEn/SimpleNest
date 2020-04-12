import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Cats } from "./cats.model";
import { CreateCatDto } from './dto/create-cat.dto';
@Injectable()
export class CatsService {
    constructor(
        @InjectModel(Cats)
        private readonly catsModel: typeof Cats,
        private readonly sequelize: Sequelize
    ) {}

    create(createUserDto: CreateCatDto): Promise<Cats> {
        const cat = new Cats();
        cat.firstName = createUserDto.firstName;
        cat.Age = createUserDto.Age;

        return cat.save();
    }
    async findAll(): Promise<Cats[]> {
        try {
            await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t };

                await this.catsModel.create(
                    { firstName: "yello", Age: "22" },
                    transactionHost
                );
                await this.catsModel.create(
                    { firstName: "blue", Age: "8" },
                    transactionHost
                );
            });
        } catch (err) {
            // Transaction has been rolled back
            // err is whatever rejected the promise chain returned to the transaction callback
        }
        return this.catsModel.findAll();
    }

    findOne(id: string): Promise<Cats> {
        return this.catsModel.findOne({
            where: {
                id
            }
        });
    }

    async remove(id: string): Promise<void> {
        const cat = await this.findOne(id);
        await cat.destroy();
    }
}
