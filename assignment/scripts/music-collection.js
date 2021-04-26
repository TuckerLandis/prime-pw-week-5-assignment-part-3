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


console.log(addToCollection('Selected Public Works Vol. 5', 'Lightbath', 2020));
console.log(addToCollection('Gunfighter Ballads and Trail Songs', 'Marty Robbins', 1959));
console.log(addToCollection('Selected Public Works Vol. 4', 'Lightbath', 2019));
console.log(addToCollection('Toy Beats', 'Splitta', 2020));
console.log(addToCollection('Nice Dog', 'Jon Corbett', 2019));
console.log(addToCollection('Dust Bowl Ballads', 'Woody Guthrie', 1940));
console.log(addToCollection('déchets inutiles', 'Watson', 2020));

console.log(collection);

function showCollection(array) {
  console.log('i have ' + array.length + ' records: ');
  for (let item of array) {
    console.log( item.title + ' by ' + item.artist + ', published in ' + item.yearPublished );
  }
  return collection;
  // end looop
} // end showCollection

showCollection(collection);
