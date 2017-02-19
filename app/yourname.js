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
        var thename = names[i];
        var mylitag = document.createElement("li");
        mylitag.textContent = thename;
        reference.appendChild(mylitag);
    }
   
    
    
    
    
    
     for(var j = 0; j<names.length; j++){
        var myname = names[j];
        var litag = $("<li/>");
        $(litag).text(myname);
        $("#mylist").append(litag);
    }
    
    
})();