import { Router } from "express";
import { exampleController } from "../controllers/example.controller";

const router: Router = Router();

router.route("/example").get(exampleController);

export default router;
