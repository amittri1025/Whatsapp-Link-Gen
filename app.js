const btn = document.getElementById('mybtn')
const rockBtn = document.getElementById('rockBtn')
const mob = document.getElementById('MobileNum')
const inputText = document.getElementById('textforWa')
const genLink = document.getElementById('genLink')
const btnCopy = document.getElementById('btn-copy')
const whatsBtn = document.getElementById('btn-WhatsLink')
const linkContainer = document.getElementById('linkContainer')
const errMsg = document.querySelector('.err-msg')

const countryCode = document.querySelector('select')



// dark mode
const toggleButton = document.getElementById('toggleMode');
const body = document.body;
let colorMode = localStorage.getItem('color-mode') || 'light';

toggleButton.textContent = colorMode === 'dark' ? 'Light': 'Dark'; 

body.classList.toggle('dark-mode', colorMode == 'dark');

function toggleColorMode(){
    colorMode = colorMode === 'light' ? 'dark' : 'light';

    toggleButton.textContent = colorMode === 'dark' ? 'Light': 'Dark'; 

    body.classList.toggle('dark-mode', colorMode == 'dark');

    localStorage.setItem('color-mode', colorMode);
}


toggleButton.addEventListener('click', toggleColorMode);



// Magic (text on phone)
let numPhone = document.getElementById('magic-num')
let textPhone = document.getElementById('magic-text')

inputText.addEventListener('keyup', (e) => {
    textPhone.innerText = e.target.value
})

mob.addEventListener('keyup', (e) => {
    numPhone.innerText = e.target.value
})

const textStr = inputText.value

// Rock Btn smooth scroll
rockBtn.addEventListener('click', () => {
    window.scrollTo(0, 400)
});

const select = document.getElementById('select')

function adjustWidth(){
    const selectedOption = select.options[select.selectedIndex];
    select.style.width = `${selectedOption.text.length + 3}ch` ;
}
adjustWidth();
select.addEventListener("change", adjustWidth);


let arrayOfStrings = inputText.value.split(' ')
let linkText = arrayOfStrings.join('%20')
let linkform = `I dont care`


mob.addEventListener('input', (e) => {
    mob.classList.remove('input-error');
    errMsg.style.display = 'none';

    const value = e.target.value;

    if (e.inputType === 'deleteContentBackward') return;

    // can input only digits

    if (parseInt(e.data) !== 0 && !parseInt(e.data)) {
        console.log(e.data)
        mob.value = value.substring(0, value.length - 1);
    }
})

btn.addEventListener('click', (e) => {
    e.preventDefault()

    // if mobilenum is empty then don't submit
    if (!mob.value) {
        mob.classList.add('input-error');
        errMsg.style.display = 'block';
        return;
    }

    arrayOfStrings = inputText.value.split(' ')
    linkText = arrayOfStrings.join('%20')
    linkform = `https://api.whatsapp.com/send?phone=${countryCode.value}${mob.value}&text=${linkText}&lang=en`

    const whatsShareLink = `api.whatsapp.com/send?phone=91${mob.value}&text=${linkText}&lang=en`

    console.log(inputText.value)
    genLink.innerText = linkform

    whatsBtn.setAttribute("href", `http://${whatsShareLink}/`)
    whatsBtn.classList.remove('wbtn')

    window.scrollTo(0, 700)
})



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

new ClipboardJS('#btn-copy');
btnCopy.addEventListener('click', (e) => {

    e.preventDefault()
    btnCopy.innerText = 'Copied'
    setTimeout(() => {
        btnCopy.innerText = 'Copy'
    }, 2000);

})

new EmojiPicker({
    trigger: [
        {
            selector: '.emoji-btn',
            insertInto: ['.one']
        }
    ],
    closeButton: true,
    //specialButtons: green
});