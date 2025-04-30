import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"

export const listUsers = async (): Promise<User[]> => {
    const users = await UserModel.findAll()
    return users
}

export const listUserById = async () => {

}

export const createUser = async () => {
    
}

export const updateUser = async () => {
    
}

export const deleteUser = async () => {
    
}