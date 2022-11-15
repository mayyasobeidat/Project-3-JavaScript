const w = document.querySelectorAll(".wrong");
for (let i = 0; i < w.length; i++) {
  w[i].style.color = "red";
}
const r = document.querySelectorAll(".right");
for (let i = 0; i < r.length; i++) {
  r[i].style.color = "green";
}


for (let i = 0; i < 22; i++) {
  if(i == 4 || i == 11){
    continue
  }
  document.getElementById("Q"+i).innerHTML+=" "+sessionStorage.getItem("q"+i);
  
}

