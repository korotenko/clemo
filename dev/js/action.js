$(document).ready(function() {
    var short = "15px", 
        long  = "46px";		
	function show(n) {		
        $(n).css({
            height: long
        })
    }
    function hide(n) {		
        "" === $(n).val().trim() && $(n).css({
            height: short
        })
    }! function() {
        var n = $("body").data("page");
        $("nav ul li a").each(function(hide, short) {
            if ($(this).text().replace(" ", "-") === n) return $(this).addClass("active").append("<hr>"), !1
        })
    }();     
    $("#name").focus(function() {
        show(this)
    }), $("#name").focusout(function() {
        hide(this)
    }), $("#email").focus(function() {
        show(this)
    }), $("#email").focusout(function() {
        hide(this)
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