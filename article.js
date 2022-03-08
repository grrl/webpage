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
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

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
    document.getElementById("article_button").innerHTML = "　　　Copied　　"

    sleep(500).then(() => {
        document.getElementById("article_button").innerHTML = "Copy to clipboard"
    });

}

function article_clear() {

    if (document.getElementById("article_button_clear").innerHTML == "Confirm") {

        document.getElementById("code").value = "";
        document.getElementById("title").value = "";
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("publisher").value = "";
        document.getElementById("address").value = "";
        document.getElementById("article_button_clear").style.background = '#087cfc';
        document.getElementById("article_button_clear").style.borderColor = '#087cfc';
        document.getElementById("article_button_clear").innerHTML = "Clear all";
    }
    else {

        document.getElementById("article_button_clear").style.background = '#7CFC00';
        document.getElementById("article_button_clear").style.borderColor = '#7CFC00';
        document.getElementById("article_button_clear").innerHTML = "Confirm"
        //document.getElementById("article_button_clear").id = "confirm_button"

        sleep(5000).then(() => {

            if (document.getElementById("article_button_clear").innerHTML == "Confirm") {
            document.getElementById("article_button_clear").style.background = '#087cfc';
            document.getElementById("article_button_clear").style.borderColor = '#087cfc';
            document.getElementById("article_button_clear").innerHTML = "Clear all"
            }

        });
    }

}