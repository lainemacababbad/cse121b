/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Lalaine Macababbad';
let currentYear = 2023;
let profilePicture = 'images/image.jpeg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['Ice Cream', 'Ramen', 'Phô', 'Rice', 'Adobo'];
const anotherFavoriteFood = 'Sushi';
favoriteFoods.push(anotherFavoriteFood);
foodElement.textContent = favoriteFoods.join(', ');
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Removes the first element in the favorite food array
favoriteFoods.shift(); 
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

// Removes the last element in the favorite food array
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;