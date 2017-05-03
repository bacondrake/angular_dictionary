(function() {
  var app = angular.module('dictionary-words', []);
  /** This file contains the module relating to all words (definitions) in the dictionary **/

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

  // Main panel, sets which words you see (memorised or not memorised)
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

  // Definitions, shows the content of the definition
  app.directive('definitionContent', function() {
    return {
      restrict: 'E',
      templateUrl: 'definition.html'
    };
  });
})();