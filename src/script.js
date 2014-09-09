var data = {
    "Junho_C": {
        "league": "bronze",
        "url": "http://sc2ctl.com/user/12"
    }
};

$('.author').each(function(index, element) {
    var author = $(element).html();
    if (author in data) {
        var imgUrl = chrome.extension.getURL("img/" + data[author]["league"] + ".png");
        var imgTag = '<img class="flair" src="' + imgUrl + '" title="' + data[author]["url"] + '"/>';
        $(element).after('<a href="' + data[author]["url"] + '" class="bnetddit-link">' + imgTag + '</a>');
    }
});