﻿// JavaScript source code

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
var timer;
var index;

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function rotate_title(myindex, delay) {

    //var index = onoff;
    var index_string = "";

    //var myindex = 0;

    switch (myindex) {

        case 0:
            index_string = "Your narrative has been updated";
            myindex = 0;
            break;
        case 1:
            index_string = "our narrative has been updated ";
            myindex = 1;

            break;
        case 2:
            index_string = "ur narrative has been updated Y";
            myindex = 2;

            break;
        case 3:
            myindex = 3;

            index_string = "r narrative has been updated Yo";
            break;
        case 4:
            myindex = 4;

            index_string = " narrative has been updated You";
            break;
        case 5:
            myindex = 5;

            index_string = "narrative has been updated Your";
            break;
        case 6:
            myindex = 6;

            index_string = "arrative has been updated Your ";
            break;
        case 7:
            myindex = 7;

            index_string = "rrative has been updated Your n";
            break;
        case 8:
            myindex = 8;

            index_string = "rative has been updated Your na";
            break;
        case 9:
            myindex = 9;

            index_string = "ative has been updated Your nar";
            break;
        case 10:
            myindex = 10;

            index_string = "tive has been updated Your narr";
            break;
        case 11:
            myindex = 11;

            index_string = "ive has been updated Your narra";
            break;
        case 12:
            myindex = 12;

            index_string = "ve has been updated Your narrat";
            break;
        case 13:
            myindex = 13;

            index_string = "e has been updated Your narrati";
            break;
        case 14:
            myindex = 14;

            index_string = " has been updated Your narrativ";
            break;
        case 15:
            myindex = 15;

            index_string = "has been updated Your narrative";
            break;
        case 16:
            myindex = 16;

            index_string = "as been updated Your narrative ";
            break;
        case 17:
            myindex = 17;

            index_string = "s been updated Your narrative h";
            break;
        case 18:
            myindex = 18;

            index_string = " been updated Your narrative ha";
            break;
        case 19:
            myindex = 19;

            index_string = "been updated Your narrative has";
            break;
        case 20:
            myindex = 20;

            index_string = "een updated Your narrative has ";
            break;
        case 21:
            myindex = 21;

            index_string = "en updated Your narrative has b";
            break;
        case 22:
            myindex = 22;

            index_string = "n updated Your narrative has be";
            break;
        case 23:
            myindex = 23;

            index_string = " updated Your narrative has bee";
            break;
        case 24:
            myindex = 24;

            index_string = "updated Your narrative has been";
            break;
        case 25:
            myindex = 25;

            index_string = "pdated Your narrative has been ";
            break;
        case 26:
            myindex = 26;

            index_string = "dated Your narrative has been u";
            break;
        case 27:
            myindex = 27;

            index_string = "ated Your narrative has been up";
            break;
        case 28:
            myindex = 28;

            index_string = "ted Your narrative has been upd";
            break;
        case 29:
            myindex = 29;

            index_string = "ed Your narrative has been upda";
            break;
        case 30:
            myindex = 30;

            index_string = "d Your narrative has been updat";
            break;
        case 31:
            myindex = 31;

            index_string = " Your narrative has been update";
            break;
        case 32:
            myindex = 32;

            index_string = "Your narrative has been updated";
            break;
        case 33:
            myindex = 33;

            index_string = " Your narrative has been update";
            break;
        case 34:
            myindex = 34;

            index_string = "d Your narrative has been updat";
            break;
        case 35:
            myindex = 35;

            index_string = "ed Your narrative has been upda";
            break;
        case 36:
            myindex = 36;

            index_string = "ted Your narrative has been upd";
            break;
        case 37:
            myindex = 37;

            index_string = "ated Your narrative has been up";
            break;
        case 38:
            myindex = 38;

            index_string = "dated Your narrative has been u";
            break;
        case 39:
            myindex = 39;

            index_string = "pdated Your narrative has been ";
            break;
        case 40:
            myindex = 40;

            index_string = "updated Your narrative has been";
            break;
        case 41:
            myindex = 41;

            index_string = " updated Your narrative has bee";
            break;
        case 42:
            myindex = 42;

            index_string = "n updated Your narrative has be";
            break;
        case 43:
            myindex = 43;

            index_string = "en updated Your narrative has b";
        case 44:
            myindex = 44;

            index_string = "een updated Your narrative has ";
            break;
        case 45:
            myindex = 45;

            index_string = "been updated Your narrative has";
            break;
        case 46:
            myindex = 46;

            index_string = " been updated Your narrative ha";
            break;
        case 47:
            myindex = 47;

            index_string = "s been updated Your narrative h";
            break;
        case 48:
            myindex = 48;

            index_string = "as been updated Your narrative ";
            break;
        case 49:

            myindex = 49;

            index_string = "has been updated Your narrative";
            break;
        case 50:
            myindex = 50;

            index_string = " has been updated Your narrativ";
            break;
        case 51:
            myindex = 51;

            index_string = "e has been updated Your narrati";
            break;
        case 52:
            myindex = 52;

            index_string = "ve has been updated Your narrat";
            break;
        case 53:
            myindex = 53;

            index_string = "ive has been updated Your narra";
            break;
        case 54:

            myindex = 54;

            index_string = "tive has been updated Your narr";
            break;
        case 55:

            myindex = 55;

            index_string = "ative has been updated Your nar";
            break;
        case 56:

            myindex = 56;

            index_string = "rative has been updated Your na";
            break;
        case 57:

            myindex = 57;

            index_string = "rrative has been updated Your n";
            break;
        case 58:

            myindex = 58;


            index_string = "arrative has been updated Your ";
            break;
        case 59:

            myindex = 59;

            index_string = "narrative has been updated Your";
            break;
        case 60:

            myindex = 60;

            index_string = " narrative has been updated You";
            break;
        case 61:

            myindex = 61;

            index_string = "r narrative has been updated Yo";
            break;
        case 62:

            myindex = 62;

            index_string = "ur narrative has been updated Y";
            break;
        case 63:

            myindex = 63;

            index_string = "our narrative has been updated ";
            break;
        case 64:

            myindex = -1;

            index_string = "Your narrative has been updated";
            document.title = index_string;
            clearTimeout(timer)
            return;
        default:

    }

    myindex++;

    document.title = index_string;
    timer = window.setTimeout("rotate_title(" + myindex + "," + delay + ")", delay);

}

function stop_timeout() {

    clearTimeout(timer);
}

var authors = [];


function author_function() {

    var word = document.getElementById("author").value;


    if (word == "") {
        document.getElementById("author").style.borderColor = "red";
        return;
    }
    else {
        var document_string = "Added " + word;
        document.title = document_string;
        document.getElementById("author").style.borderColor = "rgb(221, 221, 221)";
        document.getElementById("authors").style.color = "#000000";
    }

    authors.push(word);

    var keywords_text = "";
    var length = authors.length;
    for (let index = 0; index < authors.length; ++index) {
        const element = authors[index];
        if (length == 1 || index == length - 1) {
            keywords_text += element;
        }
        else {
            keywords_text += element + ", ";
        }
    }
    document.getElementById("authors").value = keywords_text;
    document.getElementById("author").value = "";
}

function author_remove() {

    if (authors.length > 0)
        document.title = "Removed " + authors.pop();

    //keywords.pop();


    if (authors.length == 0) {
        document.getElementById("authors").style.color = "#6c757d";
        document.getElementById("authors").value = "No authors yet";
    }
    else {
        var keywords_text = "";

        for (let index = 0; index < authors.length; ++index) {
            const element = authors[index];
            if (authors.length == 1 || index == authors.length - 1) {
                keywords_text += element;
            }
            else {
                keywords_text += element + ", ";
            }
        }
        document.getElementById("authors").value = keywords_text;

    }
}

function incollection_function() {

    var authors_text = "";
    var length = authors.length;
    for (let index = 0; index < authors.length; ++index) {
        const element = authors[index];
        if (length == 1 || index == length - 1) {
            authors_text += element;
        }
        else {
            authors_text += element + " and ";
        }
    }

    var incollection_string = "@incollection{";
    var code = document.getElementById("code").value + ',\n';
    var author = '  author    = "' + authors_text + '",\n';
    var title = '  title     = "' + document.getElementById("title").value + '",\n';
    var booktitle = '  booktitle = "' + document.getElementById("booktitle").value + '",\n';
    var editor = '  editor    = "' + document.getElementById("editor").value + '",\n';
    var publisher = '  publisher = "' + document.getElementById("publisher").value + '",\n';
    var address = '  address   = "' + document.getElementById("address").value + '",\n';
    //var author = '  author    = "' + document.getElementById("title").value + '",\n';
    var year = '  year      = ' + document.getElementById("year").value + ',\n';
    var pages = '  pages     = "' + document.getElementById("pages").value + '",\n';

    //var publisher = '  publisher = "' + document.getElementById("publisher").value + '",\n';
    //var address = '  address   = "' + document.getElementById("address").value + '"\n' + "}";
    var doi = '  doi       = "' + document.getElementById("doi").value + '"\n' + "}";

    incollection_string += code;
    incollection_string += author;
    incollection_string += title;
    incollection_string += booktitle;
    incollection_string += editor;
    incollection_string += publisher;
    incollection_string += address;
    incollection_string += year;
    incollection_string += pages;
    incollection_string += doi;
    navigator.clipboard.writeText(incollection_string);

    document.getElementById("incollection_button").innerHTML = "　　　Copied　　";
    document.title = "your narrative has been updated";
    sleep(500).then(() => {
        document.getElementById("incollection_button").innerHTML = "Copy to clipboard";
    });

    rotate_title(0, 200);

}

function incollection_clear() {

    if (document.getElementById("incollection_button_clear").innerHTML == "Confirm") {

        clearTimeout(timer);

        document.title = "Overleaf citations - made simple";

        while (authors.length > 0) {
            authors.pop();
        }

        document.getElementById("code").value = "";
        document.getElementById("author").value = "";
        document.getElementById("author").style.borderColor = "#ced4da";
        document.getElementById("authors").value = "No authors yet";
        document.getElementById("authors").style.color = "#6c757d";

        document.getElementById("title").value = "";
        document.getElementById("booktitle").value = "";
        document.getElementById("editor").value = "";
        document.getElementById("publisher").value = "";
        document.getElementById("address").value = "";
        document.getElementById("year").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("doi").value = "";

        document.getElementById("incollection_button_clear").style.background = '#087cfc';
        document.getElementById("incollection_button_clear").style.borderColor = '#087cfc';
        document.getElementById("incollection_button_clear").innerHTML = "Clear all";
    }
    else {

        document.getElementById("incollection_button_clear").style.background = '#7CFC00';
        document.getElementById("incollection_button_clear").style.borderColor = '#7CFC00';
        document.getElementById("incollection_button_clear").innerHTML = "Confirm";
        //document.getElementById("article_button_clear").id = "confirm_button"

        sleep(5000).then(() => {

            if (document.getElementById("incollection_button_clear").innerHTML == "Confirm") {
                document.getElementById("incollection_button_clear").style.background = '#087cfc';
                document.getElementById("incollection_button_clear").style.borderColor = '#087cfc';
                document.getElementById("incollection_button_clear").innerHTML = "Clear all";
            }

        });
    }

}