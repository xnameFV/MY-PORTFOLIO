styleWhenScrollTo('header', 10);

// each 10s add a new quote to #quote element 
setInterval(function renderQuote() {
    let {text, from} = getRandomQuote();
    document.querySelector('.inspire .inspire__text').innerText = text;
    document.querySelector('.inspire .inspire__from').innerText = from;
}, 10000);

// some code for bookmark
addBookmarks();


// masory grid setup code 
// errorr???
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  horizontalOrder: false
});
