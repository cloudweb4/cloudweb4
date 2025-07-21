import { NFTStorage } from 'nft.storage';

export const uploadFile = async (file) => {
  try {
      const token = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN || 'e292ad04.d5eda98918194cb5a8448cc4bbf4c4a5';
          const client = new NFTStorage({ token });
              
                  const blob = new Blob([file.buffer], { type: file.mimetype });
                      const cid = await client.storeBlob(blob);
                          
                              return {
                                    success: true,
                                          cid,
                                                url: `https://${cid}.ipfs.dweb.link/${encodeURIComponent(file.name)}`
                                                    };
                                                      } catch (error) {
                                                          return {
                                                                success: false,
                                                                      error: error.message
                                                                          };
                                                                            }
                                                                            };