import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

interface RequestDTO {
  name: string;
  description: string;
}

class CreateCategoryService {
  async execute({ name, description }: RequestDTO): Promise<Category | Error> {
    const categoryRepo = getRepository(Category);

    const existsCategory = await categoryRepo.findOne({
      where: { name },
    });

    if (existsCategory) {
      return new Error("Category already exists.");
    }

    const category = categoryRepo.create({ name, description });

    await categoryRepo.save(category);

    return category;
  }
}

export default CreateCategoryService;
