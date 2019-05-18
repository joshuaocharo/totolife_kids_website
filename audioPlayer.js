function audioPlayer1() {
    var currentSong = 0;
    $("#audioPlayer1")[0].src = $("#playlist1 li a")[0];
    $("#playlist1 li a").click(function (e) {
        e.preventDefault();
        $("#audioPlayer1")[0].src = this;
        $("#audioPlayer1")[0].play();
        $("#playlist1 li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent.addClass("current-song");
    });
    $("#audioPlayer1")[0].addEventListener("ended",function(){
        currentSong++;
        if(currentSong == $("#playlist1 li a").length)
            currentSong = 0;
        $("#playlist1 li").removeClass("current-song");
        $("#playlist1 li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer1")[0].src = $("#playlist1 li a")[currentSong].href;
        $("#audioPlayer1")[0].play();
    });
}
function audioPlayer2() {var currentSong = 0;
    $("#audioPlayer2")[0].src = $("#playlist2 li a")[0];
    $("#playlist2 li a").click(function (e) {
        e.preventDefault();
        $("#audioPlayer2")[0].src = this;
        $("#audioPlayer2")[0].play();
        $("#playlist2 li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent.addClass("current-song");
    });
    $("#audioPlayer2")[0].addEventListener("ended",function(){
        currentSong++;
        if(currentSong == $("#playlist2 li a").length)
            currentSong = 0;
        $("#playlist2 li").removeClass("current-song");
        $("#playlist2 li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer2")[0].src = $("#playlist2 li a")[currentSong].href;
        $("#audioPlayer2")[0].play();
    });
}
function audioPlayer3() {var currentSong = 0;
    $("#audioPlayer3")[0].src = $("#playlist3 li a")[0];
    $("#playlist3 li a").click(function (e) {
        e.preventDefault();
        $("#audioPlayer3")[0].src = this;
        $("#audioPlayer3")[0].play();
        $("#playlist3 li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent.addClass("current-song");
    });
    $("#audioPlayer3")[0].addEventListener("ended",function(){
        currentSong++;
        if(currentSong == $("#playlist3 li a").length)
            currentSong = 0;
        $("#playlist3 li").removeClass("current-song");
        $("#playlist3 li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer3")[0].src = $("#playlist3 li a")[currentSong].href;
        $("#audioPlayer3")[0].play();
    });
}