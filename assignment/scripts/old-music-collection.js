console.log('***** Music Collection *****');

let collection = [];

function addToCollection (title, artist, yearPublished, tracks){
  console.log('in addToCollection ' + title, artist, yearPublished, tracks);
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks});
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
console.log('-expect album object-', findByArtist('Splitta'));
console.log('-expect album object-', findByArtist('Lightbath'));
console.log('-expect empty array-', findByArtist('Harrison BDP'));

/* This doesn't answer the question! gonna try again using object input 4/29 thanks to james showing us methods and etc

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


function search(searchedObj){
  console.log('Searching...', searchedObj);
  const results = [];

  collection.forEach((obj) => {
    let matched;
    let trx = collection.tracks;
    for (let key of Object.keys(searchedObj)) {
      matched = obj[key] === searchedObj[key];
      if (!matched) {
        break;
      } // end if
    } // end for loop


     // end track search
    if (matched) {
      results.push(obj);
    } // end if
  }); // end callback

if (results.length === 0) {
  console.log('Your search returned no results, here is the collection');
  return collection;
} // end if
  else {
  console.log('Your search returned the following album');
  return results;
} // end else
} // end function

//
//testing search
console.log('-expect album result-', search({artist: 'Splitta', yearPublished: 2020,}));
console.log('-expect empty array result-', search({artist: 'Vicente Fernandez'}));
console.log('-expect 3 album results-', search({artist: 'Lightbath'}));
console.log('-expect 1 album result-', search(({name: 'song1' }))); // i knew this wouldn't work, i'm assuming i have to put a nested for loop in my search function i honestly don't understand where or how right now, gonna circle back
