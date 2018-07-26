var Pokemon = new XMLHttpRequest();

var Pokemon_API = "";

Pokemon.open("GET", Pokemon_API, true);


Pokemon.onload = function () {
    //Access JSON data here
    var data = JSON.parse(this.response);



}
Pokemon.send();
