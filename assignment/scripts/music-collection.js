console.log('***** Music Collection *****');

let collection = [];
let tracks = [];

function addToCollection (title, artist, yearPublished, tracks){
  console.log('in addToCollection ' + title, artist, yearPublished, tracks);
  collection.push({title: title, artist: artist, yearPublished: yearPublished, tracks: tracks});
  return collection[collection.length - 1];
}

console.log(addToCollection('Selected Public Works Vol. 6', 'Lightbath', 2020, [[{name: 'song1', duration: '3:59'}], [{name: 'song2', duration: '4:00'}]]));
console.log(addToCollection('Selected Public Works Vol. 5', 'Lightbath', 2020, [[{name: 'song3', duration: '3:26'}], [{name: 'song4', duration: '4:30'}]]));
console.log(addToCollection('Gunfighter Ballads and Trail Songs', 'Marty Robbins', 1959, [[{name: 'song5', duration: '3:14'}], [{name: 'song6', duration: '4:10'}]]));
console.log(addToCollection('Selected Public Works Vol. 4', 'Lightbath', 2019, [[{name: 'song7', duration: '3:14'}], [{name: 'song8', duration: '1:56'}]]));
console.log(addToCollection('Toy Beats', 'Splitta', 2020, [[{name: 'song9', duration: '3:45'}], [{name: 'song10', duration: '4:24'}]]));
console.log(addToCollection('Nice Dog', 'Jon Corbett', 2019, [[{name: 'song11', duration: '3:26'}], [{name: 'song12', duration: '4:30'}]]));
console.log(addToCollection('Dust Bowl Ballads', 'Woody Guthrie', 1940, [[{name: 'song13', duration: '3:26'}], [{name: 'song14', duration: '4:30'}]]));
console.log(addToCollection('déchets inutiles', 'Watson', 2020, [[{name: 'song15', duration: '3:26'}], [{name: 'song16', duration: '4:30'}]]));
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

//testing findByArtist
console.log(findByArtist('Splitta'));
console.log(findByArtist('Lightbath'));
console.log(findByArtist('Harrison BDP'));

function search( artist, year, trackName ){
  console.log('Searching...', artist, year, trackName);
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

//testing search
console.log(search('Splitta', 2020)); // 1 matching object
console.log(search('Lightbath', 2020)); // 2 matching objects
console.log(search( ' ', 2020)); // empty search value
console.log(search('Cat Soup', 2020)); // not found

console.log(collection);
