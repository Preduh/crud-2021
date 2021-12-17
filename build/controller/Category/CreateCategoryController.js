"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryService_1 = __importDefault(require("../../service/Category/CreateCategoryService"));
class CreateCategoryController {
    async handle(request, response) {
        const { name, description } = request.body;
        const service = new CreateCategoryService_1.default();
        const result = await service.execute({ name, description });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(201).json(result);
    }
}
exports.CreateCategoryController = CreateCategoryController;
