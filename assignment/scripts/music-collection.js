console.log('***** Music Collection *****');

let collection = [];

function addToCollection (title, artist, yearPublished, tracks){
  console.log('in addToCollection ' + title, artist, yearPublished, tracks);
  collection.push({title: title, artist: artist, yearPublished: yearPublished, tracks: tracks});
  return collection[collection.length - 1];
}

console.log(addToCollection('Selected Public Works Vol. 6', 'Lightbath', 2020, [{name: 'song1', duration: '3:59'}, {name: 'song2', duration: '4:00'}]));
console.log(addToCollection('Selected Public Works Vol. 5', 'Lightbath', 2020, [{name: 'song3', duration: '3:26'}, {name: 'song4', duration: '4:30'}]));
console.log(addToCollection('Gunfighter Ballads and Trail Songs', 'Marty Robbins', 1959, [{name: 'song5', duration: '3:14'}, {name: 'song6', duration: '4:10'}]));
console.log(addToCollection('Selected Public Works Vol. 4', 'Lightbath', 2019, [{name: 'song7', duration: '3:14'}, {name: 'song8', duration: '1:56'}]));
console.log(addToCollection('Toy Beats', 'Splitta', 2020, [{name: 'song9', duration: '3:45'}, {name: 'song10', duration: '4:24'}]));
console.log(addToCollection('déchets inutiles', 'Watson', 2020, [{name: 'song15', duration: '3:26'}, {name: 'song16', duration: '4:30'}]));
console.log(collection);

function showCollection(array) {
  let a = array;
  console.log('i have ' + array.length + ' records: ');
for (i = 0; i < array.length-1; i++) {
  console.log(a[i].title + ' by ' + a[i].artist +', published in ' + a[i].yearPublished);
  let tracklist = a[i].tracks;
for (j = 0; j < tracklist.length; j++) {
    console.log(tracklist[j].name + ': ' + tracklist[j].duration);
  } // end inner loop
} // end outer loop
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
console.log('expect album object', findByArtist('Splitta'));
console.log('expect album object', findByArtist('Lightbath'));
console.log('expect album object', findByArtist('Harrison BDP'));

/* This doesn't answer the question! gonna try again using object input 4/29 thanks to patrick showing us methods and etc
function search( artist, year, trackName ){
  console.log('Searching...', artist, year, trackName);
let results = [];
for (i = 0; i < collection.length; i++) {
for (j = 0; j < collection[i].tracks.length; j++) {
if (artist === collection[i].artist && year === collection[i].yearPublished && trackName === collection[i].tracks[j].name) {
    results.push(collection[i]);
  } // end if
  else if (artist == ' ' || year == ' ' || trackName == ' ') {
    console.log('Missing search input, here is the collection');
    return collection;
  } // end else if
} // end loop
} // end loop
return results;
} // end function*/

function search(){
  //new function using object input and array methods
}


//testing search
console.log('expect 1 album object', search('Splitta', 2020, 'song9')); // 1 matching object
console.log('expect 2 album objects', search('Lightbath', 2020)); // 2 matching objects
console.log('expect missing input', search( ' ', 2020)); // empty search value
console.log('expect empty array', search('Cat Soup', 2020)); // not found
//testing search after adding trackName

console.log(search('Lightbath', 2020, 'song1'), 'expect album return');
console.log(search('Marty Robbins', 1959, 'song6'), 'expect album return');
