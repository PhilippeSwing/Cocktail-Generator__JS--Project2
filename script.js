// LESS DRY METHOD
// =======================
// const cocktailCreations = {
// 	vodka: {
// 		curaçao: [
// 			{
// 				liquid: 'orange',
// 				cocktail: 'Soylent Green',
// 				cocktailImage: 'https://mixthatdrink.com/wp-content/uploads/2014/06/soylent-green-cocktail.jpg',
// 				instructions: ['1 1/2 oz of Vodka', '1 oz of Blue Curacao', '4 oz of Orange Juice', 'Pour ingredients into collins glass with ice.']
// 			},
			
// 			{
// 				liquid: 'pineapple',
// 				cocktail: 'Cobra',
// 				cocktailImage: 'https://i.ytimg.com/vi/deELg59MM_g/maxresdefault.jpg',
// 				instructions: ['1 oz of Vodka', '1 oz of Blue Curacao', '1 oz of Coconut Rum', '1 oz of Pineapple Juice', 'Mix all in a shaker pour in tequila glasses.']
// 			},

// 			{
// 				liquid: 'cranberry',
// 				cocktail: 'Grand Cosmopolitan',
// 				cocktailImage: 'http://pandhsodaco.com/wp-content/uploads/2018/01/how-to-drink-grand-marnier-Grand-Cosmopolitan.jpg',
// 				instructions: ['4 oz of Vodka', '2 oz of Cointreau (substitute with curacao)', '1 cup of Cranberry Juice', 'White cranberry juice recommended. Add to a cocktail shaker with ice. Shake to combine and strain into large martini glass']
// 			}
// 		],

// 		amaretto: [
// 			{
// 				liquid: 'orange',
// 				cocktail: 'Bocce Ball',
// 				cocktailImage: 'http://cdn2.foodviva.com/static-content/food-images/vodka-recipes/brass-monkey-drink/brass-monkey-drink.jpg', 
// 				instructions: ['1 1/2 oz vodka', '1/2 oz amaretto', '8​ oz ​​orange juice (more or less as needed for glass)', 'Pour the vodka, amaretto, and orange juice into a collins glass filled with ice, garnish with an orange slice.']
// 			},

// 			{
// 				liquid: 'pineapple',
// 				cocktail: 'Cuban Breeze',
// 				cocktailImage: 'https://thegardeningcook.com/wp-content/uploads/2013/05/1cubandream.jpg',
// 				instructions: ['1 oz vodka', '1 oz Amaretto', '3 oz Pineapple Juice', 'Put the ice in a glass and pour the vodka an amaretto over. Top with the pineapple juice']
// 			},

// 			{
// 				liquid: 'cranberry',
// 				cocktail: 'Amaretto Cranberry Kiss',
// 				cocktailImage: 'https://magicskillet.com/wp-content/uploads/2012/12/cranberry-kiss-cocktail.jpg', 
// 				instructions: ['1 cup vodka', '1⁄2 cup Amaretto', '2 cups cranberry juice cocktail', '3 tablespoons fresh orange juice', 'Mix cranberry juice, vodka, amaretto, and orange juice in pitcher. Cover and chill until ready to serve.']
// 			}
// 		]
// 	},

// 	rum: {
// 		curaçao: [
// 			{
// 				liquid: 'orange',
// 				cocktail: 'Blue Devil',
// 				cocktailImage: 'https://flouronmyface.com/wp-content/uploads/2016/03/Blue-Devil-Cocktail-Recipe-flouronmyface.jpg',
// 				instructions: ['1 oz light Bacardi Rum', '1/2 oz blue Curacao', '1 oz orange juice', 'lime juice', 'Rim a highball glass with the lime juice and confectioners sugar. In a shaker filled with ice add the rum, curacao, and orange juice. Shake until well chilled, about 1 minute. Pour into a highball glass filled with ice. Garnish with a slice of lime.']
// 			},
			
// 			{
// 				liquid: 'pineapple',
// 				cocktail: 'Carolina Blue Wale',
// 				cocktailImage: 'http://www.thedrinkkings.com/wp-content/uploads/2014/07/Blue-Whale-9-630-630x888.jpg',
// 				instructions: ['4 oz of rum (substitute with white rum)', '2 oz of Blue Curacao', '4 oz of Pineapple Juice', 'Combine all ingredients in a pint glass. Stir to combine. Add ice and stir once more to chill.']
// 			},

// 			{
// 				liquid: 'cranberry',
// 				cocktail: 'Cuban Ghost',
// 				cocktailImage: 'https://mixthatdrink.com/wp-content/uploads/2011/03/undertow-cocktail-3-600x600.jpg',
// 				instructions: ['4 oz of Rum', '2 oz of Cointreau (substitute with curacao)', '1 cup of Cranberry Juice', 'White cranberry juice recommended. Add to a cocktail shaker with ice. Shake to combine and strain into large martini glass']
// 			}
// 		],

// 		amaretto: [
// 			{
// 				liquid: 'orange',
// 				cocktail: 'A Day At The Beach',
// 				cocktailImage: 'http://www.robdrinki.pl/wordpress/wp-content/uploads/2012/08/a-day-at-the-beach2.jpg',
// 				instructions: ['1 part Malibu Original', '1 part Amaretto', '1 part Orange Juice', '1 splash Grenadine', 'Fill a shaker with ice cubes. Add Malibu, amaretto, orange juice and grenadine. Shake and strain into a chilled highball glass filled with ice cubes.']
// 			},

// 			{
// 				liquid: 'pineapple',
// 				cocktail: 'Damn! Bowl',
// 				cocktailImage: 'https://www.abc.virginia.gov/library/recipe-images/statenislandferry.jpg?h=400&w=311&la=en&hash=C6A64BF43407AA3716156C3964E0F901F21179BB',
// 				instructions: ['1 oz rum', '1/2 oz amaretto', '4 oz of Pineapple Juice', 'Combine ingredients in an ice-filled cocktail shaker. Shake vigorously and pour into a highball glass; garnish with pineapple wedge and cherries, if you like.']
// 			},

// 			{
// 				liquid: 'cranberry',
// 				cocktail: 'Caribe Cosmopolitan',
// 				cocktailImage: 'https://s3.amazonaws.com/reviews-photos-drinkedin.drinkedin.net/original/58/ef/52/caribe-cosmopolitan-recipe-40-1360438187.jpg',
// 				instructions: ['1 1/2 oz of rum (substitute with white rum)', '1 oz of Triple Sec', '1 oz of Cranberry Juice', '1/2 oz of Lime Juice', 'Shake all with ice and strain into a chilled martini glass. Garnish with a flamed orange peel.']
// 			}
// 		]
// 	}
// };

// DRYER METHOD
// ========================
// ==Cocktail Array==
const cocktailCreations = [
	{
		spirit: 'vodka',
		liqueur: 'curaçao',
		liquid: 'orange',
		cocktail: 'Soylent Green',
		cocktailImage: 'https://mixthatdrink.com/wp-content/uploads/2014/06/soylent-green-cocktail.jpg',
		instructions: ['1 1/2 oz of Vodka', '1 oz of Blue Curacao', '4 oz of Orange Juice', 'Pour ingredients into collins glass with ice.']
	},
	
	{
		spirit: 'vodka',
		liqueur: 'curaçao',
		liquid: 'pineapple',
		cocktail: 'Cobra',
		cocktailImage: 'https://i.ytimg.com/vi/deELg59MM_g/maxresdefault.jpg',
		instructions: ['1 oz of Vodka', '1 oz of Blue Curacao', '1 oz of Coconut Rum', '1 oz of Pineapple Juice', 'Mix all in a shaker pour in tequila glasses.']
	},

	{
		spirit: 'vodka',
		liqueur: 'curaçao',
		liquid: 'cranberry',
		cocktail: 'Grand Cosmopolitan',
		cocktailImage: 'http://pandhsodaco.com/wp-content/uploads/2018/01/how-to-drink-grand-marnier-Grand-Cosmopolitan.jpg',
		instructions: ['4 oz of Vodka', '2 oz of Cointreau (substitute with curacao)', '1 cup of Cranberry Juice', 'White cranberry juice recommended. Add to a cocktail shaker with ice. Shake to combine and strain into large martini glass']
	},

	{
		spirit: 'vodka',
		liqueur: 'amaretto',
		liquid: 'orange',
		cocktail: 'Bocce Ball',
		cocktailImage: 'http://cdn2.foodviva.com/static-content/food-images/vodka-recipes/brass-monkey-drink/brass-monkey-drink.jpg', 
		instructions: ['1 1/2 oz vodka', '1/2 oz amaretto', '8​ oz ​​orange juice (more or less as needed for glass)', 'Pour the vodka, amaretto, and orange juice into a collins glass filled with ice, garnish with an orange slice.']
	},

	{
		spirit: 'vodka',
		liqueur: 'amaretto',
		liquid: 'pineapple',
		cocktail: 'Cuban Breeze',
		cocktailImage: 'https://thegardeningcook.com/wp-content/uploads/2013/05/1cubandream.jpg',
		instructions: ['1 oz vodka', '1 oz Amaretto', '3 oz Pineapple Juice', 'Put the ice in a glass and pour the vodka an amaretto over. Top with the pineapple juice']
	},

	{
		spirit: 'vodka',
		liqueur: 'amaretto',
		liquid: 'cranberry',
		cocktail: 'Amaretto Cranberry Kiss',
		cocktailImage: 'https://magicskillet.com/wp-content/uploads/2012/12/cranberry-kiss-cocktail.jpg', 
		instructions: ['1 cup vodka', '1⁄2 cup Amaretto', '2 cups cranberry juice cocktail', '3 tablespoons fresh orange juice', 'Mix cranberry juice, vodka, amaretto, and orange juice in pitcher. Cover and chill until ready to serve.']
	},

	{
		spirit: 'rum',
		liqueur: 'curaçao',
		liquid: 'orange',
		cocktail: 'Blue Devil',
		cocktailImage: 'https://flouronmyface.com/wp-content/uploads/2016/03/Blue-Devil-Cocktail-Recipe-flouronmyface.jpg',
		instructions: ['1 oz light Bacardi Rum', '1/2 oz blue Curacao', '1 oz orange juice', 'lime juice', 'Rim a highball glass with the lime juice and confectioners sugar. In a shaker filled with ice add the rum, curacao, and orange juice. Shake until well chilled, about 1 minute. Pour into a highball glass filled with ice. Garnish with a slice of lime.']
	},
	
	{
		spirit: 'rum',
		liqueur: 'curaçao',
		liquid: 'pineapple',
		cocktail: 'Carolina Blue Wale',
		cocktailImage: 'http://www.thedrinkkings.com/wp-content/uploads/2014/07/Blue-Whale-9-630-630x888.jpg',
		instructions: ['4 oz of rum (substitute with white rum)', '2 oz of Blue Curacao', '4 oz of Pineapple Juice', 'Combine all ingredients in a pint glass. Stir to combine. Add ice and stir once more to chill.']
	},

	{
		spirit: 'rum',
		liqueur: 'curaçao',
		liquid: 'cranberry',
		cocktail: 'Cuban Ghost',
		cocktailImage: 'https://mixthatdrink.com/wp-content/uploads/2011/03/undertow-cocktail-3-600x600.jpg',
		instructions: ['4 oz of Rum', '2 oz of Cointreau (substitute with curacao)', '1 cup of Cranberry Juice', 'White cranberry juice recommended. Add to a cocktail shaker with ice. Shake to combine and strain into large martini glass']
	},

	{
		spirit: 'rum',
		liqueur: 'amaretto',
		liquid: 'orange',
		cocktail: 'A Day At The Beach',
		cocktailImage: 'http://www.robdrinki.pl/wordpress/wp-content/uploads/2012/08/a-day-at-the-beach2.jpg',
		instructions: ['1 part Malibu Original', '1 part Amaretto', '1 part Orange Juice', '1 splash Grenadine', 'Fill a shaker with ice cubes. Add Malibu, amaretto, orange juice and grenadine. Shake and strain into a chilled highball glass filled with ice cubes.']
	},

	{
		spirit: 'rum',
		liqueur: 'amaretto',
		liquid: 'pineapple',
		cocktail: 'Damn! Bowl',
		cocktailImage: 'https://www.abc.virginia.gov/library/recipe-images/statenislandferry.jpg?h=400&w=311&la=en&hash=C6A64BF43407AA3716156C3964E0F901F21179BB',
		instructions: ['1 oz rum', '1/2 oz amaretto', '4 oz of Pineapple Juice', 'Combine ingredients in an ice-filled cocktail shaker. Shake vigorously and pour into a highball glass; garnish with pineapple wedge and cherries, if you like.']
	},

	{
		spirit: 'rum',
		liqueur: 'amaretto',
		liquid: 'cranberry',
		cocktail: 'Caribe Cosmopolitan',
		cocktailImage: 'https://s3.amazonaws.com/reviews-photos-drinkedin.drinkedin.net/original/58/ef/52/caribe-cosmopolitan-recipe-40-1360438187.jpg',
		instructions: ['1 1/2 oz of rum (substitute with white rum)', '1 oz of Triple Sec', '1 oz of Cranberry Juice', '1/2 oz of Lime Juice', 'Shake all with ice and strain into a chilled martini glass. Garnish with a flamed orange peel.']
	}
];
// ==Cocktail Array Ends==

// ==Form Functionlity==
$(document).ready(function() {
	$('form').on('submit', function() {
		event.preventDefault();
		$('.instructions__overlay').addClass('toggle-overay');
		const userSpirit = $('input[name=spirits]:checked').val();
		
		const userLiqueur = $('input[name=liqueur]:checked').val();
		
		const userLiquid = $('input[name=liquid]:checked').val();

		const cocktailObjectArray = cocktailCreations.filter((value) => {
			if ($('input[name=spirits]:checked').val() === value.spirit && 
				$('input[name=liqueur]:checked').val() === value.liqueur &&
				$('input[name=liquid]:checked').val() === value.liquid) {
				return value;
			}
		});

// ========================		
// LESS DRY METHOD
	// 	const spiritOption = cocktailCreations[userSpirit];
		
	// 	const spiritLiqueurOptions = spiritOption[userLiqueur];
		
	// 	const cocktailObjectArray = spiritLiqueurOptions.filter((value) => {
	// 		if (value.liquid === userLiquid) {
	// 			return value;
	// 		}
	// 	});
// LESS DRY METHOD ENDS
// ========================

		// Set Cocktail Header
		const cocktailChoice = cocktailObjectArray[0].cocktail;
		
		cocktailChoiceHeaderHTML = `<h2 class="cocktail__header">${cocktailChoice}</h2>`;
		$('.cocktail__header').replaceWith(cocktailChoiceHeaderHTML);
		// Set cocktail image
		cocktailChoiceImage = cocktailObjectArray[0].cocktailImage;
		console.log(cocktailChoiceImage);
		$('.cocktail__image').attr('src', cocktailChoiceImage);
		// Button to set and display contents of instructions overlay
		$('.button__instructions').on('click', function() {
			const instructionsArray = cocktailObjectArray[0].instructions;
			
			const instructionsListArray = instructionsArray.map((value) => {
				return `<li>${value}</li>`;
			});
			
			const instructionsHTML = instructionsListArray.reduce((accum, curr) => {
				return accum + curr;
			});
			// I could have also used .join('')
			$('.instructions__list').html(instructionsHTML);
			// Display the overlay as the last step
			$('.instructions__overlay').removeClass('toggle-overay');

			$('.close__button').on('click', function() {
				$('.instructions__overlay').addClass('toggle-overay');
			});
		});
	});
	// Button to reset the form
	$('.button__reset').on('click', function() {
		userSpirit = "";
		$('input[type=radio]').prop('checked', false);
		$('.cocktail__image').attr('src', 'https://www.barware.com.au/assets/full/LB3616.jpg');
		$('.cocktail__header').replaceWith(`<h2 class="cocktail__header">Empty Glass ☹️</h2>`);
		$('.instructions__overlay').addClass('toggle-overay');
		// Render the instructions button "inactive" until the next cocktail is generated
		$('.button__instructions').on('click', function() {
			$('.instructions__overlay').addClass('toggle-overay');
		});
	});
});
// ==Form Functionality Ends==