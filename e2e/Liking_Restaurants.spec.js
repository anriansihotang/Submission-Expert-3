const assert = require('assert');
Feature('Liking Restaurants');

Before(({ I }) => {
	I.amOnPage('/#/Favorite');
});
  
Scenario('liking one restaurant', async ({ I }) => {
	I.amOnPage('/');

	I.waitForElement('.list-item');
	I.seeElement('.restaurant-item-button');

	const firstRestoran = locate('.restaurant-item-title');
	const firstRestoranName = await I.grabTextFrom(firstRestoran);
	I.scrollTo('.list-item');
	I.wait(1);
	I.click(locate('.restaurant-item-button').first());

	I.waitForElement('#likeButton');
	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/favorite');
	I.seeElement('.list-item');
  
	const likedRestoranName = await I.grabTextFrom('.restaurant-item-title');
  
	assert.strictEqual(firstRestoranName, likedRestoranName);
});

Scenario('unliking one restaurant', async ({ I }) => {
	I.amOnPage('/');

	I.waitForElement('.list-item');
	I.seeElement('.restaurant-item-button');

	const firstRestoran = locate('.restaurant-item-title');
	const firstRestoranName = await I.grabTextFrom(firstRestoran);
	I.scrollTo('.list-item');
	I.wait(1);
	I.click(locate('.restaurant-item-button').first());

	I.waitForElement('#likeButton');
	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/favorite');
	I.seeElement('.list-item');
  
	const likedRestoranName = await I.grabTextFrom('.restaurant-item-title');
  
	assert.strictEqual(firstRestoranName, likedRestoranName);

	I.scrollTo('.list-item');
	I.wait(1);
  	I.click(locate('.restaurant-item-button').first());
	
	I.seeElement('#likeButton');
  	I.click('#likeButton');

  	I.amOnPage('/#/favorite');

  });