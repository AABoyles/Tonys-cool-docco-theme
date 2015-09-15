// # test

// This is not a title
// this is a test
var boo = function(apple) {
  console.log(apple);
};

// @docco:skip
function skipme() {
  
  // mmm, bananas
  // @docco:unindent:2
  var banana;
  banana = boo;

  var thing = function(hello) {
    boo(hello);
  }

  // @docco:unindent:2
  // hello
  thing(banana);

// @docco:skip
}
