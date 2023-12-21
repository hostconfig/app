import express, { NextFunction, Request, Response } from 'express'

const appRouter = express.Router()

/* GET home page. */
appRouter.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'hostconfig/app' });
});

export default appRouter
