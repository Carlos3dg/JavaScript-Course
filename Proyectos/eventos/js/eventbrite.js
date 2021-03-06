class API {
    constructor() {
        this.oauthToken = 'TTIDSHYI6KA6BNVRLPM5',
        this.order = 'date'
    }
    //Method to get the events according with the input data
    async loadEventRequest() {
        const response =  await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.oauthToken}`);
        const categories = await response.json();

        return categories;
    }
    //Method to get the events according with the input search data
    async loadEventSearch(eventKeyword, category) {
        const response = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventKeyword}&sort_by=${this.order}&categories=${category}&token=${this.oauthToken}`);
        //Get json data
        const eventData = await response.json();
        
        return eventData
    }
}