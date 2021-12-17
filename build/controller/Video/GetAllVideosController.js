"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVideosController = void 0;
const GetAllVideosService_1 = __importDefault(require("../../service/Video/GetAllVideosService"));
class GetAllVideosController {
    async handle(request, response) {
        const service = new GetAllVideosService_1.default();
        const result = await service.execute();
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        for (const video of result) {
            delete video.category_id;
        }
        return response.status(200).json(result);
    }
}
exports.GetAllVideosController = GetAllVideosController;
