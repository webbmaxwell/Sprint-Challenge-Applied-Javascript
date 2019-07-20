// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(obj) {
  let headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  let dateSpan = document.createElement('span');
  dateSpan.classList.add('date');
  dateSpan.innerHTML = 'SMARCH 28, 2019';
  headerDiv.appendChild(dateSpan);

  let title = document.createElement('h1');
  title.innerHTML = 'Lambda Times';
  headerDiv.appendChild(title)

  let temp = document.createElement('span')
  temp.classList.add('temp');
  temp.innerHTML = '98°';
  headerDiv.appendChild(temp);

  return headerDiv
}

let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header);
