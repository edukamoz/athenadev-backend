import express, { Request, Response } from 'express'
import { createUser, deleteUser, listUsers, updateUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await listUsers();
    res.json(users)
})

router.post('/', async (req: Request, res: Response) => {

    const {
        email,
        password,
        name,
        photo
    } = req.body

    const user = await createUser(email, password, name, photo);
    res.json(user)
})

router.put('/:id', async (req: Request, res: Response) => {
    const user = await updateUser();
    res.json(user)
})

router.delete('/:id', async (req: Request, res:Response) => {
    const user = await deleteUser();
    res.json(user)
})

export default router