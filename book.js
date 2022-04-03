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

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function book_function() {

    var book_string = "@book{";
    var code = document.getElementById("code").value + ',\n';
    var title = '  title     = "' + document.getElementById("title").value + '",\n';
    //var author = '  author    = "' + document.getElementById("author").value + '",\n';
    var year = '  year      = ' + document.getElementById("year").value + ',\n';
    var publisher = '  publisher = "' + document.getElementById("publisher").value + '",\n';
    var address = '  address   = "' + document.getElementById("address").value + '"\n' + "}";

    book_string += code;
    book_string += title;
    book_string += year;
    book_string += publisher;
    book_string += address;
    navigator.clipboard.writeText(book_string);

    document.getElementById("book_button").innerHTML = "　　　Copied　　";
    document.title = "your narrative has been updated";
    sleep(500).then(() => {
        document.getElementById("book_button").innerHTML = "Copy to clipboard";
    });
}

function book_clear() {

    if (document.getElementById("book_button_clear").innerHTML == "Confirm") {

        document.getElementById("code").value = "";
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