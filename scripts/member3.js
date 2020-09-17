const footballImg = document.getElementById('football-img')
const footballList = document.getElementById('football-list')
const bgImg = document.getElementById('bg-img')
const bgList = document.getElementById('bg-list')

footballImg.onclick = function(event){
    event.preventDefault()
    if (footballList.style.display === "none") {
        footballList.style.display = "block";
    } else {
        footballList.style.display = "none";
    }

}

bgImg.onclick = function(event){
    event.preventDefault()
    if (bgList.style.display === "none") {
        bgList.style.display = "block";
    } else {
        bgList.style.display = "none";
    }

}
  
