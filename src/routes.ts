import { Router } from "express";

import { CreateCategoryController } from "./controller/Category/CreateCategoryController";
import { DeleteCategoryController } from "./controller/Category/DeleteCategoryController";
import { GetAllCategoriesController } from "./controller/Category/GetAllCategoriesController";
import { UpdateCategoryController } from "./controller/Category/UpdateCategoryController";
import { CreateVideoController } from "./controller/Video/CreateVideoController";
import { GetAllVideosController } from "./controller/Video/GetAllVideosController";

const routes = Router();

// Category
routes.get("/categories", new GetAllCategoriesController().handle);
routes.post("/categories", new CreateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

// Video
routes.get("/videos", new GetAllVideosController().handle);
routes.post("/videos", new CreateVideoController().handle);

export default routes;
