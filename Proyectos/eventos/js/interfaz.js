class UI {
    constructor() {
        this.init()
        this.resultContainer = document.getElementById('resultado-eventos');
    }
    //Method to be executed when the app is initiating
    init() {

    }
    //Method to design the event result search according with the input data
    eventDesignResult() {
        const eventObject = api.loadEventRequest();
    }
}