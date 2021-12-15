import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { validate } from "uuid";

interface RequestDTO {
  id: string;
  name: string;
  description: string;
}

class UpdateCategoryService {
  async execute({
    id,
    name,
    description,
  }: RequestDTO): Promise<Category | Error> {
    const categoryRepo = getRepository(Category);

    if (!validate(id)) {
      return new Error("Invalid ID.");
    }

    const category = await categoryRepo.findOne(id);

    if (!category) {
      return new Error("Category does not exists.");
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await categoryRepo.save(category);

    return category;
  }
}

export default UpdateCategoryService;
