window.onload=function(){
    var submit = document.getElementById("sub");
    var but = document.getElementById("but");
     var frm = document.getElementById("frm");
    var a=document.getElementById("a").value;
        var b=document.getElementById("b").value;
        var c=document.getElementById("c").value;
        var d=document.getElementById("d").value;
        var e=document.getElementById("e").value;
        var f=document.getElementById("f").value;
        
        var w = document.getElementById("mySel");
    
    submit.addEventListener('click',function(){
       
        /* validates*/
       if (isNotEmpty() && isDig() && isStr() && isCred() &&
       isSem())
       {
           document.getElementById("a").classList.add("valid");
            document.getElementById("b").classList.add("valid");
            document.getElementById("c").classList.add("valid");
            document.getElementById("d").classList.add("valid");
            document.getElementById("e").classList.add("valid");
            document.getElementById("f").classList.add("valid");
       }else{
            document.getElementById("a").classList.add("error");
            document.getElementById("b").classList.add("error");
            document.getElementById("c").classList.add("error");
            document.getElementById("d").classList.add("error");
            document.getElementById("e").classList.add("error");
            document.getElementById("f").classList.add("error");
            submit.disabled = true;
            but.addEventListener('click', reset);
       }
           
        function isNotEmpty(){
            if(a != null || a!= "" ||b != null || b!="" ||c != null || c!= "" ||
        d != null || d!= "" ||e != null || e!= "" ||f != null || f!= ""
        || w.value!=null ){
            return true;
            }
        }
           
        function isDig(){
            if(a.length == 4 && (!isNaN(a))){
                return true;
            }
         }
         
        function isStr(){
         if(b.length == 4 && (isNaN(b))){
                return true;
            }
         }
         
         function isCred(){
         if(!isNaN(e) && e > 0 && e <= 8){
                 return true;
             }
         }
         
         function isSem(){
         if(f == 1 || f == 2 || f == 3){
             return true;
            }
         }
         
         function reset(){
              document.getElementById("a").classList.remove("error");
            document.getElementById("b").classList.remove("error");
            document.getElementById("c").classList.remove("error");
            document.getElementById("d").classList.remove("error");
            document.getElementById("e").classList.remove("error");
            document.getElementById("f").classList.remove("error");
            submit.disabled = false;
         }
         
    })
    
};
