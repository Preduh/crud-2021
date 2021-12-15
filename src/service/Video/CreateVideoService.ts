import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { Video } from "../../entities/Video";

interface RequestDTO {
  name: string;
  description: string;
  category_id: string;
  duration: Number;
}

class CreateVideoService {
  async execute({
    name,
    description,
    category_id,
    duration,
  }: RequestDTO): Promise<Video | Error> {
    const videoRepo = getRepository(Video);
    const categoryRepo = getRepository(Category);

    const categoryExists = await categoryRepo.findOne({
      where: { id: category_id },
    });

    if (!categoryExists) {
      return new Error("Category does not exists.");
    }

    const video = videoRepo.create({
      name,
      description,
      category_id,
      duration,
    });

    await videoRepo.save(video);

    return video;
  }
}

export default CreateVideoService;
