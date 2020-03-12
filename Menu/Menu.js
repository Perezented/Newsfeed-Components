/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    "Students",
    "Faculty",
    "What's New",
    "Tech Trends",
    "Music",
    "Log Out"
];

function maker(list) {
    //adding tagnames and classes.
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const holder = document.createElement("ul");

    // const students = document.createElement("li");
    // const faculty = document.createElement("li");
    // const whatsNew = document.createElement("li");
    // const techTrends = document.createElement("li");
    // const music = document.createElement("li");
    // const logOut = document.createElement("li");

    //added the ul to the div
    menu.append(holder);
    //added the li to the ul
    // holder.append(students, faculty, whatsNew, techTrends, music, logOut);
    //for each menuItem, I want to plug an li item to it
    console.log(holder);

    list.forEach(function(item) {
        let newListedItem = document.createElement("li");
        newListedItem.textContent = item;
        holder.append(newListedItem);
    });

    //got the menu button from the document
    const menuBars = document.querySelector(".menu-button");
    //add the click on it
    menuBars.addEventListener("click", e => {
        menu.classList.toggle("menu--open");
    });

    //return the function
    return menu;
}

document.querySelector(".header").append(maker(menuItems));
/*
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  

*/
// function menuMaker(obj) {
//     const menuDiv = document.createElement("div");
//     menuDiv.classList.add("menu");
//     const thisList = document.createElement("ul");
//     const students = document.createElement("li");
//     const faculty = document.createElement("li");
//     const whatsNew = document.createElement("li");
//     const techTrends = document.createElement("li");
//     const music = document.createElement("li");
//     const logOut = document.createElement("li");
//     thisList.append(students, faculty, whatsNew, techTrends, music, logOut);

//     const menuBtn = document.querySelector(".menu-button");
//     menuBtn.append(menuDiv);

//     menuBtn.addEventListener("click", () => {
//         menuDiv.classList.toggle("menu-open");
//     });
//     thisList. push(menuItems);
//     return menuMaker;
// }

// menuMaker(menuItems);
