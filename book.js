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
var timer;
function rotate_title(onoff, delay) {
    var title1 = "4 Rapid Development";
    var title2 = "Website for developers, designers and webmaster";

    var title = "";

    var index = onoff;


    if (index == 0) {
        title = title1;
        index = 1;
    }
    else if (index == 1) {
        title = title2;
        index = 0;
    }
    document.title = title;
    timer = window.setTimeout("rotate_title(" + index + "," + delay + ")", delay);

}

function stop_timeout() {
    clearTimeout(timer);

}

function book_function() {

    var book_string = "@book{";
    var code = document.getElementById("code").value + ',\n';
    var title = '  title     = "' + document.getElementById("title").value + '",\n';
    var author = '  author    = "' + document.getElementById("author").value + '",\n';
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

    document.getElementById("book_button").innerHTML = "　　　Copied　　";
    //make switching scrolling
    document.title = "Your narrative has been updated";
    sleep(500).then(() => {
        document.getElementById("book_button").innerHTML = "Copy to clipboard";
    });
    rotate_title(1, 1000);
}

//rotate_title(0, 1000);

function book_clear() {

    stop_timeout();


    if (document.getElementById("book_button_clear").innerHTML == "Confirm") {

        document.getElementById("code").value = "";
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
        document.getElementById("publisher").value = "";
        document.getElementById("address").value = "";
        document.getElementById("book_button_clear").style.background = '#087cfc';
        document.getElementById("book_button_clear").style.borderColor = '#087cfc';
        document.getElementById("book_button_clear").innerHTML = "Clear all";
        //make switching
        document.title = "Overleaf citations made simple";

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