const isProd = () => process.env.NODE_ENV === 'prod';
const config = {
    circlesApiUrl: !isProd ? 'https://circlesofconnectionapi20180731054254.azurewebsites.net/api' : 'http://localhost:18700/api'
};

export default config;