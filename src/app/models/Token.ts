export interface Token {
    access_token: string;
    token_type: string;
    userName: string;
    expires_in: number;
    issues: Date;
    expires: Date;
}