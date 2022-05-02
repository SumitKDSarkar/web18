var match =JSON.parse(localStorage.getItem("contacts"));

var fav =JSON.parse(localStorage.getItem("favourites"))||[];

window.addEventListener("load",function(){
  displayData(match);

});

function filterVenue(){
  var selected = document.querySelector("#filterVenue").value;
  var list = match.filter(function(elem){
    return elem.venue == selected;
  });

  console.log(list)
  displayData(list)
  
}
function displayData(match){
  document.querySelector("tbody").innerHTML="";
  match.map(function(elem){

    var row=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=elem.matchNum;

    var td2=document.createElement("td");
    td2.innerText=elem.teamA;

    var td3=document.createElement("td");
    td3.innerText=elem.teamB;

    var td4=document.createElement("td");
    td4.innerText=elem.date;

    var td5=document.createElement("td");
    td5.innerText=elem.venue;

    var td6=document.createElement("td");
    td6.innerText="Favourite";
    td6.style.color="green";
    td6.style.cursor="pointer"

    td6.addEventListener("click",function(){
      addToFav(elem);
    });

      row.append(td1,td2,td3,td4,td5,td6);

      document.querySelector("tbody").append(row);
    });

    
 
}

function addToFav(elem){
  console.log(elem);
  fav.push(elem);
  localStorage.setItem("favourites",JSON.stringify(fav));
}// write js code here corresponding to matches.html