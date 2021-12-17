"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Category_1 = require("../../entities/Category");
const uuid_1 = require("uuid");
class UpdateCategoryService {
    async execute({ id, name, description, }) {
        const categoryRepo = (0, typeorm_1.getRepository)(Category_1.Category);
        if (!(0, uuid_1.validate)(id)) {
            return new Error("Invalid ID.");
        }
        const category = await categoryRepo.findOne(id);
        if (!category) {
            return new Error("Category does not exists.");
        }
        category.name = name ? name : category.name;
        category.description = description ? description : category.description;
        await categoryRepo.save(category);
        return category;
    }
}
exports.default = UpdateCategoryService;
