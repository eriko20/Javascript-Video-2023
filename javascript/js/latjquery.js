// $(document).ready(function() {
//     console.log("ready");
// });

$(function () {
    $("#isi").html("<h1>Belajar jqueary</h1>");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("belajar js");
    });

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
        console.log("aku");
        
    });
})