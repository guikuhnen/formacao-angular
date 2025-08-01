import { Router } from "express";
import { helloWorldController } from "./controller/hello-world.controller";

const router = Router();

const baseUrl = '/api/hello-world';

router.get(`${baseUrl}`, helloWorldController.helloWorld);

export const HelloWorldRouter = router;