const searchSong = () =>{
    const searchingTextSong = document.getElementById('search-field').value;
    // console.log(searchingTextSong);
    const url = `https://api.lyrics.ovh/suggest/:${searchingTextSong}`
    // console.log(url);
// load data 

    fetch(url)
    .then(result => result.json())
    // .then(data => console.log(data))
    .then(jsonData => displaySongs(jsonData.data))
    .catch(error => displayError('Something went wrong!! please try again later!'));
}

const displaySongs = songs => {
    //console.log(songs);
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = '';  // IT REMOVE PREVIOUS SEARCHING RESULT 

    songs.forEach(song => //console.log(song.title)
{      console.log(song);

        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
    //    songDiv.innerText = song.title; 
         songDiv.innerHTML = ` 
      <div class="col-md-9">
         <h3 class="lyrics-name">${song.title}</h3>
         <h6 class="lyrics-img">${song.artist.link}</h6>
         <p>Title: ${song.album.title}</p>
         <p class="author-lead"><span>Album by ${song.artist.name}</span></p>
         <audio controls>
         <source src="${song.preview}" type="audio/ogg">
       </audio>
      </div>
      <div class="col-md-3 text-md-right text-center">
           <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
       </div>
         `;
        songContainer.appendChild(songDiv);
    })  
}

const getLyric = (artist, title)=>{
    // console.log(artist, title);
    const url = `https://api.lyrics.ovh/v1/:${artist}/:${title}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    // .then(jsonData => console.log(jsonData.lyrics))
    .then(jsonData => displayLyrics(jsonData.lyrics))
}

const displayLyrics = lyricsParameter =>{
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerText = lyricsParameter;
}





const displayError = yourErrorParameter => {
const errorTag = document.getElementById('error-message');
errorTag.innerText = yourErrorParameter;

}