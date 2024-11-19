function myFunctionDos(){
    var a = document.getElementById("top-button");
    var b = document.getElementById("lang-button");
    if (a.style.visibility === "hidden") {
      a.style.visibility = "visible";
    } else {
      a.style.visibility = "hidden";
    }

    if (b.style.visibility === "hidden") {
        b.style.visibility = "visible";
      } else {
        b.style.visibility = "hidden";
      }
  }