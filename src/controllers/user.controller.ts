import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"

export const listUsers = async (): Promise<User[]> => {
    const users = await UserModel.findAll()
    return users
}

export const listUserById = async () => {
    const user = await UserModel.findOne()
    return user
}

export const createUser = async ( email: string, password: string, name: string, photo: Blob): Promise<User> => {
    const user = await UserModel.create({
        email, password, name, photo,
        score: 0,
        timeOnSite: new Date()
    })
    return user
}

export const updateUser = async () => {
    
}

export const deleteUser = async () => {

}