import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Cats } from "./cats.model";
import { CatsService } from "./cats.service";
import { CreateCatDto } from './dto/create-cat.dto'; // data transfer object 
@Controller("cats")
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    create(@Body() createCatDto: CreateCatDto): Promise<Cats> {
        return this.catsService.create(createCatDto);
    }

    @Get()
    findAll(): Promise<Cats[]> {
        return this.catsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string): Promise<Cats> {
        return this.catsService.findOne(id);
    }

    @Delete(":id")
    remove(@Param("id") id: string): Promise<void> {
        return this.catsService.remove(id);
    }
}
