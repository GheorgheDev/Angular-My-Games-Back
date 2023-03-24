import { CryptoService } from "../services/crypto.service"

const cryptoService: CryptoService = new CryptoService();

export const cryptoController = {
    getAllCryptosWithUserCryptos: (req: any, res: any) => {
        try {
            cryptoService.getAllCryptosWithUserCryptos(req.params.id)
                .then(result => res.json(result))
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    }
}