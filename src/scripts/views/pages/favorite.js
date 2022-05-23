import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
	<section class="content">
		<div class="latest">
			<h1 class="titlelist">Daftar Favorite Restaurant</h1>
			<div class="notFound">

			</div>
			<div class="list" id="restaurant"></div>
		</div>
	</section>
	`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant');
    // restaurants.forEach((restaurant) => {
    //   restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });
    if (restaurants.length === 0) {
      document.querySelector('.notFound').innerHTML = `
		<h2>Maaf belum ada restaurant yang menjadi favorit Anda</h2>
		`;
	  } else {
      restaurants.forEach((data) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(data);
      });
	  }
  },
};

export default Favorite;
