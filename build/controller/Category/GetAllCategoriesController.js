"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesController = void 0;
const GetAllCategoriesService_1 = __importDefault(require("../../service/Category/GetAllCategoriesService"));
class GetAllCategoriesController {
    async handle(request, response) {
        const service = new GetAllCategoriesService_1.default();
        const result = await service.execute();
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).json(result);
    }
}
exports.GetAllCategoriesController = GetAllCategoriesController;
