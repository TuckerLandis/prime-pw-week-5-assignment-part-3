console.log('***** Music Collection *****');

let collection = [];

function addToCollection (title, artist, yearPublished){
  console.log('in addToCollection ' + title, artist, yearPublished);
  let x = title;
  let y = artist;
  let z = yearPublished;
collection.push({title: x, artist: y, yearPublished: z});
}


addToCollection('Selected Public Works Vol. 5', 'Lightbath', 2020);
addToCollection('Gunfighter Ballads and Trail Songs', 'Marty Robbins', 1959);

console.log(collection);
