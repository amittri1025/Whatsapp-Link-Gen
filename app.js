const btn = document.getElementById('mybtn')
const rockBtn = document.getElementById('rockBtn')
const mob = document.getElementById('MobileNum')
const inputText = document.getElementById('textforWa')
const genLink = document.getElementById('genLink')
const btnCopy = document.getElementById('btn-copy')
const whatsBtn = document.getElementById('btn-WhatsLink')
const linkContainer = document.getElementById('linkContainer')

// Magic (text on phone)
let numPhone = document.getElementById('magic-num')
let textPhone = document.getElementById('magic-text')

inputText.addEventListener('keyup', (e)=>{
    textPhone.innerText = e.target.value 
})

mob.addEventListener('keyup', (e)=>{
    numPhone.innerText = e.target.value 
})

const textStr = inputText.value

// Rock Btn smooth scroll
rockBtn.addEventListener('click', () => {
    window.scrollTo(0, 400)
});




let arrayOfStrings = inputText.value.split(' ')
let linkText = arrayOfStrings.join('%20')
let linkform = `I dont care`




btn.addEventListener('click', (e) => {
    e.preventDefault()
    arrayOfStrings = inputText.value.split(' ')
    linkText = arrayOfStrings.join('%20')
    linkform = `https://api.whatsapp.com/send?phone=91${mob.value}&text=${linkText}&lang=en`

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
