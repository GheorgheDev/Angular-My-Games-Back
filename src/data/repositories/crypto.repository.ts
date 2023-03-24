import { connect } from './../config/database.config';
import { CryptoPojo } from "../models/crypto.model";
import { QueryTypes } from 'sequelize';

export class CryptoRepository {
    private _db: any = {};
    private _cryptoRepository: any;

    constructor() {
        this._db = connect();
        this._cryptoRepository = this._db.sequelize.getRepository(CryptoPojo);
    }

    async getAllCryptosWithUserCryptos(id: string): Promise<any[]> {
        try {
            return await this._db.sequelize.query(`SELECT cryptomoneda.crypto_id, crypto_name, value, asset, stock, amount 
                                                   FROM cryptomoneda 
                                                   FULL JOIN cryptos_usuario 
                                                   ON cryptos_usuario.crypto_id = cryptomoneda.crypto_id
                                                   WHERE user_id IS NULL OR user_id = ?;`,
                {
                    replacements: [id],
                    type: QueryTypes.SELECT
                });
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}