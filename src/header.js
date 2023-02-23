import ContactPage from "./contactpage";
import MenuPage from "./menupage";
import HomePage from "./homepage";

function Header() {
  /* General */
  const contentDiv = document.querySelector("#content");
  const headerDiv = document.createElement("div");

  /* Header Elements */

  headerDiv.classList = "header";
  contentDiv.appendChild(headerDiv);

  const homeButton = document.createElement("button");
  homeButton.classList = "header__homebutton header__button";
  homeButton.innerText = "Home";
  homeButton.onclick = HomePage;
  headerDiv.appendChild(homeButton);
  

  const menuButton = document.createElement("button");
  menuButton.classList = "header__menubutton header__button";
  menuButton.innerText = "Menu";
  menuButton.onclick = MenuPage;
  headerDiv.appendChild(menuButton);

  const contactButton = document.createElement("button");
  contactButton.classList = "header__contactbutton header__button";
  contactButton.innerText = "Contact";
  contactButton.onclick = ContactPage;
  headerDiv.appendChild(contactButton);

  const headerButtons = document.querySelectorAll(".header__button")

  headerButtons.forEach(b => {
    const dot = document.createElement("div");
    dot.classList = "dot";
    b.appendChild(dot)
  })
}

export default Header;