(function() {
  // Create the dictionary module
  var app = angular.module('dictionary', []);

  //Controllers//

  // Create the dictionary controller
  app.controller('DictionaryController', function() {
    // Word is a Property of Dictionary
    this.words = definitions;
  });

  // app.controller('NewWordController', function() {
  //   this.newWord = {}; // This handles the form you use to make a new word, stores the word information here temporarily until it's either submitted or removed.
  //   this.addNewWord = function() {
  //     definitions.push(this.newWord); // Push the new word to the definitions array.
  //     this.newWord = {} // Resets the form to be blank after submitting the new word.
  //   };
  // });

  // Directives //
  // New definition form
  app.directive('definitionForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'definition-form.html',
      controller: function() {
        this.newWord = {}; // This handles the form you use to make a new word, stores the word information here temporarily until it's either submitted or removed.
        this.addNewWord = function() {
          definitions.push(this.newWord); // Push the new word to the definitions array.
          this.newWord = {}; // Resets the form to be blank after submitting the new word.
        };
      },
      controllerAs:'newWordCtrl'
    };
  });

  // Main panel
  app.directive('definitionPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'definition-panel.html',
      // Controller for panel logic
      controller: function() {
        this.tab = 1; // initialise tab to 1

        // Triggers when clicking a navigation tab
        this.selectTab = function(setTab) {
          this.tab = setTab;
        }

        // Check if tab is selected, return that tab value that's selected
        // In the HTML it will set the active-pill class if the tab is selected
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        }
      },
      controllerAs:'panel'
    };
  });

  // Definitions
  app.directive('definitionContent', function() {
    return {
      restrict: 'E',
      templateUrl: 'definition.html'
    };
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