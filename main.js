const quotes = [
    {
      "quote": "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
      "author": "Roy T. Bennett",  
    },
    {
        "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "author": "Roy T. Bennett",
    },
    {
        "quote": "We grow fearless when we do the things we fear.",
        "author": "Robin sharma",
    },
    {
        "quote": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
        "author": "Helen Keller",
    },
    {
        "quote": "You are my heart, my life, my one and only thought.",
        "author": "Arthur Conan Doyle",
    },
    {
        "quote": "I cannot let you burn me up, nor can I resist you. No mere human can stand in a fire and not be consumed.",
        "author": "A.S. Byatt",
    },
    {
        "quote": "I can’t sleep, I can’t eat, I can’t do anything but think about him. At night I dream of him, all day I wait to see him, and when I do see him my heart turns over and I think I will faint with desire.",
        "author": "Philippa Gregory",
    },
    {
        "quote": "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
        "author": "Henry Ford",
    },
    {
        "quote": "I like criticism. It makes you strong.",
        "author": "LeBron james",
    },
    {
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert einstein",
    },
  {
    "quote":"Heesung is mine",
    "author":"Callista",
  },
  {
    "quote":"It's not just about being better. It's about being different. You need to give people a reason to choose your business.",
    "author":"Tom abbot.",
  },
  {
    "quote":"Working hard for something we don't care about is called stressed; working hard for something we love is called passion.",
    "author":"Simon sinek",
  },
  {
    "quote":"Energy and persistence conquer all things.",
    "author":"Benjamin Franklin",
  },
  {
    "quote":"Failure after long perseverance is much grander than never to have a striving good enough to be called a failure.",
    "author":"George elliot",
  },
  {
    "quote":"The secret of joy in work is contained in one word -- excellence. To know how to do something well is to enjoy it.",
    "author":"Pearl Buck",
  },
  {
    "quote":"Love your self before you love anyone else",
    "author":"Callista"
  },
  {
    "quote":"You can waste your lives drawing lines. Or you can live your life crossing them",
    "author":"Shonda rhimes",
  },
  {
    "quote":"We must use time as a tool, not as a couch",
    "author":"John F. Kennedy",
  },
  {
    "quote":"Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why it’s called the present",
    "author":"Bil keane",
  },
  {
    "quote":"Better three hours too soon than a minute too late.",
    "author":"William Shakespeare",
  },
  {
    "quote":"The past always looks better than it was. It’s only pleasant because it isn’t here.",
    "author":"Finley Peter Dunne",
  },
  {
    "quote":"be your self",
    "author":"BTS",
  },
  {
    "quote":"Tough times never last, but tough people do.",
    "author":"Robert H."
  }
    
];

function randomQuotesGenerator() {
    let getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let getQuoteElement = document.getElementById("quote-holder");
    let getOwnerElement = document.getElementById("owner");

    getQuoteElement.innerHTML = getRandomQuote.quote;
    getOwnerElement.innerHTML = getRandomQuote.author;
}
