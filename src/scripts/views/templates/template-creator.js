import CONFIG from '../../globals/config';

function categoriesRestaurant(restaurant) {
  return restaurant.categories.map((category) => `
	<li>${category.name}</li>
	`).join('');
}

function foodsRestaurant(restaurant) {
  return restaurant.menus.foods.map((food) => `
	<li>${food.name}</li>
	`).join('');
}

function drinksRestaurant(restaurant) {
  return restaurant.menus.drinks.map((drink) => `
	<li>${drink.name}</li>
	`).join('');
}

function customerReviews(restaurant) {
  return restaurant.customerReviews.map((reviews) => `
	<li class="review">
	  <div class="name_review">${reviews.name}</div>
	  <div class="description_review">" ${reviews.review} "</div>
	  <div class="date_review">${reviews.date}</div>
	</li>
	`).join('');
}
const createRestaurantItemTemplate = (restaurant) => `
	<div class="list-item">
		<img data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload list-item-thumb">
		<div class="list-item-content">
			<p class="list-item_location">Lokasi : ${restaurant.city}</p>
			<p class="list-item_rating">⭐️ <span class="list-item_rating_value"> ${restaurant.rating}</span></p>
			<h1 class="restaurant-item-title">${restaurant.name}</h1>
			<div class="list-item_desc">$${restaurant.description}</div>
			<button class="restaurant-item-button" aria-label="${restaurant.name}" 
			onClick="window.location.href='${`/#/detail/${restaurant.id}`}'"><p>Check Detail</p</button>
		</div>
	</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
    <div class="restaurant_item_detail">
        <h1 class="restaurant-item-title_detail">${restaurant.name}</h1>
        <img class="restaurant-item-thumbnail-detail" src="${CONFIG.BASE_IMAGE_URL_MED + restaurant.pictureId}" alt="${restaurant.name}"/>
    </div>
    <div class="restaurant-info">
        <h3 class="restaurant_name">Restaurant Name : ${restaurant.name}</h3>
        <h3 class="restaurant_city">Address : ${restaurant.address}, ${restaurant.city}</h3>
        <h3 class="restaurant_rating">Rating : ⭐️ ${restaurant.rating}</h3>
        <h3 class"title_description">Description</h2>
        <p class="restaurant_item_description_detail">${restaurant.description}</p>
    </div>
    <div class="restaurant_menu">
        <h2 class="restaurant_label">Categories</h2>
        <ul class="chips"> ${categoriesRestaurant(restaurant)}</ul>
        <h2 class="restaurant-label">Foods Menu</h2>
        <ul class="chips"> ${foodsRestaurant(restaurant)}</ul>
        <h2 class="restaurant-label">Drinks Menu</h2>
        <ul class="chips"> ${drinksRestaurant(restaurant)}</ul>
    </div>
    <div class="restaurant_review">
        <h2 class="restaurant_label">Customer Reviews</h2>
        <ul class="review_boxs"> ${customerReviews(restaurant)}</ul>
    </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
