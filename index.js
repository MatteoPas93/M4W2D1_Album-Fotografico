const pexelsApi = "https://api.pexels.com/v1/search?query=maldive"



const fetchImg = () => (
    fetch(pexelsApi, {
        headers: {
          Authorization: "zmtYo6sglB8yymkQmAZA36iUYqjeOmZh19BsYJZreIYxLunl7pZUFNOp"
        }
    }))
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
       let containerCards = document.querySelector(".container-cards")
       containerCards.innerHTML = data.photos.map((photo) => {
        
        return `<div class="card col-4">
        <img src="${photo.src.medium}" alt="img"/>
        <p> ${photo.alt} </p>
        <h6> Photographer:  ${photo.photographer} </h6>
        
        </div>`
       }) 
       .join("")
    })

fetchImg()

