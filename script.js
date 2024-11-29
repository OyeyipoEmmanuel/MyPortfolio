const mobileNav = document.getElementById('mobileNav')
const showMobileNav = document.getElementById('showMobileNav')
const showMobileNavIcon = document.getElementById('showMobileNavIcon')
const hideMobileNavIcon = document.getElementById('hideMobileNavIcon')

showMobileNav.addEventListener('click', ()=>{
    mobileNav.classList.toggle('hidden')
    if(!mobileNav.classList.contains('hidden')){
        showMobileNavIcon.classList.add('hidden')
        hideMobileNavIcon.classList.remove('hidden')
    }else{
        showMobileNavIcon.classList.remove('hidden')
        hideMobileNavIcon.classList.add('hidden')
    }
})