(function() {
  // Create the dictionary module
  // The array that's the second argument looks for the module dictionary-words in definitions.js
  var app = angular.module('dictionary', ['dictionary-words']);

  //Controllers//
  // Create the dictionary controller
  app.controller('DictionaryController', function() {
    // Word is a Property of Dictionary
    this.words = definitions;
  });

  // Think of this simply as the data
  var definitions = [
    {
      name: "Peremptory",
      meaning: "Insisting on immediate attention or obedience, especially in a brusquely imperious way",
      sample: "'Just do it!' came the peremptory reply.",
      comment: "Noun", // Will usually be noun, verb, adjective, etc. but left as 'comments' if other comments need to go there
      memorised: false // Boolean test, basically, "Is this word memorised?"
    },
    {
      name: "Turbid",
      meaning: "(of a liquid) cloudy, opaque, or thick with suspended matter / confused or obscure in meaning or effect",
      sample: "The river was turbid from the pollution of the nearby factory.",
      comment: "Adjective",
      memorised: false
    },
    {
      name: "Abut",
      meaning: "be next to or have a common boundary with",
      sample: "The houses in the centre of the town were abutting due to lack of space",
      comment: "verb",
      memorised: false
    },
    {
      name: "Pecuniary",
      meaning: "relating to or consisting of money",
      sample: "he admitted obtaining a pecuniary advantage by deception.",
      comment: "adjective formal",
      memorised: true
    }
  ];
})();