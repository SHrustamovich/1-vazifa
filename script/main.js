var savatcha = document.getElementById('savatcha')
var ROW = document.getElementById('listPokimon')
var count = 0;

for(var i=0; i<pokemons.length;i++) {
    var Col = document.createElement('LI');
    Col.classList.add('col-3', 'mb-4');
    ROW.appendChild(Col);

    var Card = document.createElement('DIV');
    Card.classList.add('card');
    Col.appendChild(Card);

    var CardDIV= document.createElement('DIV');
    CardDIV.classList.add('d-flex','justify-content-center',"card-img-top");
    Card.appendChild(CardDIV);

    var img = document.createElement('img');
    img.setAttribute('src', pokemons[i].img)
    img.setAttribute('height', '100')
    img.setAttribute('width', '100')
    CardDIV.appendChild(img)

    Card.addEventListener('mousedown', function(e){
        img.setAttribute('pokemon__img.mx-auto.d-block')
        // img.classList.add('img-hover');

    })
    
    // img.classList.add('img-hover')
    // var Hover = document.createElement('hover')
    // Hover.classList.add('img-hover')
    // img.appendChild(Hover);

    var cardBody = document.createElement('DIV');
    cardBody.classList.add('card-body');
    Card.appendChild(cardBody)

    var TypeP = document.createElement('p');
    TypeP.classList.add('card-text', 'text-center', 'text-secondary');
    TypeP.textContent = "TYPE:" + pokemons[i].type;
    cardBody.appendChild(TypeP);

    var NameP = document.createElement('h3');
    NameP.classList.add('card-title', 'text-center', 'text-bold');
    NameP.textContent = 'Name: ' + pokemons[i].name;
    cardBody.appendChild(NameP);
}
