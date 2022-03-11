// JavaScript source code

//activate when user presses submi

/*

@incollection{metzler19random,
  author = {Metzler, Saskia and Miettinen, Pauli},
  title = {Random Graph Generators for Hyperbolic Community Structures},
  booktitle = {{Proc. 7th International Conference on Complex Networks and Their Applications (COMPLEX NETWORKS 2018)}},
  editor = {Aiello, L. and Cherifi, C. and Cherifi, H. and Lambiotte, R. and Li{\'o}, P. and Rocha, L.},
  publisher = {Springer},
  address = {Cham},
  year = {2018},
  pages = {680-693},
  doi = {10.1007/978-3-030-05411-3_54},
}
 
*/

//struct?

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function incollection_function() {

    var incollection_string = "@book{";
    var code = document.getElementById("code").value + ',\n';
    var author = '  author     = "' + document.getElementById("author").value + '",\n';
    var title = '  title     = "' + document.getElementById("title").value + '",\n';
    var booktitle = '  booktitle     = "' + document.getElementById("booktitle").value + '",\n';
    var editor = '  editor     = "' + document.getElementById("editor").value + '",\n';
    var publisher = '  publisher     = "' + document.getElementById("publisher").value + '",\n';
    var address = '  publisher     = "' + document.getElementById("publisher").value + '",\n';
    //var author = '  author    = "' + document.getElementById("title").value + '",\n';
    var year = '  year      = ' + document.getElementById("year").value + ',\n';
    //var publisher = '  publisher = "' + document.getElementById("publisher").value + '",\n';
    //var address = '  address   = "' + document.getElementById("address").value + '"\n' + "}";
    var doi = '  doi      = ' + document.getElementById("doi").value + ',\n';

    book_string += code;
    book_string += title;
    book_string += author;
    book_string += year;
    book_string += publisher;
    book_string += address;
    navigator.clipboard.writeText(book_string);
}

function book_clear() {

    if (document.getElementById("book_button_clear").innerHTML == "Confirm") {

        document.getElementById("code").value = "";
        document.getElementById("title").value = "";
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("publisher").value = "";
        document.getElementById("address").value = "";
        document.getElementById("book_button_clear").style.background = '#087cfc';
        document.getElementById("book_button_clear").style.borderColor = '#087cfc';
        document.getElementById("book_button_clear").innerHTML = "Clear all";
    }
    else {

        document.getElementById("book_button_clear").style.background = '#7CFC00';
        document.getElementById("book_button_clear").style.borderColor = '#7CFC00';
        document.getElementById("book_button_clear").innerHTML = "Confirm"
        //document.getElementById("article_button_clear").id = "confirm_button"

        sleep(5000).then(() => {

            if (document.getElementById("book_button_clear").innerHTML == "Confirm") {
                document.getElementById("book_button_clear").style.background = '#087cfc';
                document.getElementById("book_button_clear").style.borderColor = '#087cfc';
                document.getElementById("book_button_clear").innerHTML = "Clear all"
            }

        });
    }

}