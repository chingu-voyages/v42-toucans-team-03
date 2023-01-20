const categories = ["animal", "career", "celebrity", "dev", "fashion", "food", "history", "money", "movie", "music", "science", "sport", "travel"]

const url = `https://api.chucknorris.io/jokes/random?category=`

function generateRandomNumber() {
    return Math.floor(Math.random() * categories.length - 1) + 1
}

const randomCategory = categories[generateRandomNumber()]

async function getJoke(input = randomCategory) {
    let response = await fetch(url + input) 
    return await response.json()
}

getJoke().then(joke => {
    // CN fact destructured, 
    // the value variable contains our CN quote
    const {categories, icon_url, id, url, value} = joke
    console.log(value)

    document.getElementById('fact').innerHTML = value
})

/* Enter Website */
const pages = document.getElementsByTagName('main')
const enter = document.getElementById('enter')

enter.addEventListener('click', togglePage)

function togglePage() {
    pages[0].classList.toggle('hidden') /* hide home page */
    pages[1].classList.toggle('hidden') /* show categories page */
}

const buttons = document.getElementsByClassName("category-button");

for (button of buttons) {
  button.addEventListener("click", (e) => {
    pages[1].classList.toggle('hidden') /* hide categories page */
    pages[2].classList.toggle('hidden') /* show fact page */

    input = e.target.innerText.toLowerCase(); /* select button text, convert to lowercase*/
    getJoke(input).then(joke => {
        const {categories, icon_url, id, url, value} = joke
        document.getElementById('category-fact').innerHTML = value
    })
  });
}
