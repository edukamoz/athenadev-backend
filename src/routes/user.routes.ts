import express, { type Request, type Response } from "express"
import { createUser, deleteUser, listUserById, listUsers, updateUser } from "../controllers/user.controller"

const router = express.Router()

router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await listUsers()
        res.json(users)
    } catch (error) {
        console.error("Erro em GET /users:", error)
        res.status(500).json({ message: "Erro ao buscar usuários", error })
    }
})

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const user = await listUserById(id)

        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado" })
            return
        }

        res.json(user)
    } catch (error) {
        console.error("Erro em GET /users/:id:", error)
        res.status(500).json({ message: "Erro ao buscar usuário", error })
    }
})

router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, name } = req.body

        // Validação básica
        if (!email || !password || !name) {
            res.status(400).json({
                message: "Campos obrigatórios faltando",
                required: ["email", "password", "name"],
            })
            return
        }

        const user = await createUser(email, password, name)
        res.status(201).json(user)
    } catch (error) {
        console.error("Erro em POST /users:", error)
        res.status(500).json({ message: "Erro ao criar usuário", error })
    }
})

router.put("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const userData = req.body

        const user = await updateUser(id, userData)

        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado" })
            return
        }

        res.json(user)
    } catch (error) {
        console.error("Erro em PUT /users/:id:", error)
        res.status(500).json({ message: "Erro ao atualizar usuário", error })
    }
})

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const result = await deleteUser(id)

        if (!result) {
            res.status(404).json({ message: "Usuário não encontrado" })
            return
        }

        res.json({ message: "Usuário deletado com sucesso" })
    } catch (error) {
        console.error("Erro em DELETE /users/:id:", error)
        res.status(500).json({ message: "Erro ao deletar usuário", error })
    }
})

export default router
