(function(){
    
    
    $("btnFirst").bind("click", first);
    $("btnLast").bind("click", second);
    
    
        function first(){
        console.log($("firstName").val());
    }
    
    function second(){
        console.log($("lastName").val());
    }
    
})()