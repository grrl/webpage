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

    var incollection_string = "@incollection{";
    var code = document.getElementById("code").value + ',\n';
    var author = '  author    = "' + document.getElementById("author").value + '",\n';
    var title = '  title     = "' + document.getElementById("title").value + '",\n';
    var booktitle = '  booktitle = "' + document.getElementById("booktitle").value + '",\n';
    var editor = '  editor    = "' + document.getElementById("editor").value + '",\n';
    var publisher = '  publisher = "' + document.getElementById("publisher").value + '",\n';
    var address = '  address   = "' + document.getElementById("address").value + '",\n';
    //var author = '  author    = "' + document.getElementById("title").value + '",\n';
    var year = '  year      = ' + document.getElementById("year").value + ',\n';
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
    incollection_string += doi;
    navigator.clipboard.writeText(incollection_string);

    document.getElementById("incollection_button").innerHTML = "　　　Copied　　";
    document.title = "your narrative has been updated";
    sleep(500).then(() => {
        document.getElementById("article_button").innerHTML = "Copy to clipboard";
    });
}

function incollection_clear() {

    if (document.getElementById("incollection_button_clear").innerHTML == "Confirm") {

        document.getElementById("code").value = "";
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