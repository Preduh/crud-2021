"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVideoController = void 0;
const CreateVideoService_1 = __importDefault(require("../../service/Video/CreateVideoService"));
class CreateVideoController {
    async handle(request, response) {
        const { name, description, category_id, duration } = request.body;
        const service = new CreateVideoService_1.default();
        const result = await service.execute({
            name,
            description,
            category_id,
            duration,
        });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(201).json(result);
    }
}
exports.CreateVideoController = CreateVideoController;
