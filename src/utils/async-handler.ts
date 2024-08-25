import { NextFunction, Request, Response } from "express";

export const AsyncHandler = (requestHandler: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) =>
            next(err)
        );
    };
};
