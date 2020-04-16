import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cats } from "./cats/cats.model";
import { Teams } from "./teams/teams.model";
import { CatsModule } from "./cats/cats.module";
import { TeamsModule } from './teams/teams.module';
@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "test",
            models: [Teams],
            autoLoadModels: true,
            synchronize: true
        }),
        TeamsModule
    ],

})
export class AppModule {}
