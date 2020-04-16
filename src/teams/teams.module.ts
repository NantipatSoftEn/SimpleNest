import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from "@nestjs/common";
import { Teams } from './teams.model';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

@Module({
    imports: [SequelizeModule.forFeature([Teams])],
    providers: [TeamsService],
    controllers: [TeamsController]
})
export class TeamsModule {}
