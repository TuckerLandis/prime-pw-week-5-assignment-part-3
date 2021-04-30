console.log('***** Music Collection *****');

// declaring collection as empty array
let collection = [];

// function to add album object to collection
function addToCollection (title, artist, yearPublished, tracks){
  console.log( 'Adding to collection...' + title, artist, yearPublished, tracks);
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks});
  return collection[collection.length - 1];
} // end addToCollection

// adding albums
console.log(addToCollection('Selected Public Works Vol. 6', 'Lightbath', 2020, [{name: 'song1', duration: '3:59'}, {name: 'song2', duration: '4:00'}]));
console.log(addToCollection('Selected Public Works Vol. 5', 'Lightbath', 2020, [{name: 'song3', duration: '3:26'}, {name: 'song4', duration: '4:30'}]));
console.log(addToCollection('Gunfighter Ballads and Trail Songs', 'Marty Robbins', 1959, [{name: 'song5', duration: '3:14'}, {name: 'song6', duration: '4:10'}]));
console.log(addToCollection('Selected Public Works Vol. 4', 'Lightbath', 2019, [{name: 'song7', duration: '3:14'}, {name: 'song8', duration: '1:56'}]));
console.log(addToCollection('Toy Beats', 'Splitta', 2020, [{name: 'song9', duration: '3:45'}, {name: 'song10', duration: '4:24'}]));
console.log(addToCollection('déchets inutiles', 'Watson', 2020, [{name: 'song15', duration: '3:26'}, {name: 'song16', duration: '4:30'}]));

// logging collection
console.log('My album collection contains...', collection);

// function to show collection using object deconstruction and forEach, failed
/*
function showCollection(array){
  array.forEach(element => {
      let {title: showTitle, artist: showArtist, yearPublished: showYearPublished} = array;
      console.log(showTitle + ' by ' + showArtist + ' published in: ' + showYearPublished);
  }); // end forEach
}*/

// succesful function to show collection and log amount of albums
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
// calling showCollection to test

function findByArtist(artist) {
  console.log('Finding:', artist);
  let findResults = [];
  collection.forEach(album => {
    if (album.artist === artist) {
      findResults.push(album);
    } // end if
  }); // end forEach
  console.log('Found ' + findResults.length + ' album(s) by', artist);
  return findResults;
} // end findByArtist

// testing findByArtist
console.log('--expect 3--', findByArtist('Lightbath'));
console.log('--expect 1--', findByArtist('Splitta'));
console.log('--expect 0--', findByArtist('Patsy Cline'));

// function to search via object values
function search(searched) {
  console.log('Searching...', searched);
  // searchResults is an empty array
  let searchResults = [];
  // foreach loop to compare searched key values to collection key values
  collection.forEach((album) => {
    let match;
    for (let key of Object.keys(searched)) {
      match = album[key] === searched[key]; // "let match be true if album key value === searched key value"
      if (!match) {
        break; // breaks out to line 88 because nothing matches
      } // end if
    } // end for of loop
    if (match) {
      searchResults.push(album);
    } // end if
  }); // end forEach
if (!searched) {
  console.log('Your search had no input', collection);
  return collection;
} else {
  console.log('Found ', searchResults.length, ' album(s)');
  return searchResults;
  } // end else
} // end function

console.log(search(''));
console.log(search({artist: 'Splitta'})); // 1 match
console.log(search({artist: 'Lightbath'})); // 3 matches
console.log(search({artist: 'Lightbath', yearPublished: 2020})); // 2 matches
console.log(search({artist: 'Surf Curse'})); // no matches
console.log(search({title:'Gunfighter Ballads and Trail Songs', artist: 'Marty Robbins', yearPublished: 1959, })); // 1 match
