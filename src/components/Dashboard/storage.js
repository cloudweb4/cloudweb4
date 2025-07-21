cat > src/services/storage.js << 'EOF'
import { NFTStorage } from 'nft.storage';

// استخدم المفتاح مباشرة للتأكد من العمل
const NFT_STORAGE_KEY = 'e292ad04.d5eda98918194cb5a8448cc4bbf4c4a5';

export const uploadFile = async (file) => {
  try {
      // التحقق من وجود الملف
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

                                                                                                                                // دالة مساعدة للحصول على ملفات المستخدم
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
                                                                                                                                                                            EOF