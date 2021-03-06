var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return serverUrl + "?text=" + text
}

function errorHandler(error) {
    console.log(`Error occured ${error}`);
    alert(`Something went wrong with server! Please try again tomorrow 😊`);
}

function clickHandler() {
    
    var input = txtInput.value;

    fetch(getTranslationUrl(input))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
            console.log(json.contents.translated)
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler)