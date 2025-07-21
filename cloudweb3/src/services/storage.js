// src/services/storage.js
import { NFTStorage } from 'nft.storage';

const client = new NFTStorage({ 
  token: 'e292ad04.d5eda98918194cb5a8448cc4bbf4c4a5' 
  });

  export const uploadFile = async (file) => {
    try {
        // تحويل الملف إلى Blob
            const blob = new Blob([file.buffer], { type: file.mimetype });
                
                    // رفع الملف إلى IPFS وFilecoin
                        const cid = await client.storeBlob(blob);
                            
                                return {
                                      success: true,
                                            cid,
                                                  url: `https://${cid}.ipfs.dweb.link/${encodeURIComponent(file.originalname)}`
                                                      };
                                                        } catch (error) {
                                                            console.error('فشل في رفع الملف:', error);
                                                                return {
                                                                      success: false,
                                                                            error: error.message
                                                                                };
                                                                                  }
                                                                                  };

                                                                                  export const getUserFiles = async (userId) => {
                                                                                    // ستقوم بتنفيذ هذا لاحقًا
                                                                                      return [];
                                                                                      };