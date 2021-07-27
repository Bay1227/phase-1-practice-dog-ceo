console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function loadImage() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(img => {
        img.message.forEach(image => appendImage(image))
    })
}
function appendImage(picUrl) {
    let container = document.querySelector('#dog-image-container');
    let image = document.createElement('img');
    image.src = picUrl;
    image.width = 600
    image.height = 500
    container.appendChild(image);

}

function loadBreed(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(brd => {
           breeds = Object.keys(brd.message) 
           console.log(breeds)
          
            
    })
}
//  const selector = document.querySelector("#breed-dropdown")
//  selector.addEventListener("change", (e) => {
//      const letter = e.target.value
//      const breeds = document.querySelectorAll(li.dog-breed)
//     })
// }
//function createNewList()


//function appendBreed(){

//}

loadBreed()