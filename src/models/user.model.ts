import { DataTypes, Model, type Optional } from "sequelize"
import type { User } from "../interfaces/user.interface"
import sequelize from "../config/database"

export type UserCreationalAttributes = Optional<User, "id">

export class UserModel extends Model<User, UserCreationalAttributes> {
    public id!: number
    public email!: string
    public password!: string
    public name!: string
    public score!: number
    public createdAt!: Date
}

UserModel.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            field: "id_user",
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: "email",
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: "password",
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: "name",
        },
        score: {
            allowNull: false,
            type: DataTypes.INTEGER, // Corrigido de STRING para INTEGER
            defaultValue: 0,
            field: "score",
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: "createdAt", // Corrigido o field name
        },
    },
    {
        modelName: "User",
        tableName: "user",
        sequelize,
        timestamps: false,
    },
)

export default UserModel
