import { Request, Response } from 'express';

class HelloWorldController {
  public async helloWorld(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ data: 'Hello World!1' });
  }
}

export const helloWorldController = new HelloWorldController();