import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
	  return `
		<h2 class="detailtitle">Detail Page</h2>
		<div id="detailRestaurant" class="restaurantDetail">
		</div>
		<div id="likeButtonContainer"></div>
	  `;
  },

  async afterRender() {
	  // Fungsi ini akan dipanggil setelah render()
	  const url = UrlParser.parseActiveUrlWithoutCombiner();
	  const restaurant = await RestaurantSource.detailRestaurant(url.id);
	  const restaurantContainer = document.querySelector('#detailRestaurant');
	  restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

	  LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
	  favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
		  id: restaurant.id,
		  name: restaurant.name,
		  pictureId: restaurant.pictureId,
		  description: restaurant.description,
		  city: restaurant.city,
		  rating: restaurant.rating,
      },
	  });
  },
};

export default Detail;
