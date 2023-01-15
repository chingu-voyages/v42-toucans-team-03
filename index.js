const categories = ["animal", "career", "celebrity", "dev", "fashion", "food", "history", "money", "movie", "music", "science", "sport", "travel"]

const url = `https://api.chucknorris.io/jokes/random?category=`


function generateRandomNumber() {
    return Math.floor(Math.random() * categories.length - 1) + 1
}

async function getJoke() {
    let response = await fetch(url+(categories[generateRandomNumber()]))
    return await response.json()
}

getJoke().then(joke => {
    const {categories, icon_url, id, url, value} = joke
})
