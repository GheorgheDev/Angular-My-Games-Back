import { CryptoRepository } from "../data/repositories/crypto.repository";

export class CryptoService {
    private _cryptoRepository: CryptoRepository;

    constructor() {
        this._cryptoRepository = new CryptoRepository();
    }

    async getAllCryptosWithUserCryptos(id: string): Promise<any[]> {
        return await this._cryptoRepository.getAllCryptosWithUserCryptos(id)
            .then(cryptos => cryptos)
    }
}