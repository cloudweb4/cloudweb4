// أسعار الباقات بالدولار
const PACKAGE_PRICES = {
  '100GB': 7,
    '1TB': 15,
      '5TB': 22
      };

      // سعر رابط الويب 3
      const WEB3_LINK_PRICE = 5;

      export const calculatePackageCost = async (packageSize, paymentCurrency = 'USD') => {
        const packagePriceUSD = PACKAGE_PRICES[packageSize];
          
            if (paymentCurrency === 'USD') {
                return {
                      usd: packagePriceUSD,
                            eth: 0 // سيتم حسابه لاحقاً
                                };
                                  }
                                    
                                      // جلب سعر ETH الحالي
                                        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                                          const data = await response.json();
                                            const ethPrice = data.ethereum.usd;
                                              
                                                const ethAmount = packagePriceUSD / ethPrice;
                                                  
                                                    return {
                                                        usd: packagePriceUSD,
                                                            eth: ethAmount
                                                              };
                                                              };

                                                              export const calculateWeb3LinkCost = async (paymentCurrency = 'USD') => {
                                                                if (paymentCurrency === 'USD') {
                                                                    return {
                                                                          usd: WEB3_LINK_PRICE,
                                                                                eth: 0 // سيتم حسابه لاحقاً
                                                                                    };
                                                                                      }
                                                                                        
                                                                                          const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                                                                                            const data = await response.json();
                                                                                              const ethPrice = data.ethereum.usd;
                                                                                                
                                                                                                  const ethAmount = WEB3_LINK_PRICE / ethPrice;
                                                                                                    
                                                                                                      return {
                                                                                                          usd: WEB3_LINK_PRICE,
                                                                                                              eth: ethAmount
                                                                                                                };
                                                                                                                };