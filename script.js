let calFunc = (symbol)=>{   
    var dispIOpVal = document.getElementById("dOutput");
    switch(symbol){
        case "=":            
            dispIOpVal.value = eval(dispIOpVal.value);
            break;
        case "C":
            dispIOpVal.value = "";
            break;
        case "←":
            dispIOpVal.value = dispIOpVal.value.substr(0,dispIOpVal.value.length-1);
            break;            
        default:        
            dispIOpVal.value+=symbol;
    }
};

var inputIgnorevalue = document.getElementById("dOutput")
var index = 0;

inputIgnorevalue.addEventListener("keyup", function(){
    var i = inputIgnorevalue.charCodeAt(0);
    console.log(i);
});