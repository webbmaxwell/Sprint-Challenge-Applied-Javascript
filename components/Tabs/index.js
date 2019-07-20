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
    console.log(response.data)
    const topicsData = response.data;
    topicsData.topics.forEach(topic => {
      topicsArray.push(topic.topics)
    })

    topicsArray.forEach(item => {
      bigDiv.appendChild(Tabs(item))
    })
    // const cards2 = document.querySelector('.cards');
    //       cards2.appendChild(createCard(data.data));

  })

  .catch(err => {
    console.log('could not retrieve topics', err)
  })

const bigDiv = document.querySelector('.topics')

function Tabs(obj) {
  let tabDiv = document.createElement('div');
  tabDiv.classList.add('tab');
  // bigDiv.appendChild(tabDiv);

  return
}
