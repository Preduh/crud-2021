import { Request, Response } from "express";
import GetAllVideosService from "../../service/Video/GetAllVideosService";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new GetAllVideosService();

    const result = await service.execute();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    for (const video of result) {
      delete video.category_id;
    }

    return response.status(200).json(result);
  }
}
