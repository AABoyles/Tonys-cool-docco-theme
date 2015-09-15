// # test

// This is not a title
// this is a test
var boo = function(apple) {
  console.log(apple);
};

// @docco:skip
function skipme() {
  
  // @docco:unindent:2
  var banana;
  banana = boo;

  var thing = function(hello) {
    boo(hello);
  }

  thing(banana);

// @docco:skip
}
