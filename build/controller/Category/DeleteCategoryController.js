"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryController = void 0;
const DeleteCategoryService_1 = __importDefault(require("../../service/Category/DeleteCategoryService"));
class DeleteCategoryController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new DeleteCategoryService_1.default();
        const result = await service.execute(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).end();
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
