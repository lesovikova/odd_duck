let theme = "";

const header = document.querySelector('header').classList;
const main = document.querySelector('main').classList;
const footer = document.querySelector('footer').classList;

document.querySelector('.theme-changer__clicker').addEventListener('click', changeThemes);

function changeThemes() {
    header.toggle('lighttheme');
    header.toggle('darktheme');
    
    main.toggle('lighttheme');
    main.toggle('darktheme');
    
    footer.toggle('lighttheme');
    footer.toggle('darktheme');

    console.log(theme);
    setMarker();
    console.log(theme);
    saveToLocal();
}

function setMarker() {
    if(theme === "dark") {
        theme = "light";
    }
    else {
        theme = "dark";
    }
}

function goDark(){    
    header.remove('lighttheme');
    header.add('darktheme');
    
    main.remove('lighttheme');
    main.add('darktheme');
    
    footer.remove('lighttheme');
    footer.add('darktheme');
}

function saveToLocal(){
    let themeSwitch = JSON.stringify(theme);
    localStorage.setItem("themeMarker", themeSwitch);
}



function loadFromLocal() {
    let currentTheme = JSON.parse(localStorage.getItem('themeMarker'));
    if(currentTheme === "dark") {
        goDark();
        theme = "dark"
    }
    else {
        return;
    }
}


