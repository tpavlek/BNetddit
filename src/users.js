$(document).ready(function() {
    $('#refresh-users').click(function() {
        importUsers();
    });
});

function importUsers() {
    $.ajax({
        type: "GET",
        url: "http://api.sc2ctl.com/bulk/users",
        dataType: "json",
        success: saveUsers,
        error: function(jqxhr) {
            console.error("Error pulling users from server");
        }
    });
}

function saveUsers(json) {
    console.log("BNetddit saving users to local storage...");
    chrome.storage.local.set({ 'bnetddit-users': json }, function () {
        console.log("Saved users!");
        window.close();
    });
}