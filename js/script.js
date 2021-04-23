
/**
* @file This Organizes a series of student data
* @author Mike T.
*/


/**
* @const -The series of const and Labels appends a submit and text input
*/
const studentList = document.querySelector('.student-list');
const header = document.querySelector('header');


header.innerHTML +=`<div class="student-search">
                    <span>Search by name</span>
                    <input id="search" placeholder="Search by name">
                    <button class="select-button"><img src="img/icn-search.svg" alt="Search icon"></button>
                  </div>
                    `
const input = document.querySelector('#search');

/**
* @function showPage
* @param {array} list
* @param {number} page
* @description - This will Display the information from the data
*                array to the Dom
*/

function showPage(list, page){
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;

  studentList.innerHTML ='';
  if(list.length === 0){
    studentList.innerHTML =`<h1>This person could not be found, please try again</h1>`
  }
  for(let i= 0; i<list.length; i++){
      if(i >= startIndex && endIndex > i){

  studentList.insertAdjacentHTML('beforeend',   `
                                        <li class="student-item cf">
                                          <div class="student-details">
                                            <img class="avatar" src=${list[i].picture.large}>
                                            <h3>${list[i].name.first} ${list[i].name.last}</h3>
                                            <span class="email">${list[i].email}</span>
                                          </div>
                                          <div class="joined-details">
                                            <span class="date">Joined ${list[i].registered.date}</span>
                                          </div>
                                        </li>
                                       `
        )

      }
  }
}

showPage(data, 1)

/**
* @description -bellow was a failed attempt at creating the searchBar
*               I will eventually get back to it
*/

function searchBar(sInput, list){
    let newList =[];
    for(let i=0; i<list.length; i++){
    const firstLast= `${list[i].name.first.toLowerCase()} ${list[i].name.first.toLowerCase()}`
     if(firstLast.includes(sInput.toLowerCase()) ){
         newList.push(list[i]);
    }

  }
  console.log(newList)
  showPage(newList, 1);
  addPagination(newList)
};


/**
* @function addPagination
* @param {array} list
* @description -Whis will display the Page numbers at the bottom and also
*               display 9 different students on each page
*/

function addPagination(list){

  const linkList = document.querySelector('.link-list');
  linkList.innerHTML ='';

  for(let i = 1; i<Math.ceil(list.length/9)+1; i++){
    linkList.insertAdjacentHTML('beforeend', `<li>
                                                <button type="button">${i}</button>
                                              </li>`
    )
     document.querySelector('.link-list button').className = 'active';
  }
  linkList.addEventListener('click', e => {
    if(e.target.tagName ==='BUTTON'){
      const active = document.querySelector('.active');
      active.className = '';
      e.target.className= 'active'
      showPage(list, e.target.textContent)
    }
  })
}

addPagination(data)
// Call functions
const button = document.querySelector('.select-button')

button.addEventListener('click', (e)=>{
  e.preventDefault();

  searchBar(input.value, data)
});

input.addEventListener('keyup', (e)=>{
  searchBar(e.target.value, data);
})
