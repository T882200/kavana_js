// func that return the right value
var data_obj;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

var iteraion_dict = {"א":0,"ב":1,"ג":2,"ד":3,"ה":4,"ו":5,"ז":6,"ח":7,"ט":8,"י":9,"יא":10,"יב","יג","יד","טו","טז","יז","יח","יט","כ","כא","כב","כג","כד","כה","כו","כז","כח","כט","ל"}

function display_data(id, heb_date_obj, heb_date_str) {
    var element_to_populate = document.getElementById("id");
    var heb_arr = heb_date_str.split(' ');
    // structure of the array: "יום א א תשרי תשע"ט"

    element_to_populate.innerHTML = data_obj[`${id}`];
}


// refernce: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//     var superHeroes = request.response;
//     populateHeader(superHeroes);
//     showHeroes(superHeroes);
//   }



// function populateHeader(jsonObj) {
//     var myH1 = document.createElement('h1');
//     myH1.textContent = jsonObj['squadName'];
//     header.appendChild(myH1);
  
//     var myPara = document.createElement('p');
//     myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//     header.appendChild(myPara);
//   }