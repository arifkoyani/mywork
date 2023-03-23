



let a=document.getElementById("onebutton")
let b=document.getElementById('twobutton')

let firstpage = document.getElementById("first-page")
let secondpage = document.getElementById("second-page")


let createbotton = document.getElementsByClassName("Create_button")


a.addEventListener('click',all)
function all(){
    a.style.backgroundColor="#e83a30"
    b.style.backgroundColor='transparent'
    a.style.color='white'
    b.style.color='black'
    firstpage.style.display="none"
    secondpage.style.display="block"
}


b.addEventListener('click',ball)
function ball(){
    a.style.backgroundColor="transparent"
    b.style.backgroundColor="#e83a30"
    b.style.color='white'
    a.style.color='black'
    firstpage.style.display="block"
    secondpage.style.display="none"

}



// <------------------------->like heart icon js------------------>.>>>

let like=document.getElementById("heart-like")
let shownumber=document.getElementById("numberadd")
like.addEventListener("click",hey)
let number=0
function hey(){
    if(number===0){
        number++
        shownumber.innerHTML=number
    }
    else{
        number--
        shownumber.innerHTML=""

    }
}


// <---------------for second heart----------->
let alike=document.getElementById("aheart-like")
let ashownumber=document.getElementById("anumberadd")
alike.addEventListener("click",heye)
let anumber=0
function heye(){
    if(anumber===0){
        anumber++
        ashownumber.innerHTML=anumber
    }
    else{
        anumber--
        ashownumber.innerHTML=""

    }
}




// <--------------for_third_heart------->
let blike=document.getElementById("bheart-like")
let bshownumber=document.getElementById("bnumberadd")
blike.addEventListener("click",heyee)
let bnumber=0
function heyee(){
    if(bnumber===0){
        bnumber++
        bshownumber.innerHTML=bnumber
    }
    else{
        bnumber--
        bshownumber.innerHTML=""

    }
}


// <------------------for forth heart------------->

let clike=document.getElementById("cheart-like")
let cshownumber=document.getElementById("cnumberadd")
clike.addEventListener("click",heyeee)
let cnumber=0
function heyeee(){
    if(cnumber===0){
        cnumber++
        cshownumber.innerHTML=cnumber
    }
    else{
        cnumber--
        cshownumber.innerHTML=""

    }
}






