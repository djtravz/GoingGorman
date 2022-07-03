param = window.location.hash.substring(1);
if (param) {
    show(param);
} else {
    show("intro");
}