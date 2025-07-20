import { Web3Storage } from 'web3.storage';

// سيتم استبدال هذا بمفتاح API الخاص بك
const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN });

export const uploadFile = async (file) => {
  try {
      const cid = await client.put([file], { 
            name: file.name,
                  wrapWithDirectory: false 
                      });
                          
                              return {
                                    success: true,
                                          cid,
                                                url: `https://${cid}.ipfs.dweb.link/${file.name}`
                                                    };
                                                      } catch (error) {
                                                          console.error('Error uploading file:', error);
                                                              return { success: false, error: error.message };
                                                                }
                                                                };

                                                                export const getUserFiles = async (userId) => {
                                                                  // في التطبيق الحقيقي، ستجلب هذه المعلومات من قاعدة البيانات
                                                                    return [
                                                                        { id: 1, name: 'document.pdf', size: '2.4 MB', uploadedAt: '2023-06-15' },
                                                                            { id: 2, name: 'image.jpg', size: '5.2 MB', uploadedAt: '2023-06-18' },
                                                                                { id: 3, name: 'video.mp4', size: '120 MB', uploadedAt: '2023-06-20' }
                                                                                  ];
                                                                                  };