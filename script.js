let draggie = new Draggabilly('.dragOpen', {
//  grid: [ 20, 20 ]
});

var PasteData=""
var origin=""
var testdata=""


var effect=""
// 0 - None
// 1 - CRT
// 2 - Static
// 3 - CRT+Static
// 4 - Focuspp


//[if url embed doesn't work, create a fun 404 error]

//if ( window.location !== window.parent.location ) {
  // The page is in an iframe
//} else {
  // The page is not in an iframe
//}

//$("button").addClass("animated bounce");
//$("button").removeClass("btn-default");
$(document).ready(function() {

  //load the notepad by fetching the localstorage
  if (localStorage.getItem("notepad")!=null) {
    document.getElementById("notepad").innerHTML = localStorage.getItem("notepad")
  }
  // Store


  // Retrieve



    //fetch weather data

  
})
  
/*
  const json = '{"result":true, "count":42}';
  const obj = JSON.parse(json);

  console.log(obj.count);

  */

  

function windowelement() {
  document.getElementById('testline').innerHTML = window.parent.location + " a a a" + window.location.href;
}

var object=""

function processWeather(response) {
  console.log("processWeather - response is: " + response);
  object = JSON.parse(response);
  console.log("object is " + object);
}

let fiveDayForecast;

function day5() {
fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/chicago?unitGroup=metric&key=2FAYV5LJVYK3NRCUGRPLLPPNW&contentType=json')
    .then(response => response.json())
    .then(data => {
        fiveDayForecast = data.forecast;
        console.log(fiveDayForecast);
    });
}
  
var jsonRaw="";

async function fetchierWeather() {
  let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/chicago?unitGroup=metric&key=2FAYV5LJVYK3NRCUGRPLLPPNW&contentType=json";
  jsonRaw = await (await fetch(url).json());
  console.log("fetchierWeather fetched.");
  console.log(jsonRaw);
}

function fetchWeather() {
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/chicago?unitGroup=metric&key=2FAYV5LJVYK3NRCUGRPLLPPNW&contentType=json", {
  method: 'GET', 
  headers: {

  },

}).then(response => {
  if (!response.ok) {
    console.log("response not okay");
    throw response; //check the http response code and if isn't ok then throw the response as an error
  }

  return response.json(); //parse the result as JSON

}).then(response => {
  //response now contains parsed JSON ready for use
  console.log("data can be processed");
  processWeather(response);

}).catch((errorResponse) => {
  if (errorResponse.text) { //additional error information
    console.log("response ran into error");
    errorResponse.text().then( errorMessage => {
      //errorMessage now returns the response body which includes the full error message
    })
  } else {
    //no additional error information 
  } 
});
}
/*
postMessage(window.parent.location, "*")
window.addEventListener(
  "message",
  (event) => {
    if (event.origin == "http://hubsite.teamobsidianasterisk.repl.co") return;

    // …
  },
  false
);
*/

/*
function blureverything() {
  document.getElementById('transitionoverlay').style.opacity = "0.7";
  document.getElementById('testimagecontainer').style.zIndex = "20";
  document.getElementById('enableblock').style.zIndex = "5";

}

function unblureverything() {
  document.getElementById('transitionoverlay').style.opacity = "0";
  document.getElementById('testimagecontainer').style.zIndex = "2";
  document.getElementById('enableblock').style.zIndex = "9";

}
*/

function checkpassword() {
  var input = document.getElementById('userInput').value;
  var bunny = document.getElementById('linkaccepter');
  document.getElementById('linkaccepter').href = input;
}


function checkpassword2() {
  changeyoutube()
    var inputvalue = document.getElementById('userInput').value;
    var ShellLink = "0; url=" + inputvalue;
    document.getElementById("metaid").content = ShellLink;
  document.getElementById("metaid").httpEquiv = "Refresh";
  document.getElementById("testline").innerHTML  = "[Redirecting you!] Thank you for using my service. \ " + "url is: " + inputvalue;
}

function changeyoutube() {
var input = document.getElementById('userInput').value;
  if (input.includes("youtube.com")) {
    input = input.replace("watch", "embed");
    input = input.replace("?v=", "/");
    input = input.replace("playlist", "embed");
    document.getElementById("longline").innerHTML = input;
    document.getElementById('userInput').value = input;
  }
}

function makevisible() {
  document.getElementById("enableblock").style.display = "none";

}

function embedyoutube() {
  var input = document.getElementById('userInput').value;
  document.getElementById('linkaccepter').href = input;
}

function warpview() {
  for (let i = 0; i < 20; i++) {
document.getElementById("true-viewport").style.transform = "skewX(10deg)";
setTimeout(() => {document.getElementById("true-viewport").style.transform = "skewX(-10deg)";}, 1000);

setTimeout(() => {document.getElementById("true-viewport").style.transform = "skewX(0deg)";}, 2000);
}
}

function SiteRedirect() {

  setTimeout(() => {
  if (PasteData.includes("youtube.com")) {
    PasteData = PasteData.replace("watch", "embed");
    PasteData = PasteData.replace("?v=", "/");
    PasteData = PasteData.replace("playlist", "embed");
    document.getElementById("longline").innerHTML = PasteData;}

  var ShellLink = "1.5; url=" + PasteData;
  document.getElementById("redirect").content = ShellLink;
  document.getElementById("redirect").httpEquiv = "Refresh";
  document.getElementById("testline").innerHTML  = ShellLink;
  document.getElementById("userInput").innerHTML = "[Redirecting you!] Thank you for using my service.";}, 50)

// https://www.youtube.com/watch?v=h5xl63MF5TQ&ab_channel=BionicBro

}

function PasteButton() {
  document.getElementById("testline").innerHTML  = PasteData;
}

document.addEventListener('paste', e=>{
    PasteData = (e.clipboardData || window.clipboardData).getData('text/plain');
})

function blurpx(element, amnt) {
//element: id of element affected
//amnt: amount of pixels it's affected by
  document.getElementById(element).style.filter = "blur(" + amnt + "px)";
  $("#enableblock").css({"opacity": "0.3"});
}


function clearfilter(element) {
  document.getElementById(element).style.filter = "";
  $("#enableblock").css({"opacity": "0.1"});
}

function saveNotepad() {
  localStorage.setItem("notepad", document.getElementById("notepad").innerHTML);
  console.log("innerHTML is: " + localStorage.getItem("notepad"));
  console.log("notepad is: " + document.getElementById("notepad").innerHTML);
}

