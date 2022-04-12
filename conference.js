// JavaScript source code

/*
@InProceedings{
    citekey,
    author = "",
    title = "",
    booktitle = "",
    year = "",
    month = "",
    address = "",
    publisher = "",
    pages = "",
}
*/

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function conference_function() {

    var book_string = "@InProceedings{";
    var code = document.getElementById("code").value + ',\n';
    var title = '  title     = "' + document.getElementById("title").value + '",\n';
    var author = '  author    = "' + document.getElementById("author").value + '",\n';
    var booktitle = '  booktitle = "' + document.getElementById("booktitle").value + '",\n';
    var year = '  year      = ' + document.getElementById("year").value + ',\n';
    var month = '  month     = ' + document.getElementById("month").value + ',\n';
    var publisher = '  publisher = "' + document.getElementById("publisher").value + '",\n';
    var address = '  address   = "' + document.getElementById("address").value + '",\n';
    var pages = '  pages = "' + document.getElementById("pages").value + '"\n' + "}";


    book_string += code;
    book_string += title;
    book_string += author;
    book_string += booktitle;
    book_string += year;
    book_string += month;
    book_string += publisher;
    book_string += address;
    book_string += pages;

    navigator.clipboard.writeText(book_string);

    document.getElementById("conference_button").innerHTML = "　　　Copied　　";
    document.title = "your narrative has been updated";
    sleep(500).then(() => {
        document.getElementById("conference_button").innerHTML = "Copy to clipboard";
    });
}

function conference_clear() {

    if (document.getElementById("conference_button_clear").innerHTML == "Confirm") {

        document.getElementById("code").value = "";
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
        document.getElementById("publisher").value = "";
        document.getElementById("address").value = "";
        document.getElementById("book_button_clear").style.background = '#087cfc';
        document.getElementById("book_button_clear").style.borderColor = '#087cfc';
        document.getElementById("book_button_clear").innerHTML = "Clear all";
    }
    else {

        document.getElementById("conference_button_clear").style.background = '#7CFC00';
        document.getElementById("conference_button_clear").style.borderColor = '#7CFC00';
        document.getElementById("conference_button_clear").innerHTML = "Confirm"
        //document.getElementById("article_button_clear").id = "confirm_button"

        sleep(5000).then(() => {

            if (document.getElementById("conference_button_clear").innerHTML == "Confirm") {
                document.getElementById("conference_button_clear").style.background = '#087cfc';
                document.getElementById("conference_button_clear").style.borderColor = '#087cfc';
                document.getElementById("conference_button_clear").innerHTML = "Clear all"
            }

        });
    }

}