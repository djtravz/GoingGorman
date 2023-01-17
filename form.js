// hide("rsvp")
function updateForm() {
    formElts = document.querySelectorAll("#rsvp-form")[0];

    if (document.querySelector("input#yes:checked") && formElts[0].value != "") {
        // TODO: make the form update with every keystroke so they dont have to tap out
        document.querySelector("#yes-dep").classList.remove("hidden");
        document.querySelector("#formSubmit").classList.remove("hidden");
    } else if (document.querySelector("input#no:checked") && formElts[0].value != "") {
        document.querySelector("#yes-dep").classList.add("hidden");
        document.querySelector("#formSubmit").classList.remove("hidden");
    } 
    // var guests = parseInt(document.querySelector("input#mealA").value) +
    // parseInt(document.querySelector("input#mealB").value) +
    // parseInt(document.querySelector("input#mealC").value);
    
    // document.getElementById("guests").innerHTML = "Guest count: " + guests;
    // console.log(formElts[0])
}

function processForm() {
    // import { getDatabase, ref, set } from "firebase/database";
    formElts = document.querySelectorAll("#rsvp-form")[0];
    var data = {
        'name': formElts[0].value,
        'attendance': yesNo(document.querySelector("input#yes:checked")),
        'countSocial': parseInt(formElts[3].value),
        'countWedding': parseInt(formElts[4].value),
        'countAfter': parseInt(formElts[5].value),
        'countBrunch': formElts[6].value
    };
    // data['guest-count'] = data['mealA'] + data['mealB'] + data['mealC']
    console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://goinggorman-2a758-default-rtdb.firebaseio.com/rsvp.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    window.alert("Thank you for RSVPing!")
    //TODO send form info via telegram bot as well
    // const db = getDatabase();
    // set(ref(db, 'rsvp/'), data);
}

function yesNo(yes) {
    if (yes) {
        return true;
    } else {
        return false;
    }
}

// function init() {
const urlParams = new URLSearchParams(window.location.search);
specialType = urlParams.get("rsvp-type");
document.querySelector("input#invID").value = specialType;

if (specialType) {
    document.querySelector(`#${specialType}`).classList.remove("hidden");
}
// }

// init()
// document.querySelector("#rsvp-form").querySelectorAll("input");