import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const handleGlobalException = (err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Erro no servidor, contate um administrador do sistema.'
  });

}

export default handleGlobalException;