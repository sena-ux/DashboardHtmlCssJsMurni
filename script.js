const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    closeAllSubMenus()
}

function toggleSubMenu(button) {
    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate')

    if (sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeAllSubMenus (){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul =>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function goFullscreen() {
    document.documentElement.requestFullscreen();
}

function subMenuNavbar(button) {
    button.style.backgroundColor = "#222533"
    button.style.borderTopLeftRadius = ".5em"
    button.nextElementSibling.classList.toggle('show-sub-menu-navbar')
}

// goFullscreen()