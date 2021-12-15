import { getRepository } from "typeorm";

import { Category } from "../../entities/Category";

class GetAllCategoriesService {
  async execute(): Promise<Category[] | Error> {
    const categoryRepo = getRepository(Category);

    const categories = await categoryRepo.find();

    if (!categories) {
      return new Error("No category found.");
    }

    return categories;
  }
}

export default GetAllCategoriesService;
