// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entryPoint = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles.bootstrap.forEach(element => {
      const card = cardMaker(element);
      entryPoint.appendChild(card);
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

function cardMaker(item) {
  const newCard = document.createElement("div"),
    headline = document.createElement("div"),
    authorContainer = document.createElement("div"),
    imgContainer = document.createElement("div"),
    authorImg = document.createElement("img"),
    authorName = document.createElement("span");

  newCard.classList.add("card");
  headline.classList.add("headline");
  authorContainer.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = item.headline;
  authorImg.src = item.authorPhoto;
  authorName.textContent = item.authorName;

  newCard.appendChild(headline);
  newCard.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  authorContainer.appendChild(authorName);

  return newCard;
}
