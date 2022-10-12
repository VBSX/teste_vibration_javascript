
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

        var element_dart = document.getElementById("dart")
        var element_mario = document.getElementById("mario")
        var element_james = document.getElementById("james")

        document.addEventListener('DOMContentLoaded', function (){
            element_dart.addEventListener('click', do_vibrate_dart_vader, false);
        });
        
        document.addEventListener("DOMContentLoaded", function(){
            element_mario.addEventListener("click", do_vibrate_super_mario, false)
        });
        
        document.addEventListener("DOMContentLoaded", function(){
            element_james.addEventListener("click", do_vibrate_james_bond, false )
        });

        function do_vibrate_dart_vader(){
            if (navigator.vibrate) {
                console.log('button clicked. Time to shake.');
                navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40, 500]);
        }}

        function do_vibrate_super_mario(){
            if (navigator.vibrate) {
                console.log('button clicked. Time to shake.');   
                navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);
        }}

        function do_vibrate_james_bond(){
            if (navigator.vibrate){
                console.log('button clicked. Time to shake.');        
                navigator.vibrate([200,100,200,275,425,100,200,100,200,275,425,100,75,25, 75,125,75,25,75,125,100,100]);
        }}
