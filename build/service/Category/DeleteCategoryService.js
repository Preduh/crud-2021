"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Category_1 = require("../../entities/Category");
class DeleteCategoryService {
    async execute(id) {
        const categoryRepo = (0, typeorm_1.getRepository)(Category_1.Category);
        const category = await categoryRepo.findOne({
            where: { id },
        });
        if (!category) {
            return new Error("Category does not exists.");
        }
        await categoryRepo.delete(id);
    }
}
exports.default = DeleteCategoryService;
