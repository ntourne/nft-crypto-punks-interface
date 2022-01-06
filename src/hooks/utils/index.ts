/**
 * Find token by id
 * @param cryptoPunkContract 
 * @param tokenId 
 * @returns 
 */
export const findTokenById = async (cryptoPunkContract: any, tokenId: number) => {
    try {

        const tokenURI = await cryptoPunkContract.methods.tokenURI(tokenId).call();
        const owner = await cryptoPunkContract.methods.ownerOf(tokenId).call();
        const token = await fetch(tokenURI).then((response: any) => response.json())
        token.tokenId = tokenId;
        token.owner = owner;
        return Promise.resolve(token);
    }
    catch (err) {
        console.error(err);
        return Promise.reject({ msg: 'Error fetching token by id', err });
    }
}

