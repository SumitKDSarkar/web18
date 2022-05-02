// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFunction);
var arr =JSON.parse(localStorage.getItem("contacts")) || [];

function myFunction(){
  event.preventDefault();

  var obj={
    matchNum:document.querySelector("#matchNum").value,
    teamA   :document.querySelector("#teamA").value,
    teamB   :document.querySelector("#teamB").value,
    date    :document.querySelector("#date").value,
    venue   :document.querySelector("#venue").value,

  };

  arr.push(obj);

  localStorage.setItem("contacts",JSON.stringify(arr));
  document.querySelector("#matchNum").value="";
  document.querySelector("#teamA").value="";
  document.querySelector("#teamB").value="";
  document.querySelector("#date").value="";
  document.querySelector("#venue").value="";

  window.location.href="matches.html"

}
