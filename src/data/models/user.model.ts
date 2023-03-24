import { Table, Column, Model } from "sequelize-typescript";
import { STRING, DATE, DOUBLE } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'usuario',
    schema: 'public',
    createdAt: false,
    updatedAt: false
})
export class UserPojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'user_id'
    })
    user_id: string;

    @Column({
        type: STRING,
        field: 'username'
    })
    username: string;

    @Column({
        type: STRING,
        field: 'password'
    })
    password: string;

    @Column({
        type: STRING,
        field: 'email'
    })
    email: string;

    @Column({
        type: STRING,
        field: 'fullname'
    })
    fullname: string;

    @Column({
        type: DATE,
        field: 'birthdate'
    })
    birthdate: Date;

    @Column({
        type: DOUBLE,
        field: 'deposit'
    })
    deposit: number;

    createAt: Date;

    updateAt: Date;
}