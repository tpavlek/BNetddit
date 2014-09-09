chrome.storage.local.get("bnetddit-users", addImages);


function addImages(bnetddit) {
    var data = bnetddit['bnetddit-users'];
    console.log("adding images");
    console.log(data);

    $('.author').each(function(index, element) {
        var author = $(element).html();
        if (author in data) {
            var imgUrl = chrome.extension.getURL("img/" + data[author]["league"] + ".png");
            var imgTag = '<img class="flair" src="' + imgUrl + '" title="' + data[author]["url"] + '"/>';
            $(element).after('<a href="' + data[author]["url"] + '" class="bnetddit-link">' + imgTag + '</a>');
        }
    });
}