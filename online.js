// JavaScript source code


var keywords_array = [];

//struct?

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function book_function() {

    var book_string = "@online{";
    var code = document.getElementById("code").value + ',\n';
    var name = '  name     = "' + document.getElementById("title").value + '",\n';
    var author = '  author    = "' + document.getElementById("title").value + '",\n';
    var title = '  title      = ' + document.getElementById("year").value + ',\n';
    var addendum = '  addendum = "' + document.getElementById("publisher").value + '",\n';
    var keywords = '  keywords   = "' + document.getElementById("address").value + '"\n' + "}";

    book_string += code;
    book_string += title;
    book_string += author;
    book_string += year;
    book_string += publisher;
    book_string += address;
    navigator.clipboard.writeText(book_string);
}

function book_clear() {

    if (document.getElementById("online_button_clear").innerHTML == "Confirm") {

        document.getElementById("code").value = "";
        document.getElementById("name").value = "";
        document.getElementById("author").value = "";
        document.getElementById("title").value = "";
        document.getElementById("addendum").value = "";
        document.getElementById("keywords").value = "";
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