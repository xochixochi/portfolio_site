window.onload = function() {
    this.document.getElementById("")
}

function openSideBar(side) {
    let panelId = ["right", "left"][side];
    document.getElementById(panelId).style.width = "18.193vw";
}

function closeSideBar(side) {
    let panelId = ["right", "left"][side];
    document.getElementById(panelId).style.width = "0px";
}