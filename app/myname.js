(function (){
    
    
    function init(){
        normal();
        jquery();
    }
  
    
    var names = ["Anish", "Bikash", "Suvendu", "Anchal", "Joyab", "Sandeep"];
    
    $("#btnFirst").bind("click", first);
    $("#btnLast").bind("click", last);
    
    function first(){
        alert($("#firstName").val());
    }
    
    function last(){
        alert($("#lastName").val());
    }
    
    
    var reference = document.getElementById("mylist");
    
    function normal(){
    
   for(var i = 0; i<names.length; i++){
        var thename = names[i];
       console.log(thename);
        var mylitag = document.createElement("li");
        mylitag.textContent = thename;
        reference.appendChild(mylitag);
    }
    }
    
    
    console.log("This program is regularly modified");
   
    
    
    
    function jquery(){
    
     for(var j = 0; j<names.length; j++){
        var myname = names[j];
         console.log(myname);
        var litag = $("<li/>");
         $(litag).text(myname);
        $("#mylist").append(litag);
    }
        
    }
    
    init();
    
    
})();
