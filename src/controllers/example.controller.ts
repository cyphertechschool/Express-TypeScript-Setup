import { Request, Response } from "express";
import { AsyncHandler } from "../utils/async-handler";
import ApiResponseHandler from "../exceptions/api-response";

export const exampleController = AsyncHandler(
    async (req: Request, res: Response) => {
        //TODO: create example

        let data = {
            name: "Example",
            description: "Example Description",
        };

        return res
            .status(201)
            .json(new ApiResponseHandler(201, "success", data));
    }
);
