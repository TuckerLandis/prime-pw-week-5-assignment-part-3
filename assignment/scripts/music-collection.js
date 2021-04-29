console.log('***** Music Collection *****');

let collection = [];

function addToCollection (title, artist, yearPublished){
  console.log('in addToCollection ' + title, artist, yearPublished);
collection.push({title: title, artist: artist, yearPublished: yearPublished});
return collection[collection.length - 1];
}

console.log(addToCollection('Selected Public Works Vol. 6', 'Lightbath', 2020, 'song1', '4:00'));
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
  // end loop
} // end showCollection

showCollection(collection);

function findByArtist(artist){
  console.log('Finding Artist: ' + artist);
  let i = 0;
  let foundArr = [];
    while (i < (collection.length - 1)) {
    let p = collection[i];
    let foundArtist = collection[i].artist;
    if (foundArtist === artist) {
      foundArr.push(p);
      i++;
    } // end if
    else {
  i++;
    } // end else
  } // end loop
  return foundArr;
} // end findByArtist


console.log(findByArtist('Splitta'));
console.log(findByArtist('Lightbath'));
console.log(findByArtist('Harrison BDP'));

function search( artist, year ){
  console.log('Searching...', artist, year);
let results = [];
for (let i of collection) {
  if (artist === i.artist && year ===i.yearPublished) {
    results.push(i);
  } // end if
  else if (artist == ' ' || year == ' ') {
    console.log('Missing search input, here is the collection');
    return collection;
  }
} // end loop
return results;
} // end function

console.log(search('Splitta', 2020)); // 1 matching object
console.log(search('Lightbath', 2020)); // 2 matching objects
console.log(search( ' ', 2020)); // empty search value
console.log(search('Cat Soup', 2020)); // not found
