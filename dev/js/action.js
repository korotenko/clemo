$(document).ready(function() {
    function n(n) {
        $(n).css({
            height: e
        })
    }

    function i(n) {
        "" === $(n).val().trim() && $(n).css({
            height: t
        })
    }! function() {
        var n = $("body").data("page");
        $("nav ul li a").each(function(i, t) {
            if ($(this).text().replace(" ", "-") === n) return $(this).addClass("active").append("<hr>"), !1
        })
    }();

    var t = "15px",
        e = "46px";
        
    $("#name").focus(function() {
        n(this)
    }), $("#name").focusout(function() {
        i(this)
    }), $("#email").focus(function() {
        n(this)
    }), $("#email").focusout(function() {
        i(this)
    }), $("#send").click(function() {
        $("#feedback").hide(1e3, function() {
            $("#msg-sent").slideDown()
        })
    }), $("#new-msg").click(function() {
        $("#msg-sent").hide(1e3, function() {
            $("#feedback").slideDown()
        })
    })
});