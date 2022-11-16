// Para el dropdown
function showDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Cerrar el dropdown si el usuario da click fuera
window.onclick = function (event) {
  if (!event.target.matches(".btn-drop")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
