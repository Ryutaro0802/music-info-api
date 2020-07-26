import { Request, Response } from 'express'
import singleReleaseInfo from '../../public/singleReleaseInfo.json'

export const single = (req: Request, res: Response) => {
  res.json({
    message: singleReleaseInfo,
  });
};

export const album = (req: Request, res: Response) => {
  res.json({
    message: "album",
  });
};
