"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Category_1 = require("../../entities/Category");
const Video_1 = require("../../entities/Video");
class CreateVideoService {
    async execute({ name, description, category_id, duration, }) {
        const videoRepo = (0, typeorm_1.getRepository)(Video_1.Video);
        const categoryRepo = (0, typeorm_1.getRepository)(Category_1.Category);
        const categoryExists = await categoryRepo.findOne({
            where: { id: category_id },
        });
        if (!categoryExists) {
            return new Error("Category does not exists.");
        }
        const video = videoRepo.create({
            name,
            description,
            category_id,
            duration,
        });
        await videoRepo.save(video);
        return video;
    }
}
exports.default = CreateVideoService;
