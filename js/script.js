/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


function showPage(list, page) {
   //Create two variables that will represent the index for the first and last student on the page.
   let startIndex = 0;
   let endIndex = 1;
   
   startIndex = (page * 9) - 9;
   endIndex = (page * 9);

   // select the element with a class of `student-list` and assign it to a variable.
   const studentList = document.querySelector(".student-list");

   // set the innerHTML property of the variable you just created to an empty string.
   studentList.innerHTML = "";

// loop over the length of the `list` parameter.
for (let i = 0; i < list.length; i++) {
   // inside the loop create a conditional to display the proper students.
   if (i >= startIndex && i < endIndex){
      // inside the conditional:
      // create the elements needed to display the student information.
      // insert the above elements.
      const html = `
      <li class="student-item cf">
      <div class="student-details">
      <img src="${list[i].picture.thumbnail}" alt="photo of ${list[i].name.title}" />
      <h2 class="title">${list[i].name.first} ${list[i].name.last} </h2>
      <span class="email">${list[i].email}</span>
      </div>
      
      <div class="joined-details">
      <span class="date">${list[i].registered.date}</span>
      </div>
      </li>`;

      studentList.insertAdjacentHTML("beforeend", html)
   }   
 }

}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length / 9);
 
   // select the element with a class of `link-list` and assign it to a variable
   let linkList = document.querySelector('.link-list');                                                                                                       

   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = "";
   
   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {
      // create the elements needed to display the pagination button
      const button = `
      <li>
         <button type="button">${i}</button>
      </li>`;

      // insert the above elements
      linkList.insertAdjacentHTML("beforeend", button)
   }

      // give the first pagination button a class of "active"
      linkList.querySelector("button").className = "active"
      
      // create an event listener on the `link-list` element
      linkList.addEventListener("click", (e) => {
         
         // console.log(linkList.querySelector("button"))
         const activeButton = document.querySelector("button.active");
         const buttonClicked = e.target.closest("button");
   
      // if the click target is a button:
      if (buttonClicked) {

         // remove the "active" class from the previous button
         activeButton.className = "";
   

      // add the active class to the clicked button
         buttonClicked.className = "active";
   

      // call the showPage function passing the `list` parameter and page to display as arguments

         showPage(list, buttonClicked.innerHTML);
      }



   });



};
   
// Call functions
showPage(data, 1);
addPagination(data);
