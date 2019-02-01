class UI {
    constructor() {
        this.designSelect(); //Call the method to be executed
    }

    //Method to build the select design 
    designSelect() {
        //Call the loadApi method isinde the API class to get the json data
        api.loadApi()
            .then(result => {
                //Two variables: one to iterate the object keys from result.Data and other to get the select element.
                let objKey;
                const select = document.getElementById('criptomoneda');
                //for... in to iterate the properties in the result.Data object
                for(objKey in result.Data) {
                    const option = document.createElement('option');
                    option.value = objKey; //The key value from the object
                    option.appendChild(document.createTextNode(result.Data[objKey].CoinName)) //That key has an object and inside that object we need the CoinName property to get the coin names.
                    select.appendChild(option);
                }
            });
    }

    //Method to show an error or successfull message
    showMessage(message, classes) {
        const divMessage = document.createElement('div');
        divMessage.className = classes;
        divMessage.appendChild(document.createTextNode(message));

        //Select the element where divMessage is gonna be inserted
        const messageContainer = document.querySelector('.mensajes');
        messageContainer.appendChild(divMessage);

        //Delete the message after three seconds
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }
    //Method to design the quotation message
    quotationMessage(result, coin, cryptoCoin) {
        //Detect if there's a quotation in DOM If true then remove it
        const lastQuotation = document.querySelector('#resultado > div');
        if(lastQuotation) {
            lastQuotation.remove();
        }

        //Now that we have the 'RAW' property as an object, we need to acces to the crypto porperty where is the coin property to get the price and other data
        const quotationData = result[cryptoCoin][coin];
        //Use topFixed method to reduce the num of decimal nums in the price and the change porcentual from last day
        const price = quotationData['PRICE'].toFixed(2);
        const percentageChange = quotationData['CHANGEPCTDAY'].toFixed(2);
        //Change data format to 'es-MX'
        let lastUpdate = new Date(quotationData['LASTUPDATE'] * 1000).toLocaleDateString('es-MX');
        //Create the element where is going to be the message:
        const quotationMessage = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Result:</h2>
                    <p>The crypto coin price of ${quotationData['FROMSYMBOL']} in ${quotationData['TOSYMBOL']} coin is $${price}</p>
                    <p>Percentage change from last day: ${percentageChange}</p>
                    <p>Last update: ${lastUpdate}</p>
                </div>
            </div>
        `;
        //Call the showAndHideSpinner method with the block value as a parameter to show it
        this.showAndHideSpinner('block');

        setTimeout(() => {
            //Get the element where is going to be our created element
            document.querySelector('#resultado').innerHTML = quotationMessage;
            //Hide spinner
            this.showAndHideSpinner('none');
        }, 3000);
    }
    //Method to show and hide load spinner 
    showAndHideSpinner(display) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = display;
    }
}