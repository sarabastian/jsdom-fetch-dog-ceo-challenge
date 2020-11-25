const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 


document.addEventListener('DOMContentHasLoaded', () => {
    fetchDogImages()
})

function fetchDogImages() {
    fetch(imgUrl)
    .then(r => r.json())
    .then(json => {
        console.log(json.message)
        renderDogImages(json.message)
    })
}

function renderDogImages(images) {
    for(let i = 0; i < images.length; i++) {
        const container = document.getElementById('dog-image-container')
        container.innerHTML.src = images[i]
    }
        
    };
