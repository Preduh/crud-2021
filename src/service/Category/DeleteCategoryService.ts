import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

class DeleteCategoryService {
  async execute(id: string) {
    const categoryRepo = getRepository(Category);

    const category = await categoryRepo.findOne({
      where: { id },
    });

    if (!category) {
      return new Error("Category does not exists.");
    }

    await categoryRepo.delete(id);
  }
}

export default DeleteCategoryService;
