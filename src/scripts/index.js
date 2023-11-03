import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../public/data/DATA.json";

console.log(data);

const listRestaurant = (data) => {
  const restElement = document.querySelector("#listRestaurant");
  restElement.innerHTML = "";
  data.forEach((resto) => {
    const { name, description, pictureId, city, rating } = resto;
    const listResto = document.createElement("div");

    listResto.innerHTML = `
    <div class="container" tabindex="0">
      <article class="post-item">
          <img class="post-item__gambar"
              src="${pictureId}" alt="${name} restaurant">
          <div class="post-item__content">
              <h2 class"post-item__title">${name}</h2>
              <p class="post-item__city">City : ${city}</p>
              <p class="post-item__rating">Rating : ${rating}</p>
              <p class="post-item__description">Description : ${description}</p>
          </div>
      </article>
    </div>    
          `;

    restElement.appendChild(listResto);
  });
};
listRestaurant(data.restaurants);

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
