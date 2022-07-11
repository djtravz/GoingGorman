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
    var guests = parseInt(document.querySelector("input#mealA").value) +
    parseInt(document.querySelector("input#mealB").value) +
    parseInt(document.querySelector("input#mealC").value);
    
    document.getElementById("guests").innerHTML = "Guest count: " + guests;
    // console.log(formElts[0])
}

function processForm() {
    // import { getDatabase, ref, set } from "firebase/database";
    formElts = document.querySelectorAll("#rsvp-form")[0];
    var data = {
        'name': formElts[0].value,
        'attendance': yesNo(document.querySelector("input#yes:checked")),
        'mealA': parseInt(formElts[3].value),
        'mealB': parseInt(formElts[4].value),
        'mealC': parseInt(formElts[5].value)
    };
    data['guest-count'] = data['mealA'] + data['mealB'] + data['mealC']
    console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://goinggorman-2a758-default-rtdb.firebaseio.com/rsvp.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
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