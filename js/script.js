/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
Below is an array of quote objects as compiled from http://mentalfloss.com/article/57501/27-responses-question-what-art 
all attempting to answer the question "What is Art?":
- All [12] quote objects have been placed into the variable "quotes", contained inside of an array.
- All quote objects contain properties for: "source", "citation", "year", and "tags."
I am attempting to get an "exceeds expectations" review on this project.
Thank you!
***/



var quotes = [
  {

    quote: "Art is Skill; its display, application, or expression.",
    source: " Oxford English Dictionary Online.",
    citation: "published again for Mental Floss 'What is Art?' in 2014.",
    year: "1300s.",
    tags: "#dictionarysays"

  },
  {

    quote: "The expression or application of creative skill and imagination, typically in a visual form such as painting, drawing, or sculpture, producing works to be appreciated primarily for their beauty or emotional power.",
    source: " Oxford English Dictionary Online.",
    citation: "published again for Mental Floss 'What is Art?' in 2014",
    year: "1600s.",
    tags: "#dictionarysays"

  },
  {

    quote: "Art is either a plagiarist or a revolutionary.",
    source: " Paul Gauguin (1848–1903), Peruvian-born French artist",
    citation: "quoted in Huneker, The Pathos of Distance",
    year: 1913,
    tags: "#imitationVScreation"

  },
  {

    quote: "Filling a space in a beautiful way. That's what art means to me.",
    source: " Georgia O'Keeffe (1887–1986), American painter",
    citation: "Art News",
    year: "December 1977",
    tags: "#beauty"

  },
  {

    quote: "We all know that Art is not truth. Art is a lie that makes us realize truth.",
    source: " Pablo Picasso (1881–1973), Spanish painter living in France",
    citation: "quoted in Dore Ashton's 'Picasso on Art'",
    year: 1972,
    tags: "#revelation"

  },
  {

    quote: "[In order to distinguish Andy Warhol’s Brillo Boxes from actual Brillo boxes, art can be defined as] embodied meaning.",
    source: " Arthur C. Danto (1924–2013), American philosopher of art",
    citation: "What Art Is",
    year: 2013,
    tags: "#imitationVScreation"

  },
  {

    quote: "What is art? Art grows out of grief and joy, but mainly grief. It is born of people’s lives.",
    source: " Edvard Munch (1863–1944), Norwegian artist",
    citation: "'Edvard Munch: The Man and His Art' by Ragna Stang",
    year: 1977,
    tags: "#self-expression"

  },
  {

    quote: "Art is a habit-forming drug.",
    source: " Marcel Duchamp (1887–1968), French-born American artist",
    citation: "quoted in Richter, 'Dada: art and anti-art'",
    year: 1964,
    tags: "#addiction"

  },
  {

    quote: "Art does not reproduce the visible; rather, it makes visible.",
    source: "Paul Klee (1879–1940), Swiss painter",
    citation: "The Inward Vision",
    year: 1959,
    tags: "#revelation"

  },
  {

    quote: "Art is harmony.",
    source: "Georges Seurat (1859–1891), French painter",
    citation: "letter to Maurice Beaubourg",
    year: 1890,
    tags:"#beauty"

  },
  {

    quote: "To me the thing that art does for life is to clean it – to strip it to form.",
    source: "Robert Frost (1874–1963), American poet",
    citation: "in 'Fire and Ice: The Art and Thoughts of Robert Frost' by Lawrence Thompson",
    year: 1942,
    tags:"#revelation"

  },
  { 
    
    quote: "To give a body and a perfect form to one’s thought, this—and only this—is to be an artist.",
    source: "Jacques-Louis David (1748–1825), French painter",
    citation: "in Jacques-Louis David, by Anita Brooker",
    year: 1980,
    tags:"#self-expression"

  } 
];

console.log(quotes); //this was in the project instructions, but wasn't sure if I should leave it here.

/*** 
Below is an array of color objects stored inside the "colors" variable that will later be called to generate a random background color
to display behind each randome quote.
***/

var colors = [
  {
    backgroundColor: "#00FFFF", // aqua
  },
  { 
    backgroundColor: "#7FFFD4", // aquamarine
  },
  {
    backgroundColor: "#8A2BE2", // blueviolet
  },
  {
    backgroundColor: "#5F9EA0", // cadet blue
  },
  {
    backgroundColor: "#7FFF00", // chartreuse
  },
  {
    backgroundColor: "#FF7F50", // coral
  },
  {
    backgroundColor: "#6495ED", //cornflower blue
  },
  {
    backgroundColor: "#00FFFF", //cyan
  },
  {
    backgroundColor: "#008B8B", // dark cyan
  },
  {
    backgroundColor: "#8B008B", // dark magenta
  },
  {
    backgroundColor: "#9932CC", // dark orchid
  },
  {
    backgroundColor: "#00CED1", // dark turquoise
  },
  {
    backgroundColor: "#9400D3", // dark violet
  },
  {
    backgroundColor: "#FF1493", // deep pink
  },
  {
    backgroundColor: "#00BFFF", // deep sky blue
  },
  {
    backgroundColor: "#FF00FF", // fuchsia
  },
  {
    backgroundColor: "#FFD700", // gold
  }, 
  {
    backgroundColor: "#ADFF2F", // green yellow
  }, 
  {
    backgroundColor: "#FF69B4", // hot pink
  },
  {
    backgroundColor: "#FFB6C1", // light pink
  },
  {
    backgroundColor: "#FF00FF", // magenta
  },
  {
    backgroundColor: "#BA55D3", // medium orchid
  },
  {
    backgroundColor: "#7B68EE", // medium slate blue
  },
  {
    backgroundColor: "#C71585", // medium violet red
  },
  {
    backgroundColor: "#DA70D6", // orchid
  },
  {
    backgroundColor: "#DDA0DD", // plum
  },
  {
    backgroundColor: "#B0E0E6", // powder blue
  },
  { 
    backgroundColor: "#40E0D0", // turquoise
  },
  {
    backgroundColor: "#EE82EE", // violet
  },
  {
    backgroundColor: "#F5F5F5", // white smoke
  },
  {
    backgroundColor: "#9ACD32", // yellow green
  }

];

/***
Function below will: 
1)Generates random number between 0 - last index in array perameter
2)Use random number and box notation to get random item from "quotes" array
3)Return random quote 
***/

function getRandomQuote(array){ 
  var quoteIndex = Math.floor(Math.random() * (quotes.length)); // 1
  for (var i = 0; i < array.length; i++) { 
       var randomQuote = array[quoteIndex]; // 2
  }
  return randomQuote; // 3
}


/*** 
Function below will:
1) Generate a random number ("getRandomColor") to then apply to the "colors" array,
2) Choose a random color based on parameters set by the program: a random number between 0 - and last number of the array index length
3) Return a random background color object from "colors" array index
***/
 
function getRandomColor(array){
  var colorIndex = Math.floor(Math.random() * (colors.length)); // 1
  for (var i = 0; i < array.length; i++) {
       var randomColor = array[colorIndex]; // 2
  }
  return randomColor; // 3
}



/** 
Function below will:
Allow randomly generated quote and other indicated information (prop values: citation, source, year, tags) to be printed in the "html" variable as programmed.
  (-Please note: For the purpose of this project "if/else" statements have been included in the code although 
  the optional properties for each quote object are also included. I wanted to demonstrate my understanding of 
  the material.) 
Will allow "getRandomColor" variable information to be stored and called, and thus executed, making the program display the randomly selected background color each time "getRandomQuote" is printed.
***/

function printQuote(){  
  var resultQuote = getRandomQuote(quotes); // variable that calls "getRandomQuote" function
  var displayColor = getRandomColor(colors); // variable that calls "getRandomColor" function
  var html = ''; // variable that initiates html string
  html = '<p class="quote">' + resultQuote.quote + '</p>'; // "quote" property will be added to string
  html += '<p class="source">' + resultQuote.source; // "source" property will be added to string
  if ( resultQuote.citation ) { // program checks to see if there is a "citation" property to add to the string
    html += '<span class="citation">' + resultQuote.citation + '</span>'; // if there is, it will be added to the string
  } else { // otherwise
    html += ''; // the string will continue without printing "citation"
  } 
  if ( resultQuote.year ) { // program checks to see if there is a "year" property to add to the string
    html += '<span class="year">' + resultQuote.year + '</span>'; // if there is it will be added to the string
  } else { // otherwise
    html += ''; // the string will continue without printing "year"
  }
  if ( resultQuote.tags ) {  // the program checks to see if there is a "tags" property to add to the string   
    html += '<span class="tags">' + resultQuote.tags + '</span>'; // if there is it will be added to the string
  } else { // otherwise
  html += '</p>'; // the string will close
  }
document.getElementById('quote-box').innerHTML = html; // html string completed
document.body.style.background = displayColor.backgroundColor; // background color will randomly change when each new quote is displayed
}

/***
Function below will:
1) Clear the timer and reset to start again on continuous loop
2) Trigger the printQuote function
3) Set the quote to change automatically at a set interval of every 15 seconds (but it actually seems faster)

***/

var quoteInterval = window.setInterval(printQuote, 15000); 
function clearInterval(){
  window.clearInterval(quoteInterval);
  quoteInterval = window.setInterval(printQuote, 15000);
}


/***
Code below will:
Force load random quote from "quotes" array index when "Show another quote" when button on the screen is activated ("clicked") by user
***/

document.getElementById("loadQuote").addEventListener("click", printQuote, false);