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

    var book_string = "@book{";
    var code = document.getElementById("code").value + ',\n';
    var title = '  title =     "' + document.getElementById("title").value + '",\n';
    var author = '  author =     "' + document.getElementById("title").value + '",\n';
    var year = 'year = "' + document.getElementById("year").value + '",\n';
    var publisher = 'publisher = "' + document.getElementById("publisher").value + '",\n';
    var address = 'address = "' + document.getElementById("address").value + '"\n' + "}";

    book_string += code;
    book_string += title;
    book_string += year;
    book_string += publisher;
    book_string += address;
    navigator.clipboard.writeText(book_string);
}