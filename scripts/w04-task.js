/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Lalaine Macababbad',
    photo: 'images/image.jpeg',
    favoriteFoods: ['Ice Cream', 'Ramen', 'Phô', 'Rice', 'Adobo', 'Sushi'],
    hobbies: ['reading', 'mobile gaming', 'film photography'],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Philippines',
    length: '19 years'
  },
  {
    place: 'Vancouver, Canada',
    length: '3 years'
  },
  {
    place: 'Toronto, Canada',
    length: '2 years'
  },
  {
    place: 'USA',
    length: '2 years'
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.querySelector('#favorite-foods');

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });

/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');

myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedDL = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  placesLivedDL.appendChild(dt);
  placesLivedDL.appendChild(dd);
});

