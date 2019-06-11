jQuery(document).ready(function($) {

$(function() {
/**
* Smooth scrolling to page anchor on click
**/
$("a[href*='#']:not([href='#'])").click(function() {
    if (
        location.hostname == this.hostname
        && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
    ) {
        var anchor = $(this.hash);
        anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
        if ( anchor.length ) {
            $("html, body").animate( { scrollTop: anchor.offset().top - 30 }, 400);
        }
    }
});
});
    
$(window).on('load resize' , function(e){
    var headerHeight = $('#header').height();
    $('#primary').animate({"color":"#e8a010"},400);
      });


//
//
});//jquery function
