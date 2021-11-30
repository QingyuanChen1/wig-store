let boolean = true;
let boolean1 = true;
let booleanhiddenbar = true;
let popupmenu = document.getElementById("secondmenu");
let website = document.getElementById("website");
function menu() {
    if(boolean=== true){
        document.getElementById("subtag").style.display ='block';
        document.getElementById("fa-caret-down").style.transform = 'translateY(-5%) rotate(-180deg)';
        boolean = false;
    }
    else{
        document.getElementById("subtag").style.display ='none';
        document.getElementById("fa-caret-down").style.transform = 'translateY(-5%) rotate(0deg)';
        boolean = true;
    }

}
function menu1(){
    if(boolean1=== true){
        document.getElementById("hiddensecondbar").style.display ='block';
        document.getElementById("fa-caret-down1").style.transform = 'translateY(-5%) rotate(-180deg)';
        boolean1 = false;
    }
    else{
        document.getElementById("hiddensecondbar").style.display ='none';
        document.getElementById("fa-caret-down1").style.transform = 'translateY(-5%) rotate(0deg)';
        boolean1 = true;
    }
}
function cart(){
    popupmenu.style.display = 'block';
    website.style.opacity = '0.1';
}
function hiddenbar(){
    if(window.screen.availWidth > 1300){
        document.getElementById("hiddenbar").style.visibility = 'hidden';
    }
    if(booleanhiddenbar === true){
        document.getElementById("hiddenbar").style.visibility = 'visible';
        booleanhiddenbar = false;
    }
    else if(booleanhiddenbar === false){
        document.getElementById("hiddenbar").style.visibility = 'hidden';
        booleanhiddenbar = true;
    }
}
