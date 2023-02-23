import Header from "./header";
import Menu from "./menuList";

function MenuPage() {
    /* General */
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
  
    /* Header */ 
    Header();

    /* Body */

    const menuPageBody = document.createElement("div");
    menuPageBody.classList = "menu-page";
    contentDiv.appendChild(menuPageBody);

    const menuPageTitle1 = document.createElement("div");
    menuPageTitle1.classList = "menu-page__title1";
    menuPageTitle1.innerText = "Discover"
    menuPageBody.appendChild(menuPageTitle1)

    const menuPageTitle2 = document.createElement("div");
    menuPageTitle2.innerText = "Food Menu";
    menuPageTitle2.classList = "menu-page__title2";
    menuPageBody.appendChild(menuPageTitle2);

    const menuPageGrid = document.createElement("div");
    menuPageGrid.classList = "menu-grid";
    menuPageBody.appendChild(menuPageGrid);

    Menu.forEach(course => CreateCourse(course));


    /* Functions */
    function CreateCourse(course) {
      const courseDiv = document.createElement("div");
      courseDiv.classList = "course-div";
    
      const courseName = document.createElement("div");
      courseName.classList = "course-name";
      courseName.innerText = course.course;
      courseDiv.appendChild(courseName);

      course.dishes.forEach(dish => CreateDish(dish));

      function CreateDish(dish) {
        const dishDiv = document.createElement("div");
        dishDiv.classList = "dish";
        courseDiv.appendChild(dishDiv);

        const dishDivContent = document.createElement("div")
        dishDivContent.classList = "dish-content";
        dishDiv.appendChild(dishDivContent);

        const dishName = document.createElement("div");
        dishName.classList = "dish-name";
        dishName.innerText = dish.dishName;
        dishDivContent.appendChild(dishName)

        const dishIngredients = document.createElement("div");
        dishIngredients.classList = "dish-ingredients";
        dishIngredients.innerText = dish.dishIngredients;
        dishDivContent.appendChild(dishIngredients);

        const dishPrice = document.createElement("div");
        dishPrice.classList = "dish-price"
        dishPrice.innerText = dish.dishPrice;
        dishDiv.appendChild(dishPrice)
        
      };
    
      menuPageGrid.appendChild(courseDiv)
    }
    
}


export default MenuPage;