class API {
    constructor() {
        this.apikey = 'c5062bda5f80e3847752020c35926bd739078c8158206f974e184fa93adea4d3';
    }
    //Method to get data from the fetch request
    async loadApi() {
        const URL = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        const response = await fetch(URL);
        const data = await response.json();

        return data;
    }
    //Method to get data according with the user input
    async loadDesireData(coin, criptoCoin) {
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}&api_key=${this.apikey}`;
        const response = await fetch(URL);
        const data = await response.json();

        return data;
    }
}