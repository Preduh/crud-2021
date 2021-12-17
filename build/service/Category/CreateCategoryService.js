"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Category_1 = require("../../entities/Category");
class CreateCategoryService {
    async execute({ name, description }) {
        const categoryRepo = (0, typeorm_1.getRepository)(Category_1.Category);
        const existsCategory = await categoryRepo.findOne({
            where: { name },
        });
        if (existsCategory) {
            return new Error("Category already exists.");
        }
        const category = categoryRepo.create({ name, description });
        await categoryRepo.save(category);
        return category;
    }
}
exports.default = CreateCategoryService;
