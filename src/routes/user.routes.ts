import express, { Request, Response } from 'express'

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send("Teste realizado com sucesso")
})

router.post('/', (req: Request, res: Response) => {

})

router.put('/:id', (req: Request, res: Response) => {
    
})

router.delete('/:id', (req: Request, res:Response) => {

})

export default router