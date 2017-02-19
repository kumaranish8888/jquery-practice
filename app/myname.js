(function (){
    
  
    
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
    
   for(var i = 0; i<names.length; i++){
        var myname = names[i];
        var mylitag = document.createElement("li");
       console.log(mylitag);
        mylitag.textContent = myname;
        reference.appendChild(mylitag);
    }
    
    
    console.log("This program is regularly modified");
   
    
    
    
    
    
     for(var i = 0; i<names.length; i++){
        var myname = names[i];
        var litag = $("<li/>");
         console.log(litag);
         $(litag).text = myname;
        $("#mylist").append(litag);
    }
    
    
})();
