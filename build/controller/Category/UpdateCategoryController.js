"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryController = void 0;
const UpdateCategoryService_1 = __importDefault(require("../../service/Category/UpdateCategoryService"));
class UpdateCategoryController {
    async handle(request, response) {
        const { id } = request.params;
        const { name, description } = request.body;
        const service = new UpdateCategoryService_1.default();
        const result = await service.execute({ id, name, description });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).json(result);
    }
}
exports.UpdateCategoryController = UpdateCategoryController;
