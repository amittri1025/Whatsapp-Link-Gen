const btn = document.getElementById("mybtn");
const rockBtn = document.getElementById("rockBtn");
const mob = document.getElementById("MobileNum");
const inputText = document.getElementById("textforWa");
const genLink = document.getElementById("genLink");
const btnCopy = document.getElementById("btn-copy");
const whatsBtn = document.getElementById("btn-WhatsLink");
const linkContainer = document.getElementById("linkContainer");
const errMsg = document.querySelector(".err-msg");
const countryCode = document.querySelector("select");
const b2t = document.getElementById("back-to-top");

b2t.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    b2t.classList.add("show");
  } else {
    b2t.classList.remove("show");
  }
});

// dark mode
const toggleButton = document.getElementById("toggleMode");
const body = document.body;
const colorMode = localStorage.getItem("color-mode") || "light";

if (localStorage.getItem("color-mode") === "dark") {
  body.classList.add("dark-mode");
}

function toggleColorMode() {
  let colorMode = localStorage.getItem("color-mode");

  if (colorMode !== "dark" || colorMode === null) {
    body.classList.add("dark-mode");
    localStorage.setItem("color-mode", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("color-mode", "light");
  }
}

toggleButton.addEventListener("click", toggleColorMode);

// Magic (text on phone)
let numPhone = document.getElementById("magic-num");
let textPhone = document.getElementById("magic-text");

inputText.addEventListener("keyup", (e) => {
  textPhone.innerText = e.target.value;
});

mob.addEventListener("keyup", (e) => {
  numPhone.innerText = e.target.value;
});

const textStr = inputText.value;

// Rock Btn smooth scroll
rockBtn.addEventListener("click", () => {
  window.scrollTo(0, 400);
});

let arrayOfStrings = inputText.value.split(" ");
let linkText = arrayOfStrings.join("%20");
let linkform = `I dont care`;

mob.addEventListener("input", (e) => {
  mob.classList.remove("input-error");
  errMsg.style.display = "none";

  const value = e.target.value;

  if (e.inputType === "deleteContentBackward") return;

  // can input only digits

  if (parseInt(e.data) !== 0 && !parseInt(e.data)) {
    console.log(e.data);
    mob.value = value.substring(0, value.length - 1);
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // if mobilenum is empty then don't submit
  if (!mob.value) {
    mob.classList.add("input-error");
    errMsg.style.display = "block";
    return;
  }

  arrayOfStrings = inputText.value.split(" ");
  linkText = arrayOfStrings.join("%20");
  linkform = `https://api.whatsapp.com/send?phone=${countryCode.value}${mob.value}&text=${linkText}&lang=en`;

  const whatsShareLink = `api.whatsapp.com/send?phone=91${mob.value}&text=${linkText}&lang=en`;

  console.log(inputText.value);
  genLink.innerText = linkform;

  whatsBtn.setAttribute("href", `http://${whatsShareLink}/`);
  whatsBtn.classList.remove("wbtn");

  window.scrollTo(0, 700);
});

// Whatsapp share btn
// Create anchor element.
// var wsharebtn = document.createElement('a');
// var textnode = document.createTextNode("Share on Whatsapp")
// wsharebtn.classList.add("btn")
// wsharebtn.classList.add("btn-primary")
// //Open Whatsapp Link
// wsharebtn.href = whatsShareLink

// var whatsSym = document.createElement('i');
// whatsSym.classList.add("bi")
// whatsSym.classList.add("bi-whatsapp")

// wsharebtn.appendChild(whatsSym)
// wsharebtn.appendChild(textnode);
// linkContainer.appendChild(wsharebtn)

// Copy Text

new ClipboardJS("#btn-copy");
btnCopy.addEventListener("click", (e) => {
  e.preventDefault();
  btnCopy.innerText = "Copied";
  setTimeout(() => {
    btnCopy.innerText = "Copy";
  }, 2000);
});

new EmojiPicker({
  trigger: [
    {
      selector: ".emoji-btn",
      insertInto: [".one"],
    },
  ],
  closeButton: true,
  //specialButtons: green
});
