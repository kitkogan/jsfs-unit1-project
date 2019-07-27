/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
Below is an Array of quote objects as compiled from http://mentalfloss.com/article/57501/27-responses-question-what-art 
all attempting to answer the question "What is Art?":
- All [9] quote objects have been placed into the variable "quotes", contained inside of an Array.
- All quote objects contain properties for: "source", "citation", "year", and "tags."

I am attempting to get an "exceeds expectations" review on this project.
Thank you!
***/

var quotes = [
  {

    quote: "Art is Skill; its display, application, or expression.",
    source: "Oxford English Dictionary Online.",
    citation: "published again for Mental Floss 'What is Art?' in 2014.",
    year: "1300s.",
    tags: "#dictionarysays"

  },
  {

    quote: "The expression or application of creative skill and imagination, typically in a visual form such as painting, drawing, or sculpture, producing works to be appreciated primarily for their beauty or emotional power.",
    source: "Oxford English Dictionary Online.",
    citation: "published again for Mental Floss 'What is Art?' in 2014",
    year: "1600s.",
    tags: "#dictionarysays"

  },
  {

    quote: "Art is either a plagiarist or a revolutionary.",
    source: "Paul Gauguin (1848–1903), Peruvian-born French artist",
    citation: "quoted in Huneker, The Pathos of Distance",
    year: 1913,
    tags: "#imitationVScreation"

  },
  {

    quote: "Filling a space in a beautiful way. That's what art means to me.",
    source: "Georgia O'Keeffe (1887–1986), American painter",
    citation: "Art News December 1977",
    year: 1977,
    tags: "#beauty"

  },
  {

    quote: "We all know that Art is not truth. Art is a lie that makes us realize truth.",
    source: "Pablo Picasso (1881–1973), Spanish painter living in France",
    citation: "quoted in Dore Ashton's 'Picasso on Art'",
    year: 1972,
    tags: "#revelation"

  },
  {

    quote: "[In order to distinguish Andy Warhol’s Brillo Boxes from actual Brillo boxes, art can be defined as] embodied meaning.",
    source: "Arthur C. Danto (1924–2013), American philosopher of art",
    citation: "What Art Is",
    year: 2013,
    tags: "#imitationVScreation"

  },
  {

    quote: "What is art? Art grows out of grief and joy, but mainly grief. It is born of people’s lives.",
    source: "Edvard Munch (1863–1944), Norwegian artist",
    citation: "'Edvard Munch: The Man and His Art' by Ragna Stang",
    year: 1977,
    tags: "#self-expression"

  },
  {

    quote: "Art is a habit-forming drug.",
    source: "Marcel Duchamp (1887–1968), French-born American artist",
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

  }

];

console.log(quotes);

/***
Function below will: 
1)Generate a random number ("getRandomQuote") to then apply to "quotes" array,
2)Choose random quote based on parameters set by program: a random number between 0 - and last number of array index length
3)Return random quote object from "quotes" array index

***/
function getRandomQuote(array) { 
  var quoteIndex = Math.floor(Math.random() * (quotes.length)); 
  for (var i = 0; i < array.length; i++) { 
       var randomQuote = array[quoteIndex]; 
  }
  return randomQuote; 
}
var result = getRandomQuote(quotes);
console.log(result);


/***
Function below will:
Allow randomly generated quote and other indicated information to be printed as a "message" as programmed.
  (-Please note: For the purpose of this project "if/else" statements have been included in the code although 
  the optional properties for each quote object are also included. I wanted to demonstrate my understanding of 
  the material.) 
***/

function printQuote() {  
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  if ( result.citation ) {
    message += "<span class='citation'>" + result.citation + "</span>";
  } else {
    message += '';
  } 
  if ( result.year ) { 
    message += "<span class='year'>" + result.year + "</span>";
  } else { 
    message += '';
  }
	if ( result.tags ) {   
    message += "<span class='tags'>" + result.tags + "</span>";
  } else { 
  message += "</p>";
  }
}
document.getElementById('quote-box').innerHTML = message;
printQuote(); 

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById("loadQuote").addEventListener("click", printQuote, false);





