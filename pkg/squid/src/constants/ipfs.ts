// Constants
const IPFS_GATEWAY = 'https://ipfs.gamedao.co/gateway/';

// Helpers
const getIpfsUrlByCid = (cid: string): string => `${IPFS_GATEWAY}${cid}`;

// Exports
export { IPFS_GATEWAY, getIpfsUrlByCid };
