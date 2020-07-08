import { Request, Response } from 'express'

export const single = (req: Request, res: Response) => {
  res.json({
    message: "single",
  });
};

export const album = (req: Request, res: Response) => {
  res.json({
    message: "album",
  });
};
