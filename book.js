// JavaScript source code

//activate when user presses submi

/*

@book{hawking1989,
  title     = "A Brief History of Time: From the Big Bang to Black Holes",
  author    = "Hawking, Stephen",
  year      = 1988,
  publisher = "Bantam",
  address   = "London"
}
 
*/

//struct?
const Person = jkt`
    name: String
    age: Number
`

const someVar = Person({ name: "Aditya", age: "26" })

someVar.name // print "Aditya"
someVar.age // print 26 (integer)

function xyz(age, name) {
    this.age = age;
    this.name = name;
    this.getAge = function () { return age; }
}

var myXyz = new xyz(42, 'fred');
myXyz.getAge(); // Returns 42


function book_function() {

    var book_string = "";
    var code = "";
    var title = "title = " + '"' ;
    var year = "";
    var publisher = "";
    var address = "";

    navigator.clipboard.writeText(book_string);
}