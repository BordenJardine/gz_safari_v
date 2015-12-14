window.addEventListener('load', function() {

  var Scrivener = function() { }

  Scrivener.prototype.doSomething = function() {
    return "I would prefer not to.";
  }

  document.querySelector('.bartleby').innerHTML = new Scrivener().doSomething();

});
