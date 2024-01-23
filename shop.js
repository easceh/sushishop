const sushiMenu = [
    { name: 'California Roll', image: 'california_roll.jpg', ingredients: ['Crab Meat', 'Avocado', 'Cucumber', 'Rice', 'Seaweed'] },
    { name: 'Dragon Roll', image: 'dragon_roll.jpg', ingredients: ['Shrimp Tempura', 'Avocado', 'Eel', 'Rice', 'Seaweed'] },
    { name: 'Spicy Tuna Roll', image: 'spicy_tuna_roll.jpg', ingredients: ['Spicy Tuna', 'Avocado', 'Cucumber', 'Rice', 'Seaweed'] },

];

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * sushiMenu.length);
    return sushiMenu[randomIndex];
}

function createSushiCard(recipe) {
    const sushiCard = document.createElement('div');
    sushiCard.classList.add('sushi-card');

    const sushiImage = document.createElement('img');
    sushiImage.classList.add('sushi-image');
    sushiImage.src = `images/${recipe.image}`;
    sushiImage.alt = recipe.name;

    const sushiDetails = document.createElement('div');
    sushiDetails.classList.add('sushi-details');

    const title = document.createElement('h2');
    title.textContent = recipe.name;

    const ingredients = document.createElement('p');
    ingredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order Now';

    sushiDetails.appendChild(title);
    sushiDetails.appendChild(ingredients);
    sushiDetails.appendChild(orderButton);

    sushiCard.appendChild(sushiImage);
    sushiCard.appendChild(sushiDetails);

    return sushiCard;
}

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');

    for (let i = 0; i < 6; i++) {
        const randomRecipe = getRandomRecipe();
        const sushiCard = createSushiCard(randomRecipe);
        menu.appendChild(sushiCard);
    }
});
