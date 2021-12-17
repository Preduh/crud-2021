"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateCategoryController_1 = require("./controller/Category/CreateCategoryController");
const DeleteCategoryController_1 = require("./controller/Category/DeleteCategoryController");
const GetAllCategoriesController_1 = require("./controller/Category/GetAllCategoriesController");
const UpdateCategoryController_1 = require("./controller/Category/UpdateCategoryController");
const CreateVideoController_1 = require("./controller/Video/CreateVideoController");
const GetAllVideosController_1 = require("./controller/Video/GetAllVideosController");
const routes = (0, express_1.Router)();
// Category
routes.get("/categories", new GetAllCategoriesController_1.GetAllCategoriesController().handle);
routes.post("/categories", new CreateCategoryController_1.CreateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController_1.DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController_1.UpdateCategoryController().handle);
// Video
routes.get("/videos", new GetAllVideosController_1.GetAllVideosController().handle);
routes.post("/videos", new CreateVideoController_1.CreateVideoController().handle);
exports.default = routes;
