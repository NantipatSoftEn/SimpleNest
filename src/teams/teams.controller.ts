import { Controller, Get } from "@nestjs/common";
import { Teams } from "../teams/teams.model";
import { TeamsService } from "../teams/teams.service";
@Controller("teams")
export class TeamsController {

    constructor(private readonly teamService: TeamsService) {}
    @Get()
    findAll(): Promise<Teams[]> {
        return this.teamService.findAll();
    }
}
