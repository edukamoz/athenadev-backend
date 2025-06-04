import express, { type Request, type Response } from "express"
import { createUser, deleteUser, listUserById, listUsers, updateUser } from "../controllers/user.controller"

const router = express.Router()

router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await listUsers()
        res.json(users)
    } catch (error) {
        console.error("Error in GET /users:", error)
        res.status(500).json({ message: "Error fetching users", error })
    }
})

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const user = await listUserById(id)

        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }

        res.json(user)
    } catch (error) {
        console.error("Error in GET /users/:id:", error)
        res.status(500).json({ message: "Error fetching user", error })
    }
})

router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, name, photo } = req.body

        // Validação básica
        if (!email || !password || !name) {
            res.status(400).json({
                message: "Missing required fields",
                required: ["email", "password", "name"],
            })
            return
        }

        const user = await createUser(email, password, name, photo)
        res.status(201).json(user)
    } catch (error) {
        console.error("Error in POST /users:", error)
        res.status(500).json({ message: "Error creating user", error })
    }
})

router.put("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const userData = req.body

        const user = await updateUser(id, userData)

        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }

        res.json(user)
    } catch (error) {
        console.error("Error in PUT /users/:id:", error)
        res.status(500).json({ message: "Error updating user", error })
    }
})

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const result = await deleteUser(id)

        if (!result) {
            res.status(404).json({ message: "User not found" })
            return
        }

        res.json({ message: "User deleted successfully" })
    } catch (error) {
        console.error("Error in DELETE /users/:id:", error)
        res.status(500).json({ message: "Error deleting user", error })
    }
})

export default router
