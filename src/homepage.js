import Header from "./header"
import MenuPage from "./menupage";


function HomePage() {
  /* General */
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = ""
  
  const solidChevronRight = document.createElement("i");
  solidChevronRight.classList = "fa-solid fa-chevron-right";

  const solidChevronRight2 = document.createElement("i");
  solidChevronRight2.classList = "fa-solid fa-chevron-right";

  const solidChevronLeft = document.createElement("i");
  solidChevronLeft.classList = "fa-solid fa-chevron-left";

  
 

  /* Header */ 
  Header();

  /* Body */
  const homeBody = document.createElement("div")
  homeBody.classList = "home-body";
  contentDiv.appendChild(homeBody);

  const homeBodyTitle = document.createElement("div");
  homeBodyTitle.classList = "home-body__title";
  homeBodyTitle.innerText = "Discover your taste today"
  homeBody.appendChild(homeBodyTitle);

  const homeBodyDescription = document.createElement("div");
  homeBodyDescription.classList = "home-body__description";
  homeBodyDescription.innerText = "Eat healthy and Natural Food"
  homeBody.appendChild(homeBodyDescription);

  const homeBodyDiscover = document.createElement("button");
  homeBodyDiscover.classList = "home-body__discover";
  homeBodyDiscover.innerText = 'Discover Menu' 
  homeBodyDiscover.appendChild(solidChevronRight);
  homeBodyDiscover.onclick = MenuPage;
  homeBody.appendChild(homeBodyDiscover);

  /* Image */
  const homeBodyImages = document.createElement("div");
  homeBodyImages.classList = "home-body__images";
  contentDiv.appendChild(homeBodyImages);

  const homeBodyImageRightButton = document.createElement("button");
  homeBodyImageRightButton.classList = "home-body__images-rightbutton"
  homeBodyImageRightButton.appendChild(solidChevronRight2);
  homeBodyImages.appendChild(homeBodyImageRightButton);



  const homeBodyImageLeftButton = document.createElement("button");
  homeBodyImageLeftButton.classList = "home-body__images-leftbutton";
  homeBodyImageLeftButton.appendChild(solidChevronLeft);
  homeBodyImages.insertBefore(homeBodyImageLeftButton, homeBodyImageRightButton)
  

}

export default HomePage;
