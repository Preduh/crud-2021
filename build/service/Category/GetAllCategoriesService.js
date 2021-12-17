"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Category_1 = require("../../entities/Category");
class GetAllCategoriesService {
    async execute() {
        const categoryRepo = (0, typeorm_1.getRepository)(Category_1.Category);
        const categories = await categoryRepo.find();
        if (!categories) {
            return new Error("No category found.");
        }
        return categories;
    }
}
exports.default = GetAllCategoriesService;
