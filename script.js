function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        // elt = elements[index]
        // if (elt.nodeName == 'DIV'){
        //     elt.style.display = 'none';
        // // }
        // if (elt.nodeName == 'BUTTON') {
        //     elt.style.borderBottomWidth = '2px';
        //     elt.style.paddingBottom = '0px';
        //     // console.log("entered");
        // }
        //   elements.style.display = 'none';
        try {
            elements[index].classList.remove("visible")
        } catch (error) {}
        // elements[index].classList.remove("visible");
        try {
            elements[index].classList.add("hidden");
        } catch (error) {}
    }
    // i can just redo the loop with adding in the display = 'none'
    // then add a delay and set the 'block' before setting the visible hidden tags
}
function show (elements) {
    if (typeof elements == 'string') {
        elements = document.querySelectorAll("#" + elements)
    }
    hide(document.querySelectorAll('.content'))
    // hide(document.querySelectorAll('.nav-element'))
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        // elt = elements[index]
        // if (elt.nodeName == 'DIV'){
        //     elt.style.display = 'block';
        // }
        // if (elt.nodeName == 'BUTTON') {
        //     elt.style.borderBottomWidth = '0px';
        //     elt.style.paddingBottom = '2px';
        // }
        // elements[index].style.display = 'block';
        try {
            elements[index].classList.remove("hidden")
        } catch (error) {}
        try {
            elements[index].classList.add("visible");
        } catch (error) {}
    //   elements[0].style.height = '50%';
    //   elements.style.display = 'inline';
    }
}

// $(window).scroll(function(e){ 
//     var $el = $('.fixedElement'); 
//     var isPositionFixed = ($el.css('position') == 'fixed');
//     if ($(this).scrollTop() > 200 && !isPositionFixed){ 
//       $el.css({'position': 'fixed', 'top': '0px'}); 
//     }
//     if ($(this).scrollTop() < 200 && isPositionFixed){
//       $el.css({'position': 'static', 'top': '0px'}); 
//     } 
// });

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
}

function yesNo(yes) {
    if (yes) {
        return true;
    } else {
        return false;
    }
}