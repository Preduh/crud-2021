import { getRepository } from "typeorm";

import { Video } from "../../entities/Video";

class GetAllVideosService {
  async execute(): Promise<Video[] | Error> {
    const categoryRepo = getRepository(Video);

    const videos = await categoryRepo.find({
      relations: ["category"],
    });

    if (!videos) {
      return new Error("No video found.");
    }

    return videos;
  }
}

export default GetAllVideosService;
