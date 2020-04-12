import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cats } from "./cats/cats.model";
import { CatsModule } from "./cats/cats.module";
@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "test",
            models: [Cats],
            autoLoadModels: true,
            synchronize: true
        }),
        CatsModule
    ]
})
export class AppModule {}
