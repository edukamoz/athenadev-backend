import type { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"

export const listUsers = async (): Promise<User[]> => {
    const users = await UserModel.findAll()
    return users
}

export const listUserById = async (id: string): Promise<User | null> => {
    const user = await UserModel.findByPk(id)
    return user
}

export const createUser = async (
    email: string,
    password: string,
    name: string,
): Promise<User> => {
    const user = await UserModel.create({
        email,
        password,
        name,
        score: 0,
        createdAt: new Date(),
    })
    return user
}

export const updateUser = async (id: string, userData: Partial<Omit<User, "id">>): Promise<User | null> => {
    await UserModel.update(userData, {
        where: { id },
    })

    const updatedUser = await UserModel.findByPk(id)
    return updatedUser
}

export const deleteUser = async (id: string): Promise<boolean> => {
    const deletedCount = await UserModel.destroy({
        where: { id },
    })

    return deletedCount > 0
}
