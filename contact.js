const hometext=document.querySelector("[data-hometext]");
const togglebtn=document.querySelector("[data-btn]");
const navbar=document.querySelector("[data-navbar]");
const footer=document.querySelector("[data-footer]");
const allboxex=document.querySelectorAll(".box")
const instabox=document.querySelector('[data-box1]');
const twitter=document.querySelector('[data-box2]');
const linkedin=document.querySelector('[data-box3]');
const github=document.querySelector('[data-box4]');
const contactus=document.querySelector(".hero-text");
const hamburger=document.querySelector('.hamburger');




const body = document.body;
let colorMode = localStorage.getItem("color-mode") || "light";
// console.log("1",colorMode)
togglebtn.innerHTML =
  colorMode === "dark"
    ? '<i class="fa-regular fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

body.classList.toggle("dark-mode", colorMode == "dark");
function AtReloadcheck(){
  if(body.classList.contains("dark-mode")){
    navbar.classList.remove("whitecolor");
    navbar.classList.add("backcolor");
    hometext.classList.remove("blacktext");
    footer.classList.remove("whitecolor")
    footer.classList.remove("blacktext")
    footer.classList.add("backcolor");
    darkmode();
    hamburger.classList.remove("backcolor")
    contactus.classList.add('blacktext');


    
  }
     
   else{
    navbar.classList.remove("backcolor");
    navbar.classList.add("whitecolor");
    hometext.classList.add("blacktext");
    footer.classList.remove("backcolor");
    footer.classList.add("whitecolor");
    footer.classList.add("blacktext");
    contactus.classList.remove('blacktext');
    hamburger.classList.add("backcolor")
    lightmode();

   } 
}
AtReloadcheck();

function toggleColorMode() {
    console.log("heeeeeeeeeee")
  colorMode = colorMode === "light" ? "dark" : "light";

  togglebtn.innerHTML =
    colorMode === "dark"
      ? '<i class="fa-regular fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';

  body.classList.toggle("dark-mode", colorMode == "dark");
  AtReloadcheck();
  localStorage.setItem("color-mode", colorMode);
}

togglebtn.addEventListener("click", toggleColorMode);


//boxex
function darkmode(){
    allboxex.forEach(box=>{
    box.classList.add("backcolor");
    box.classList.add("textwhite");

       
      
    
    })

}
function lightmode(){
    allboxex.forEach(box=>{
        box.classList.remove("backcolor");
        box.classList.remove("textwhite");
        
    })
}
