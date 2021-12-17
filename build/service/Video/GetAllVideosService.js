"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Video_1 = require("../../entities/Video");
class GetAllVideosService {
    async execute() {
        const categoryRepo = (0, typeorm_1.getRepository)(Video_1.Video);
        const videos = await categoryRepo.find({
            relations: ["category"],
        });
        if (!videos) {
            return new Error("No video found.");
        }
        return videos;
    }
}
exports.default = GetAllVideosService;
