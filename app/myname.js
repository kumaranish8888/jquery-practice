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
        mylitag.textContent = myname;
        reference.appendChild(mylitag);
    }
    
    console.log("This change is made by Anish locally");
    console.log("This change is made by Harsha");
    console.log("This is the second change made by Harsha globally");
   
    
    
    
    
    
     for(var i = 0; i<names.length; i++){
        var myname = names[i];
        var litag = $("<li/>");
        $(litag).text = myname;
        $("#mylist").append(litag);
    }
    
    
})();
