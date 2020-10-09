
let modal = document.getElementById("id01");

let btn = document.getElementById("open");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }

span.onclick = function() {
    modal.style.display = "none";
}

//let modal = getElementById("id02");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
