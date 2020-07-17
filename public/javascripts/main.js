window.onload = function() {
    this.document.getElementById("sidepanel-toggle").onclick = () => {
        this.toggleSideBar(0);
        this.toggleSideBar(1);
        document.getElementById("sidepanel-toggle").firstChild.classList.toggle('starClick');
    }
}


function toggleSideBar(side) {
    if (side) {
        document.getElementById("lPanel").classList.toggle('lClose');
    } else {
        document.getElementById("rpanel").classList.toggle('isClosed');
        document.getElementById("sidepanel-toggle").classList.toggle('isClosed');
    }
}
