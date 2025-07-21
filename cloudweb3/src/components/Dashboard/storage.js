import { NFTStorage } from 'nft.storage';

// 1. استخدم المتغير البيئي إذا كان موجودًا
// 2. استخدم المفتاح الثابت كنسخة احتياطية
const NFT_STORAGE_KEY = process.env.NFT_STORAGE_TOKEN || 'e292ad04.d5eda98918194cb5a8448cc4bbf4c4a5';

export const uploadFile = async (file) => {
  try {
      // تحقق من وجود الملف
          if (!file || !file.buffer) {
                throw new Error('الملف غير صالح أو مفقود');
                    }

                        // إنشاء عميل NFT.Storage
                            const client = new NFTStorage({ token: NFT_STORAGE_KEY });
                                
                                    // تحويل الملف إلى Blob
                                        const blob = new Blob([file.buffer], { type: file.mimetype });
                                            
                                                // رفع الملف إلى IPFS وFilecoin
                                                    const cid = await client.storeBlob(blob);
                                                        
                                                            // إنشاء رابط دائم للملف
                                                                const url = `https://${cid}.ipfs.dweb.link/${encodeURIComponent(file.originalname)}`;
                                                                    
                                                                        return {
                                                                              success: true,
                                                                                    cid,
                                                                                          url,
                                                                                                size: file.size
                                                                                                    };
                                                                                                      } catch (error) {
                                                                                                          console.error('حدث خطأ أثناء الرفع:', error);
                                                                                                              return {
                                                                                                                    success: false,
                                                                                                                          error: error.message || 'خطأ غير معروف في الرفع'
                                                                                                                              };
                                                                                                                                }
                                                                                                                                };

                                                                                                                                // دالة مساعدة للحصول على ملفات المستخدم (ستحتاج لتطويرها لاحقًا)
                                                                                                                                export const getUserFiles = async (userId) => {
                                                                                                                                  // في الإصدار الحالي، نعيد بيانات وهمية
                                                                                                                                    return [
                                                                                                                                        {
                                                                                                                                              id: '1',
                                                                                                                                                    name: 'ملف-تجريبي.pdf',
                                                                                                                                                          size: '2.4 MB',
                                                                                                                                                                uploadedAt: new Date().toISOString(),
                                                                                                                                                                      url: 'https://bafkreihxutvtg7advcyp64g3x7scacv2gr5bn5n4jf7oxhxqv3q3b6b6rm.ipfs.dweb.link'
                                                                                                                                                                          }
                                                                                                                                                                            ];
                                                                                                                                                                            };

                                                                                                                                                                            // دالة مساعدة لحذف الملفات (ستحتاج لتطويرها لاحقًا)
                                                                                                                                                                            export const deleteFile = async (cid) => {
                                                                                                                                                                              try {
                                                                                                                                                                                  // في الإصدار الحالي، نعيد نجاح وهمي
                                                                                                                                                                                      return { success: true, message: 'تم حذف الملف بنجاح' };
                                                                                                                                                                                        } catch (error) {
                                                                                                                                                                                            return { success: false, error: error.message };
                                                                                                                                                                                              }
                                                                                                                                                                                              };