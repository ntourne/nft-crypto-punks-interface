export interface IToken {
    tokenId: number;
    image: string;
    name: string;
    description: string;
    attributes: [{ trait_type: string, value: string }]
}