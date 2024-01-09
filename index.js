const pexelsApi = "https://api.pexels.com/v1/search?query=italy"


// !NAV SECTION

let nav = document.createElement("div")
nav.setAttribute("class", "container-nav")
document.body.appendChild(nav)

nav.innerHTML += `<div class="title">
<h1>Album Fotografico</h1>
</div>
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
</div>`



// !CONTAINER CARDS

let containerCards = document.createElement("div")
const fetchImg = () => (
    fetch(pexelsApi, {
        headers: {
          Authorization: "zmtYo6sglB8yymkQmAZA36iUYqjeOmZh19BsYJZreIYxLunl7pZUFNOp"
        }
    }))
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
       
       containerCards.setAttribute("class", "container-cards row")
       document.body.appendChild(containerCards)
       containerCards.innerHTML = data.photos.map((photo) => {
        
        return `<div class="card col-4">
        <img src="${photo.src.medium}" alt="img"/>
        <p> ${photo.alt} </p>
        <h6> Photographer:  ${photo.photographer} </h6>
        </div>`
       }) 
       .join("")
       
    })
    .catch((err) => 
    console.error(err))

fetchImg()
       
