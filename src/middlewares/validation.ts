import { check, param, validationResult } from "express-validator"
import { NextFunction, Request, Response } from "express"

// Middleware para verificar resultados da validação
export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: true,
      message: "Erro de validação",
      errors: errors.array(),
    })
  }
  next()
}