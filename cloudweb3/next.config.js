/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    swcMinify: true,
      images: {
          domains: ['ipfs.io', 'dweb.link'],
            },
              env: {
                  APP_NAME: process.env.APP_NAME,
                      COMPANY_NAME: process.env.COMPANY_NAME,
                          SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
                              SUPPORT_PHONE: process.env.SUPPORT_PHONE
                                },
                                  async redirects() {
                                      return [
                                            {
                                                    source: '/',
                                                            destination: '/dashboard',
                                                                    permanent: true,
                                                                          },
                                                                              ];
                                                                                },
                                                                                };
                                                                                
                                                                                module.exports = nextConfig; */