const educationNav = document.getElementById('showEducation')
const workNav = document.getElementById('showWork')
const gifNav  = document.getElementById('showGif')

const educationList = document.getElementById('educationList')
const workList = document.getElementById('workList')
const gifList = document.getElementById('gifList')

educationNav.onclick = function(event){
    event.preventDefault()
    
    workList.style.display = 'none'
    educationList.style.display = 'block'
    gifList.style.display = 'none'
    
    workNav.classList.remove('about-nav-link-active')
    gifNav.classList.remove('about-nav-link-active')
    this.classList.add('about-nav-link-active')
  }
  

workNav.onclick = function(event){
    event.preventDefault()
    
    educationList.style.display = 'none'
    workList.style.display = 'block'
    gifList.style.display = 'none'
    
    educationNav.classList.remove('about-nav-link-active')
    gifNav.classList.remove('about-nav-link-active')
    this.classList.add('about-nav-link-active')
  }

gifNav.onclick = function(event){
    event.preventDefault()
    
    workList.style.display = 'none'
    educationList.style.display = 'none'
    gifList.style.display = 'block'
    
    workNav.classList.remove('about-nav-link-active')
    educationNav.classList.remove('about-nav-link-active')
    this.classList.add('about-nav-link-active')
  }
  