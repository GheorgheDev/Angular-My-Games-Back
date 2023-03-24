export class UserDto {
    user_id: string;
    username: string;
    password: string;
    email: string;
    fullname: string;
    birthdate: Date;
    deposit: number;
}

export class CryptoDto {
    crypto_id: string;
    crypto_name: string;
    value: number;
    icon?: string;
    asset: string;
    stock: number;
}