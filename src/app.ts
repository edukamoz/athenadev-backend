import express, { type Application, type Request, type Response, type NextFunction } from "express"
import cors from "cors"
import { config } from "dotenv"

// Routes
import userRoutes from "./routes/user.routes"

// Load environment variables
config()

// Create Express application
const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static files
app.use("/", express.static("public"))

// API Routes
app.use("/api/users", userRoutes)

// Health check endpoint
app.get("/health", (_req: Request, res: Response): void => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() })
})

// 404 handler
app.use((_req: Request, res: Response): void => {
    res.status(404).json({ message: "Resource not found" })
})

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    console.error("Unhandled error:", err)
    res.status(500).json({
        message: "Internal server error",
        error: process.env.NODE_ENV === "production" ? undefined : err.message,
    })
})

export default app
