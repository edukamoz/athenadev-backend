import express, { Request, Response } from 'express'
import { listUsers } from '../controllers/user.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await listUsers();
    res.json(users)
})

router.post('/', (req: Request, res: Response) => {

})

router.put('/:id', (req: Request, res: Response) => {
    
})

router.delete('/:id', (req: Request, res:Response) => {

})

export default router