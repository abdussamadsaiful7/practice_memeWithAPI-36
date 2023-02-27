//console.log('js ok');

const loadMeme = () =>{
    const URL = "https://meme-api.com/gimme/20";
    fetch(URL)
    .then((res) => res.json())
    .then(data =>  displayMeme(data.memes.slice(0, 18)))
    .catch((error) => {
        console.log(error);
    });
};

const displayMeme = (memes) =>{
   memes.forEach((meme) =>{
   // console.log(meme.title);
    const container = document.getElementById('meme-info');
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card w-full glass shadow-lg">
    <figure><img class="w-full h-64" src="${meme.url}" alt="car!"/></figure>
    <div class="card-body">
      <h2 class="card-title">Meme</h2>
      <p>${meme.title}</p>
    </div>
  </div>
   

    `;
    container.appendChild(div);
   })
    
}

loadMeme();