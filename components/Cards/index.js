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

// const topicsArray = [
//   "bootstrap",
//   "javascript",
//   "jquery",
// ]

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//   .then(response => {
//     let articleData = response.data.articles//.bootstrap;
//     console.log(articleData);
//     let cardContainer = document.querySelector('.cards-container');
//     let topicArray = Object.keys(articleData);
//     console.log(topicArray);
//     topicArray.forEach(item => {
//       console.log(articleData.item)               //this doesn't work
//       cardContainer.appendChild(cardMaker(articleData.item))
//     })
//   })
//   .catch(err => {
//     console.log('Failed to retrieve articles: ', err)
//   })

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      let articleData = response.data.articles.bootstrap;
      console.log(articleData);
      let cardContainer = document.querySelector('.cards-container');
      articleData.forEach(item => {
        cardContainer.appendChild(cardMaker(item));
      })
    })
    .catch(err => {
      console.log('Failed to retrieve articles: ', err)
    });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      let articleData = response.data.articles.javascript;
      console.log(articleData);
      let cardContainer = document.querySelector('.cards-container');
      articleData.forEach(item => {
        cardContainer.appendChild(cardMaker(item));
      })
    })
    .catch(err => {
      console.log('Failed to retrieve articles: ', err)
    });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      let articleData = response.data.articles.jquery;
      console.log(articleData);
      let cardContainer = document.querySelector('.cards-container');
      articleData.forEach(item => {
        cardContainer.appendChild(cardMaker(item));
      })
    })
    .catch(err => {
      console.log('Failed to retrieve articles: ', err)
    });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      let articleData = response.data.articles.technology;
      console.log(articleData);
      let cardContainer = document.querySelector('.cards-container');
      articleData.forEach(item => {
        cardContainer.appendChild(cardMaker(item));
      })
    })
    .catch(err => {
      console.log('Failed to retrieve articles: ', err)
    });

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      let articleData = response.data.articles.node;
      console.log(articleData);
      let cardContainer = document.querySelector('.cards-container');
      articleData.forEach(item => {
        cardContainer.appendChild(cardMaker(item));
      })
    })
    .catch(err => {
      console.log('Failed to retrieve articles: ', err)
    })

function cardMaker(obj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.innerHTML = `${obj.headline}`;
  cardDiv.appendChild(headline);

  const author = document.createElement('div');
  author.classList.add('author');
  cardDiv.appendChild(author)

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  author.appendChild(imgContainer);

  const authorImg = document.createElement('img');
  authorImg.setAttribute('src', `${obj.authorPhoto}`);
  imgContainer.appendChild(authorImg);

  const authorName = document.createElement('span');
  authorName.innerHTML = `By ${obj.authorName}`;
  author.appendChild(authorName)

  return cardDiv

}
