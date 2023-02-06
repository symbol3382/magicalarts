let dom;

let messages = [
    'COMING SOON ',
    'ART IS READY ',
    'BUT !  ',
    'DEV ADDING CONTENT HERE     ',
]

let currentMessageIndex = 0;

$(document).ready(function () {
    dom = $("#typewriteComingSoon");
    typewrite(messages[currentMessageIndex]);
})

function typewrite(word) {
    console.log('dddddd workd', word.length);
    if (word && word.length) {
        console.log('dddddd writting', word[0]);
        dom.text(dom.text() + word[0]);
        setTimeout(() => {
                typewrite(word.slice(1));
            }, 300
        )
    } else {
        dom.text("");
        currentMessageIndex++;
        typewrite(messages[currentMessageIndex%messages.length]);
    }
}
