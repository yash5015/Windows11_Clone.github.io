console.log("hi yash");
let dis = document.getElementsByClassName("menus")[0];
var count = 1000;
let wds = document.getElementsByClassName("window")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
wds.addEventListener("click", () => {
  dis.style.display = "block";
  if (startmenu.style.bottom == "50px") {
    startmenu.style.bottom = "-655px";
  } else {
    startmenu.style.bottom = "50px";
    startmenu.style.zIndex = count++;
  }
});

let searchh = document.getElementsByClassName("search")[0];
let searchmenu = document.getElementsByClassName("searchmenu")[0];

searchh.addEventListener("click", () => {
  dis.style.display = "block";
  if (searchmenu.style.bottom == "50px") {
    searchmenu.style.bottom = "-655px";
  } else {
    searchmenu.style.bottom = "50px";
    searchmenu.style.zIndex = count++;
  }
});

let fileex = document.getElementsByClassName("fileex")[0];
let filemenu = document.getElementsByClassName("filemenu")[0];

fileex.addEventListener("click", () => {
  dis.style.display = "block";
  if (filemenu.style.bottom == "50px") {
    filemenu.style.bottom = "-655px";
  } else {
    filemenu.style.bottom = "50px";
    filemenu.style.zIndex = count++;
  }
});

let chromee = document.getElementsByClassName("chrome")[0];
let chromemenu = document.getElementsByClassName("chromemenu")[0];

chromee.addEventListener("click", () => {
  dis.style.display = "block";
  if (chromemenu.style.bottom == "50px") {
    chromemenu.style.bottom = "-655px";
  } else {
    chromemenu.style.bottom = "50px";
    chromemenu.style.zIndex = count++;
  }
});

let appstore = document.getElementsByClassName("appstore")[0];
let appmenu = document.getElementsByClassName("appmenu")[0];

appstore.addEventListener("click", () => {
  dis.style.display = "block";
  if (appmenu.style.bottom == "50px") {
    appmenu.style.bottom = "-655px";
  } else {
    appmenu.style.bottom = "50px";
    appmenu.style.zIndex = count++;
  }
});

let edge = document.getElementsByClassName("edge")[0];
let edgemenu = document.getElementsByClassName("edgemenu")[0];

edge.addEventListener("click", () => {
  dis.style.display = "block";
  if (edgemenu.style.bottom == "50px") {
    edgemenu.style.bottom = "-655px";
  } else {
    edgemenu.style.bottom = "50px";
    edgemenu.style.zIndex = count++;
  }
});
document.getElementById("showdtop").addEventListener("click", () => {
  console.log("showdtop");
  dis.style.display = "block";
  if (dis.style.display != "none") {
    dis.style.display = "none";
  }
});
// dis.style.display = "block";
