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

    document.getElementById('fact').innerHTML = value
})

/* Enter Website */
const pages = document.getElementsByTagName('main')
const enter = document.getElementById('enter')
const title = document.querySelector('.title')

enter.addEventListener('click', togglePage)
title.addEventListener('click', togglePage)

function togglePage() {
    pages[0].classList.toggle('hidden') /* hide home page */
    pages[1].classList.toggle('hidden') /* show categories page */
    showNavBar()
}

/* Get Fact by Category */
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

/* Get Random Fact */
document.getElementById('next').addEventListener('click', getRandomFact)

function getRandomFact() {
  getJoke(randomCategory).then(joke => {
    const {categories, icon_url, id, url, value} = joke
    document.getElementById('category-fact').innerHTML = value
})
}

/* Share Fact */
document.querySelector('share-menu').addEventListener('click', shareFact)

function shareFact(event) {
  let fact = document.querySelector('#category-fact').innerHTML;
  let factEncoded = encodeURI(fact);
  console.log(factEncoded);
  if (event.target.id == 'tw-share') {
    let url = "https://twitter.com/intent/tweet?url=https%3A%2F%2Fchingu-voyages.github.io%2Fv42-toucans-team-03%2F&text=";
  }
  else if (event.target.id == 'fb-share') {
    let url = 'https://facebook.com/';
  }
  window.open(`${url}${factEncoded}`, "_blank");
}



document.getElementById('kicking-chuck').addEventListener('click', () => {
  pages[1].classList.toggle('hidden') /* hide categories page */
  pages[2].classList.toggle('hidden') /* show fact page */
  getRandomFact()
})

/* Button Animation */
const animatedButtons = document.getElementsByClassName('category-button')

// Detect when button element enters the viewport
const observer = new IntersectionObserver((entries) => {
    for (let entry of entries) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('anim') // run: add animation class
  } else {
    entry.target.classList.remove('anim') // reset: remove animation class
  }
    }
})

for (button of animatedButtons) {
  observer.observe(button)
}

document.getElementById('back').addEventListener('click', () => {
  pages[2].classList.add('hidden')
  pages[1].classList.remove('hidden')
})


function showNavBar() {
  !pages[0].classList.contains('hidden') ? 
    document.getElementById('nav-container').classList.add('hidden')
    : document.getElementById('nav-container').classList.remove('hidden')
} 

showNavBar()