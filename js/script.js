
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
const input = document.querySelector('input');
const button = document.querySelector('button')

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

function searchBar(searchInput, list){
  for(let i=0; i<list.length; i++){
    const newList=[]
     if(searchInput.value.length !== 0 &&
       list[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
        newList.push[input.value]
      } else{
        showPage(data, 1)
        addPagination(data)
      }
  }

}

/**
* @function addPagination
* @param {array} list
* @description -Whis will display the Page numbers at the bottom and also
*               display 9 different students on each page
*/

function addPagination(list){

  const linkList = document.querySelector('.link-list');
  linkList.innerHTML ='';

  for(let i = 1; i<(list.length/9)+1; i++){
    linkList.insertAdjacentHTML('beforeend', `<li>
                                                <button type="button">${i}</button>
                                              </li>`
    )
  }
  linkList.firstElementChild.firstElementChild.classList.add('active')
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

button.addEventListener('click', e=>{
  e.preventDefault();

  searchBar(input, data)
});

input.addEventListener('keyup', ()=>{
  searchBar(input, data);
})
