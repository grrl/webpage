// JavaScript source code


var keywords_array = [];

//struct?

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function online_function() {

    var book_string = "@online{";
    var code = document.getElementById("code").value + ',\n';
    var author = '  author    = "' + document.getElementById("author").value + '",\n';
    var title = '  title      = ' + document.getElementById("title").value + ',\n';
    var url = '  url      = ' + document.getElementById("url").value + ',\n';
    var addendum = '  addendum = "' + document.getElementById("addendum").value + '",\n';
    var keywords = '  keywords   = "' + document.getElementById("keywords").value + '"\n' + "}";

    book_string += code;
    book_string += author;
    book_string += title;
    book_string += url;
    book_string += addendum;
    book_string += keywords;
    navigator.clipboard.writeText(book_string);

    document.getElementById("online_button").innerHTML = "　　　Copied　　";
    document.title = "your narrative has been updated";
    sleep(500).then(() => {
        document.getElementById("online_button").innerHTML = "Copy to clipboard";
    });
}

function online_clear() {

    if (document.getElementById("online_button_clear").innerHTML == "Confirm") {

        document.getElementById("code").value = "";
        document.getElementById("author").value = "";
        document.getElementById("title").value = "";
        document.getElementById("addendum").value = "";
        document.getElementById("keywords").value = "";
        document.getElementById("online_button_clear").style.background = '#087cfc';
        document.getElementById("online_button_clear").style.borderColor = '#087cfc';
        document.getElementById("online_button_clear").innerHTML = "Clear all";
    }
    else {

        document.getElementById("online_button_clear").style.background = '#7CFC00';
        document.getElementById("online_button_clear").style.borderColor = '#7CFC00';
        document.getElementById("online_button_clear").innerHTML = "Confirm"
        //document.getElementById("article_button_clear").id = "confirm_button"

        sleep(5000).then(() => {

            if (document.getElementById("online_button_clear").innerHTML == "Confirm") {
                document.getElementById("online_button_clear").style.background = '#087cfc';
                document.getElementById("online_button_clear").style.borderColor = '#087cfc';
                document.getElementById("online_button_clear").innerHTML = "Clear all"
            }

        });
    }

}