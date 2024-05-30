function api(){
    fetch('https://rickandmortyapi.com/api/character')//  
.then(response => response.json())
.then(data =>{
    const fisrtTenCharacter = data.results.slice(0,10);

    const characterCardHTML = fisrtTenCharacter.map(character =>`<div class="card">
    <img class="img" src="${character.image}">
    <div class="info">
    <h3>${character.name}</h3>
    </div>
    </div>
    
    
    
    
    `).join('');

    document.getElementById('character-cards').innerHTML = characterCardHTML;



})
.catch(error =>console.log('error', error));

}



