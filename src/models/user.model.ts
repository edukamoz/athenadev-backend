import { DataTypes, Model, Optional } from "sequelize";
import { User } from "../interfaces/user.interface";
import sequelize from "../config/database";

export type UserCreationalAttributes = Optional<User, "id">

export class UserModel extends Model <User> {
    public id!: number;
    public email!: string;
    public password!: string;
    public name!: string;
    public score!: number;
}

UserModel.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            field: "id_user"
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: "email"
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: "password"
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: "name"
        },
        score: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: "score"
        },
        timeOnSite: {
            allowNull: false,
            type: DataTypes.DATE(100),
            field: "score"
        },
        photo: {
            allowNull: false,
            type: DataTypes.BLOB,
            field: "score"
        }
    },
    {
        modelName: "User",
        tableName: "user",
        sequelize,
        timestamps: false
    }
)

export default UserModel