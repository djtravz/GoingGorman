param = window.location.hash.substring(1);
if (param) {
    show(param);
} else {
    show("intro");
}

if (!window.location.search.startsWith("?party=1")) {
    let coll = document.getElementsByClassName("party");
    Array.from(coll).forEach((element) => {
        element.remove();
    });

}
// class="party"