console.log('***** Music Collection *****');

let collection = [];

function addToCollection (title, artist, yearPublished){
  console.log('in addToCollection ' + title, artist, yearPublished);
  let x = title;
  let y = artist;
  let z = yearPublished;
collection.push({title: x, artist: y, yearPublished: z});
return collection[collection.length - 1];
}


addToCollection('Selected Public Works Vol. 5', 'Lightbath', 2020);
addToCollection('Gunfighter Ballads and Trail Songs', 'Marty Robbins', 1959);
addToCollection('Selected Public Works Vol. 4', 'Lightbath', 2019);
addToCollection('Toy Beats', 'Splitta', 2020);
addToCollection('Nice Dog', 'Jon Corbett', 2019);
addToCollection('Dust Bowl Ballads', 'Woody Guthrie', 1940);
addToCollection('déchets inutiles', 'Watson', 2020);

console.log(collection);
