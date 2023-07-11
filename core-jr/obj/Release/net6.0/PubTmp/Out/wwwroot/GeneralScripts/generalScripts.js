
function loadInDiv(vdiv, vurl) {
    $.ajax(
        {
            type: "GET",
            url: vurl,
            async: false,
            success: function (result) {
                $(vdiv).html(result);
            },
        });
}