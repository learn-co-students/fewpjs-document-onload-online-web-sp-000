// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    changeIDText ()
  });

  function changeIDText() {
    document.getElementById( "text" )
      .textContent = "This is really cool!";
  }