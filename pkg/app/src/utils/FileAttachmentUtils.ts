import { create } from 'ipfs-http-client';

export interface FileAttachment {
  name: string;
  ipfsPath?: string;
  buffer: Buffer;
}
export const ipfsUploadUrl = 'https://ipfs.infura.io:5001/'
export const ipfsDownloadUrl = 'https://gateway.ipfs.io/ipfs/';

export const uploadFromDevice = async (
  file: File,
  onLoad: (buffer: Buffer) => void
) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = () => {
    const buffer = new Buffer(reader.result as ArrayBuffer);
    onLoad(buffer);
  };
};

export const uploadToIpfs = async (file: FileAttachment) => {
  const ipfsClient = create({ url: ipfsUploadUrl });
  const addResult = await ipfsClient.add(file.buffer);
  console.log('addresult---->', addResult)
  file.ipfsPath = addResult.path;
  return `${file.ipfsPath}:${file.name}`;
};

export const parseFileSummary = (fileSummary: string) => {
  const fileParts = fileSummary.split(':');
  if (fileParts.length !== 2) {
    return null;
  }
  return {
    ipfsPath: fileParts[0],
    fileName: fileParts[1],
  };
};

export const downloadFromIpfs = (fileName: string, ipfsPath: string) => {
  const fileUrl = `${ipfsDownloadUrl}${ipfsPath}`;
  const element = document.createElement('a');
  element.download = fileName;
  element.href = fileUrl;
  element.target = '_blank';
  element.click();
};
