import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export default async function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.header('access-token') // Obtém o token
    if(!token) return res.status(401).json({ //401-Not Authorized
        msg: 'Acesso negado. É obrigatório o envio do token JWT'
    })
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY || "")
        // req.usuario = decoded.usuario // Adicionamos o usuário atual na requisição
        next() // Direcionamos para o endpoint
    } catch(e) {
        res.status(403).send({error: "Token inválido!"})
    }
}