// JavaScript source code

/*

@article{kalofolias18from,
  author = {Kalofolias, Janis and Galbrun, Esther and Miettinen, Pauli},
  title = {From sets of good redescriptions to good sets of redescriptions},
  journal = {Knowl. Inf. Syst.},
  volume = 57,
  number = 1,
  pages = {21--54},
  year = 2018,
  doi = {10.1007/s10115-017-1149-7},
}

*/

function article_function() {

    var book_string = "@book{";
    var code = document.getElementById("code").value + ',\n';
    var title = '  title     = "' + document.getElementById("title").value + '",\n';
    var author = '  author    = "' + document.getElementById("title").value + '",\n';
    var year = '  year      = ' + document.getElementById("year").value + ',\n';
    var publisher = '  publisher = "' + document.getElementById("publisher").value + '",\n';
    var address = '  address   = "' + document.getElementById("address").value + '"\n' + "}";

    book_string += code;
    book_string += title;
    book_string += author;
    book_string += year;
    book_string += publisher;
    book_string += address;
    navigator.clipboard.writeText(book_string);
}