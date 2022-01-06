export const truncateAddress = (account: string) => {
    return `${account?.substr(0, 6)}...${account?.substr(-4)}`;
}
