const footballImg = document.getElementById('football-img')
const footballList = document.getElementById('football-list')


footballImg.onclick = function(event){
    event.preventDefault()
    
    if (footballList.style.display === "none") {
        footballList.style.display = "block";
    } else {
        footballList.style.display = "none";
    }

    // footballList.style.display = 'none'
    // educationList.style.display = 'block'
    
    // workNav.classList.remove('about-nav-link-active')
    // this.classList.add('about-nav-link-active')
  }
  
