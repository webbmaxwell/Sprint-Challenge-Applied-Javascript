// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsArray = [];

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    let newData = response.data.topics;
    console.log(newData)
    let topics = document.querySelector('.topics');
    newData.forEach( () => {
      topics.appendChild(Tabs(newData))
    })

    // const cards2 = document.querySelector('.cards');
    //       cards2.appendChild(createCard(data.data));

  })

  .catch(err => {
    console.log('could not retrieve topics', err)
  })

function Tabs(obj) {
  let tabDiv = document.createElement('div');
  tabDiv.classList.add('tab');
  tabDiv.innerHTML = `${obj}`

  return tabDiv
}

let topicsContainer = document.querySelector('.topics');
// topicsContainer.appendChild(Tabs());
