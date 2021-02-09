const searchSong = async() =>{
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/:${searchText}`
    // console.log(url);
// load data 

   const result = await fetch(url);
    const data = await result.json(); 
    displaySongs(data.data);
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
         <p class="author lead"><span>Album by ${song.artist.name}</span></p>
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

const getLyric = async (artist, title)=>{

    const url = `https://api.lyrics.ovh/v1/:${artist}/:${title}`
    const res = await fetch(url);  //await = wait until res result will come. 
    const jsonData = await res.json();
    displayLyrics(jsonData.lyrics);
}

const displayLyrics = lyricsParameter =>{
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerText = lyricsParameter;
}