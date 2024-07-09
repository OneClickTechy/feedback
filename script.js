//select elements
let ratingContainer = document.querySelector("#ratingContainer");
let ratings = document.querySelector("#ratings");
let rating = document.querySelectorAll("#rating");
console.log(rating.length);
let ratingSaver = document.querySelector("#ratingSaver");
let score = "Happy!!!";
//
ratings.addEventListener("click", (event) => {
  if (event.target.parentNode.classList.contains("rating")) {
    removeActive();

    event.target.parentNode.classList.add("active");
    score = event.target.parentElement.lastElementChild.textContent;
    console.log(score);
  }
});

function removeActive() {
  for (let i = 0; i < rating.length; i++) {
    console.log(rating[i]);
    rating[i].classList.remove("active");
  }
}

ratingSaver.addEventListener("click", () => {
  ratingContainer.innerHTML = `
    <div>Thankyou for giving feedback</div>
    <div>💖</div>
    <div>Your feedback is ${score}</div>
    `;
});
//remove default active or previous active

//   if (event.target.parentNode.classList.contains("rating")) {
//     console.log(event.target.parentNode.classList.contains("rating"));
//     console.log(ratings.children)
//     for(let i = 0; i < ratings; i++){
//         console.log(ratings[i])
//     }
//   }
