// JavaScript source code


var keywords = [];

//struct?

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function addendum_function() {

    var addendum_format = "(accessed: ";


}

function add_function() {

    //add to array

    var word = document.getElementById("keywords").value;

    if (word == "") {
        document.getElementById("keywords").style.borderColor = "red";
        return;
    }
    else {
        document.getElementById("keywords").style.borderColor = "rgb(221, 221, 221)";
    }

    keywords.push(word);

    var keywords_text = "";
    var length = keywords.length;
    for (let index = 0; index < keywords.length; ++index) {
        const element = keywords[index];
        if (length == 1 || index == length - 1) {
            keywords_text += element;
        }
        else {
            keywords_text += element + ",";
        }
    }
    document.getElementById("keywords_strings").value = keywords_text;
    document.getElementById("keywords").value = "";

}

function remove_function() {


    keywords.pop();
    var length = keywords.length;

    if (length == 0) {
        document.getElementById("keywords_strings").value = "No keywords";
    }
    else {
        var keywords_text = "";

        for (let index = 0; index < keywords.length; ++index) {
            const element = keywords[index];
            if (length == 1 || index == length - 1) {
                keywords_text += element;
            }
            else {
                keywords_text += element + ",";
            }
        }
        document.getElementById("keywords_strings").value = keywords_text;
    }
}

function online_function() {


    var keywords_text = "";
    var length = keywords.length;
    for (let index = 0; index < keywords.length; ++index) {
        const element = keywords[index];
        if (length == 1 || index == length - 1) {
            keywords_text += element;
        }
        else {
            keywords_text += element + ",";
        }
    }

    var book_string = "@online{";
    var code = document.getElementById("code").value + ',\n';
    var author = '  author    = "' + document.getElementById("author").value + '",\n';
    var title = '  title      = "' + document.getElementById("title").value + '",\n';
    var url = '  url      = ' + document.getElementById("url").value + ',\n';
    //var addendum = '  addendum = "' + document.getElementById("addendum").value + '",\n';
    var addendum = '  addendum = "' + document.getElementById("addendum").value + '",\n';
    var keywordslist = '  keywords   = "' + keywords_text + '"\n' + "}";

    //var keywords = '  keywords   = "' + document.getElementById("keywords").value + '"\n' + "}";

    book_string += code;
    book_string += author;
    book_string += title;
    book_string += url;
    book_string += addendum;
    book_string += keywordslist;
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