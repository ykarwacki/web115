// JavaScript Document
function $(id) {
    "use strict";
    return document.getElementById(id);
}

function change01() {
    "use strict";
    $("large").src = "images/mermaidStainedGlass.jpg";
    $("caption").firstChild.nodeValue = "Mermaids can swim in light too";
}

function change02() {
    "use strict";
    $("large").src = "images/dragonSilhouette.jpg";
    $("caption").firstChild.nodeValue = "Black Velvet Dragon";
}

function change03() {
    "use strict";
    $("large").src = "images/fairySilhouette.png";
    $("caption").firstChild.nodeValue = "Fairies Cast Glitter Shaddows. It is known";
}

function change04() {
    "use strict";
    $("large").src = "images/fairyKingEdit.png";
    $("caption").firstChild.nodeValue = "King of the Woods";
}

function change05() {
    "use strict";
    $("large").src = "images/mermaidDoorStop.jpg";
    $("caption").firstChild.nodeValue = "Get a mermaid to hold the door";
}

function change06() {
    "use strict";
    $("large").src = "images/dragonXmas.jpg";
    $("caption").firstChild.nodeValue = "Merry Dragonmass";
}