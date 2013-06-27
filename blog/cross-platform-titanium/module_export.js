exports.hello = function() {
  Ti.API.info("hello");
};

function Person(name) {
  return {
    say: function(something) {
      Ti.API.info(name + ' says ' + something);
    }
  };
}

module.exports = Person;
