function hide (elements,hard) {
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
        if (hard) {
            elements.style.display = 'none';
            continue;
        }
        try {
            elements[index].classList.remove("visible")
        } catch (error) {}
        // elements[index].classList.remove("visible");
        try {
            elements[index].classList.add("hidden");
        } catch (error) {}
    }
}
function show (elements) {
    if (typeof elements == 'string') {
        elements = document.querySelectorAll("#" + elements)
    }
    hide(document.querySelectorAll('.content'))
    // await new Promise(r => setTimeout(r, 200));
    // hide(document.querySelectorAll('.content'),true)
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
        elements[index].style.display = 'block';
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

show("intro")