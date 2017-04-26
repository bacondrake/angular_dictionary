(function() {
  // Create the dictionary module
  var app = angular.module('dictionary', []);

  // Create the controller
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
    }
  ];
})();