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
    public timeOnSite!: Date
    public photo!: string | null
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
        timeOnSite: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: "time_on_site", // Corrigido o field name
        },
        photo: {
            allowNull: true,
            type: DataTypes.TEXT, // Mudei de BLOB para TEXT para armazenar base64
            field: "photo", // Corrigido o field name
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
