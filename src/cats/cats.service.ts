import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Cats } from "./cats.model";
import { CreateCatDto } from "./dto/create-cat.dto";
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
        return this.catsModel.findAll();
    }

    findOne(id: string): Promise<Cats> {
        return this.catsModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const cat = await this.findOne(id);
        await cat.destroy();
    }
}
