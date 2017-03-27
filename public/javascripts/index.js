 $(document).ready(function(){
     $("body").css("display", "none").fadeIn(500);

     $("a.transition").click(function(event){
         event.preventDefault();
         linkLocation = this.href;
         $("body").fadeOut(500, redirectPage);
     });

     function redirectPage() {
         window.location = linkLocation;
     }

    $("#trial").click(function (){
        $('html, body').animate({scrollTop:$(document).height()}, 800);
        return false;
    });

    $(".header").click(function (){
        $('html, body').animate({scrollTop:0}, 800);
        return false;
    });

    var fullUrl = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '');
    $("#Send").click(function(){
        var formData = $("#emailForm").serialize();
        $.ajax ({
            url: fullUrl + '/send',
            type: 'POST',
            data: formData,
            success: function(result) {
                $("#msg").empty().text(result);
            },
            error: function(err) {
                $("#msg").empty().text("There is error " + err.status + ", error message: " + err.statusText);
            },
            dataType: "html",
            timeout: 60000
        });
    });
 });
