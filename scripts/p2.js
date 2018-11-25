window.onload=function(){
    var submit = document.getElementById("sub");
    
    submit.addEventListener('click',validate);
    
    function validate(){
        var a=document.getElementById("a").value;
        var b=document.getElementById("b").value;
        var c=document.getElementById("c").value;
        var d=document.getElementById("d").value;
        var e=document.getElementById("e").value;
        var f=document.getElementById("f").value;
        
        var w = document.getElementById("mySel");
        /* validates*/
       if (isNotEmpty() && isDig() && isStr() && isCred() &&
       isSem())
       {
           console.log("yea");
       }else{
           console.log('hush');
           submit.disabled = true;
       
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
         
    })
    
};

