function buttonClick(){
    var output = document.body.getElementsByTagName("*");
    var tags = '';
    for (var i =0; i < output.length; i++){
        tags = tags + output[i].nodeName + '<br>'; 
    }
    document.getElementById('ouput').innerHTML = tags;
}   