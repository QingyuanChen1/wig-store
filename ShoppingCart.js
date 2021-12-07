let boolean = true;
let boolean1 = true;
let boolean2 = true;
let booleanhiddenbar = true;
let popupmenu = document.getElementById("secondmenu");
let website = document.getElementById("website");
let hidden = document.getElementById("fa-chevron-circle-left");


function menu(){
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
    if(booleanhiddenbar === true){
        document.getElementById("hiddenbar").style.visibility = 'visible';
        boolean2 = true;
        booleanhiddenbar = false;
    }
    else if(booleanhiddenbar === false){
        document.getElementById("hiddenbar").style.visibility = 'hidden';
        booleanhiddenbar = true;
    }
}

function gobackbutton(){
    if(boolean2 === true){
        document.getElementById("hiddenbar").style.visibility = 'hidden';
        boolean2 = false;
    }
}
function remove1(){
    remove_boolean1 = false;
    document.getElementById("style").style.display ='none';
    document.getElementById("hairwash").style.display ='none';
    if(remove_boolean2 === true){
        document.getElementById("style1").style.gridColumn = '2';
        document.getElementById("style1").style.gridRow = '2';
        document.getElementById("conditioner").style.gridColumn = '1';
        document.getElementById("conditioner").style.gridRow = '2';
    }
    if(remove_boolean1 === false && remove_boolean2 === false){
        document.getElementById("nothing").style.display= 'block';
    }
}
function remove2(){
    remove_boolean2 = false;
    document.getElementById("style1").style.display ='none';
    document.getElementById("conditioner").style.display ='none';
    if(remove_boolean1 === false && remove_boolean2 === false){
        document.getElementById("nothing").style.display= 'block';
    }
}
