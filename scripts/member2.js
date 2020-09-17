const educationNav = document.getElementById('showEducation')
const educationList = document.getElementById('educationList')

educationNav.onclick = function(event){
    event.preventDefault()
    
    workList.style.display = 'none'
    educationList.style.display = 'block'
    
    workNav.classList.remove('about-nav-link-active')
    this.classList.add('about-nav-link-active')
  }
  

workNav.onclick = function(event){
    event.preventDefault()
    
    educationList.style.display = 'none'
    workList.style.display = 'block'
    
    educationNav.classList.remove('about-nav-link-active')
    this.classList.add('about-nav-link-active')
  }