import { Table, Column, Model } from "sequelize-typescript";
import { STRING, DOUBLE, DATE, INTEGER } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'cryptomoneda',
    schema: 'public',
    createdAt: false,
    updatedAt: false
})
export class CryptoPojo extends Model {
    @Column({
        primaryKey: true,
        type: STRING,
        field: 'crypto_id'
    })
    crypto_id: string;

    @Column({
        type: STRING,
        field: 'crypto_name'
    })
    crypto_name: string;

    @Column({
        type: DOUBLE,
        field: 'value'
    })
    value: number;

    @Column({
        type: STRING,
        field: 'icon'
    })
    icon: string;

    @Column({
        type: STRING,
        field: 'asset'
    })
    asset: string;

    @Column({
        type: INTEGER,
        field: 'stock'
    })
    stock: number;

    createAt: Date;

    updateAt: Date;
}