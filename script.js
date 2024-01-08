let draggie = new Draggabilly('.dragOpen', {
  //  grid: [ 20, 20 ]
});

let draggie2 = new Draggabilly('.drag2Open', {
  //  grid: [ 20, 20 ]
});

var PasteData = ""
var origin = ""
var testdata = ""


var effect = ""
// 0 - None
// 1 - CRT
// 2 - Static
// 3 - CRT+Static
// 4 - Focuspp

//turn the current time into a single number, found in presentTime
var initialTime = new Date().toLocaleTimeString();
var presentTime = parseInt(new Date().toLocaleTimeString().split(":", 1)) % 12;
if (initialTime.includes("PM")) {
  presentTime += 12;
};
console.log("presentTime is: " + presentTime);

//[if url embed doesn't work, create a fun 404 error]

//if ( window.location !== window.parent.location ) {
// The page is in an iframe
//} else {
// The page is not in an iframe
//}

//$("button").addClass("animated bounce");
//$("button").removeClass("btn-default");
$(document).ready(function() {

  //fetch time related variables by using loadTime()
  loadTime();

  if (localStorage.getItem("pageRemember") === null) {
    console.log("no page remembered");
  } else {
    loadPage(localStorage.getItem("pageRemember"));
  }
  //load the notepad by fetching the localstorage




  //fetch weather data



  //set time and date
  document.getElementById("dtIconDate").innerHTML = "" + new Date().toLocaleDateString()

  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById("dtIconWeek").innerHTML = "" + dayOfWeek[new Date().getDay()];
  document.getElementById("dtIconTime").innerHTML = "" + new Date().toLocaleTimeString();

  //update time every second
  setInterval(function() {
    $('.timerSec').text(new Date().toLocaleTimeString() + "");
  }, 1000);





})

/*
  const json = '{"result":true, "count":42}';
  const obj = JSON.parse(json);

  console.log(obj.count);

  */



function windowelement() {
  document.getElementById('testline').innerHTML = window.parent.location + " a a a" + window.location.href;
}

var object = ""

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

var jsonRaw = "";

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
      errorResponse.text().then(errorMessage => {
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
  document.getElementById("testline").innerHTML = "[Redirecting you!] Thank you for using my service. \ " + "url is: " + inputvalue;
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
    setTimeout(() => { document.getElementById("true-viewport").style.transform = "skewX(-10deg)"; }, 1000);

    setTimeout(() => { document.getElementById("true-viewport").style.transform = "skewX(0deg)"; }, 2000);
  }
}

function SiteRedirect() {

  setTimeout(() => {
    if (PasteData.includes("youtube.com")) {
      PasteData = PasteData.replace("watch", "embed");
      PasteData = PasteData.replace("?v=", "/");
      PasteData = PasteData.replace("playlist", "embed");
      document.getElementById("longline").innerHTML = PasteData;
    }

    var ShellLink = "1.5; url=" + PasteData;
    document.getElementById("redirect").content = ShellLink;
    document.getElementById("redirect").httpEquiv = "Refresh";
    document.getElementById("testline").innerHTML = ShellLink;
    document.getElementById("userInput").innerHTML = "[Redirecting you!] Thank you for using my service.";
  }, 50)

  // https://www.youtube.com/watch?v=h5xl63MF5TQ&ab_channel=BionicBro

}

function PasteButton() {
  document.getElementById("testline").innerHTML = PasteData;
}

document.addEventListener('paste', e => {
  PasteData = (e.clipboardData || window.clipboardData).getData('text/plain');
})

function blurpx(element, amnt) {
  //element: id of element affected
  //amnt: amount of pixels it's affected by
  document.getElementById(element).style.filter = "blur(" + amnt + "px)";
  $("#enableblock").css({ "opacity": "0.3" });
}


function clearfilter(element) {
  document.getElementById(element).style.filter = "";
  $("#enableblock").css({ "opacity": "0.1" });
}

function saveNotepad() {
  localStorage.setItem("notepad", document.getElementById("notepad").innerHTML);
  console.log("innerHTML is: " + localStorage.getItem("notepad"));
  console.log("notepad is: " + document.getElementById("notepad").innerHTML);
}
var defaultBehavior = true;


var timePass;
//load the time by fetching the localstorage
function loadTime() {
  if (localStorage.getItem("timePass") != "undefined" && localStorage.getItem("timePass") != null) {
    console.log("localStorage[\"timePass\"] exists");
    timePass = (localStorage.getItem("timePass") === "true");
    bgChange = (localStorage.getItem("bgChange") === "true");
    fontColorChange = (localStorage.getItem("fontColorChange") === "true");
    checkImpVar();
  } else {
    console.log("localStorage[\"timePass\"] is " + localStorage["timePass"]);
    alert("no localStorage found, setting default values");
    alert("check console for more info (click gear icon at side of page)");

    localStorage.setItem("timePass", defaultBehavior);
    timePass = (localStorage.getItem("timePass") === "true");

    localStorage.setItem("bgChange", defaultBehavior);
    bgChange = (localStorage.getItem("bgChange") === "true");

    localStorage.setItem("fontColorChange", defaultBehavior);
    fontColorChange = (localStorage.getItem("fontColorChange") === "true");

    checkImpVar();
  }
  if (timePass === true) {
    updateBG();
    updateFontColor();
  }
}

function checkImpVar() {
  console.log("Beginning of checkImpVar");

  console.log("timePass is: " + timePass);
  console.log("localStorage timePass is: " + localStorage.getItem("timePass"));
  //I want to set an innerHTML for each one but Cannot set properties of null (setting 'innerHTML') so I guess not
  //  document.getElementById("timePass").innerHTML = "timePass: " + timePass.toString() + "<br> timePass localStorage: " + localStorage.getItem("timePass");



  console.log("bgChange is: " + bgChange);
  console.log("localStorage bgChange is: " + localStorage.getItem("bgChange"));


  console.log("fontColorChange is: " + fontColorChange);
  console.log("localStorage bgChange is: " + localStorage.getItem("fontColorChange"));


  console.log("End of checkImpVar");
}

function toggle(variable) {
  let newitem = !eval(variable);
  console.log("newitem is: " + newitem + " and newitem var type is " + typeof newitem);
  eval(variable + "=" + newitem);
  console.log(variable.toString() + ": " + newitem);
  if (localStorage.getItem(variable) != null) {
    console.log(variable + "[localStorage]: " + newitem);
    localStorage.setItem(variable, newitem);
  } else {
    console.log("getItem variable is null")
    localStorage.setItem(variable, true);
  }
}

var bgChange;

function updateBG() {
  console.log("updateBG is running");
  if (bgChange == "true" || bgChange === true) {
    console.log("bgChange is " + typeof bgChange);
    let stem = 'url(https://raw.githubusercontent.com/Team-Obsidian/website-2/main/img/background/'
    let r = document.querySelector(':root');
    if (0 <= presentTime && presentTime <= 5) {
      r.style.setProperty('--bgImg-url', stem + 'bg6.png)');
      console.log("--bgImg-url is bg6.png");
    }
    else if (6 <= presentTime && presentTime <= 8) {
      r.style.setProperty('--bgImg-url', stem + 'bg5.png)');
      console.log("--bgImg-url is bg5.png");
    }
    else if (9 <= presentTime && presentTime <= 11) {
      r.style.setProperty('--bgImg-url', stem + 'bg2.png)');
      console.log("--bgImg-url is bg2.png");
    }
    else if (12 <= presentTime && presentTime <= 14) {
      r.style.setProperty('--bgImg-url', stem + 'bg1.png)');
      console.log("--bgImg-url is bg1.png");
    }
    else if (15 <= presentTime && presentTime <= 17) {
      r.style.setProperty('--bgImg-url', stem + 'bg3.png)');
      console.log("--bgImg-url is bg3.png");
    }
    else if (18 <= presentTime && presentTime <= 23) {
      r.style.setProperty('--bgImg-url', stem + 'bg5.png)');
      console.log("--bgImg-url is bg5.png");
    } else {
      r.style.setProperty('--bgImg-url', 'url("https://github.com/Team-Obsidian/website-2/raw/main/img/background/bg1.png")');
      console.log("--bgImg-url is default, bg1.png");
    }

  }
}

var fontColorChange;

function updateFontColor() {
  console.log("updateFontColor() is running");
  if (fontColorChange == "true" || fontColorChange === true) {
    console.log("fontColorChange is " + typeof fontColorChange);
    /*  //make some sort of variable for each of the colors. like instead of '#fff' every time, use whatever --color-primary would be or change color-primary to actually just be the font choice.
      //doing stuff like this means we need to change the background to something other than animalcrossing's bg tiles.
      //why don't I do something like a true persona menu or something closer to Super Mario RPG remake's menu graphics?
      //gotta actually be creative if I want to do that but meh
      //I'll do that later */
    let r = document.querySelector(':root');
    if (0 <= presentTime && presentTime <= 5) {
      r.style.setProperty('--font-color', '#fff');
      r.style.setProperty('--font-shadow', '1px 1px #000');
      console.log("--font-color is #fff, --font-shadow is 1px 1px #000");
    }
    else if (6 <= presentTime && presentTime <= 8) {
      r.style.setProperty('--font-color', '#fff');
      r.style.setProperty('--font-shadow', '1px 1px #000');
      console.log("--font-color is #fff, --font-shadow is 1px 1px #000");
    }
    else if (9 <= presentTime && presentTime <= 11) {
      r.style.setProperty('--font-color', '#000');
      r.style.setProperty('--font-shadow', '1px 1px #fff');
      console.log("--font-color is #000, --font-shadow is 1px 1px #fff");
    }
    else if (12 <= presentTime && presentTime <= 14) {
      r.style.setProperty('--font-color', '#000');
      r.style.setProperty('--font-shadow', '1px 1px #fff');
      console.log("--font-color is #000, --font-shadow is 1px 1px #fff");
    }
    else if (15 <= presentTime && presentTime <= 17) {
      r.style.setProperty('--font-color', '#fff');
      r.style.setProperty('--font-shadow', '1px 1px #000');
      console.log("--font-color is #000, --font-shadow is 1px 1px #fff");
    }
    else if (18 <= presentTime && presentTime <= 23) {
      r.style.setProperty('--font-color', '#fff');
      r.style.setProperty('--font-shadow', '1px 1px #000');
      console.log("--font-color is #fff, --font-shadow is 1px 1px #000");
    } else {
      r.style.setProperty('--font-color', '#fff');
      r.style.setProperty('--font-shadow', '1px 1px #000');
      console.log("--font-color + --font-shadow is default");
    }

  }
}


function loadText() {
  $("#textContainer").load("./ZombieStory/" + document.getElementById("fileInput").value + ".html")
}

function loadPage(page) {
  $("#mgContentContainer").load(page + ".html");
  loadTime();
  localStorage.setItem("pageRemember", page);
  console.log("page remembered is: " + localStorage.getItem("pageRemember"));
}

function flipPage(page) {
  console.log("page is flipping to " + page);
  $("#textContainer").load("./ZombieStory/" + page + ".html");
}