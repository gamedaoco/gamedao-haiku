// Constants
const IPFS_GATEWAY = 'https://gamedao.infura-ipfs.io/ipfs/';

// Helpers
const getIpfsUrlByCid = (cid: string): string => `${IPFS_GATEWAY}${cid}`;

// Exports
export { IPFS_GATEWAY, getIpfsUrlByCid };
