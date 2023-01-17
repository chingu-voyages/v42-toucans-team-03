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
