function renderCategoryCard(data = []) {
  const cardsArray = [];
  const categoriesSliderContainer =
    document.getElementById("categories-slider");
  if (data.length > 0) {
    data.forEach((_d) => {
      const categoryCard = document.createElement("div");
      categoryCard.setAttribute("class", "categories-card");
      categoryCard.innerHTML = `<div class="card-content">
                <img
                  class="categories-image mb-1"
                  src="${_d.image}"
                />
                <p class="text-center">${_d.label}</p>
              </div>`;
      cardsArray.push(categoryCard);
    });
  }
  categoriesSliderContainer.append(...cardsArray);
}

function renderRestaurantCard(data = []) {
  const cardsArray = [];
  const restaurantsListingContainer = document.getElementById(
    "restaurants-listing"
  );
  if (data.length > 0) {
    data.forEach((_d) => {
      const cardNode = document.createElement("div");
      cardNode.setAttribute("class", "col-4");
      cardNode.innerHTML = `
            <div class="card restaurantCard p-1">
              <div class="cardHead">
                <div class="promotedTag"><p class="fs-5">Promoted</p></div>
                <img
                  src="${_d.restaurantImage}"
                  class="card-img-top"
                  height="248px"
                  style="border-radius: 10px; object-fit: cover;"
                  alt="${_d.restaurantName}"
                />
                <div class="offerRow">
                  <div class="offer d-flex align-items-center"><p class="fs-7">50% offer upto 150</p></div>
                  <div class="timeTaken fs-7">29min</div>
                </div>
              </div>
              <div class="card-body">
                <div class="row g-0 mb-2">
                 <div class="col-10"><h6 class="restaurantTitle fs-8">${_d.restaurantName}</h6></div>
                  <div class="col-2 ">
                      <span class="badge text-bg-success restaurantRatings d-flex justify-content-between"><p class="fs-7">${_d.ratings}</p>
                        <span class="material-symbols-outlined fs-7">
                          star
                        </span>
                      </span>
                    </div>
                </div>
                <div class="row d-flex justify-content-between">
                  <div class="col-8">
                    <p class="restaurantCuisine fs-7 fw-light">${_d.cuisine}</p>
                  </div>
                  <div class="col-4">
                    <p class="restaurantCuisine text-end fs-7 fw-light">${_d.minQuanitityPrice}</p>
                  </div>
                </div>
              </div>
            </div>`;
      cardsArray.push(cardNode);
    });
    restaurantsListingContainer.append(...cardsArray);
  }
}

function renderCategoriesData() {
  const result = JSON.parse(this.responseText);
  renderCategoryCard(result.data);
}

function renderRestaurantsData() {
  const result = JSON.parse(this.responseText);
  renderRestaurantCard(result.data);
}

function getCategories() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", renderCategoriesData);
  request.open("GET", "./categories.json");
  request.send();
}

function getRestaurants() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", renderRestaurantsData);
  request.open("GET", "./restaurants.json");
  request.send();
}
getCategories();
getRestaurants();
