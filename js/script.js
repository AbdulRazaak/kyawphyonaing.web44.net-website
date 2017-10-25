var Text = "မဂၤလာပါ……";
var Textarray = Text.split('');
var loopTime;
function looper(){
    if (Textarray.length > 0){
        document.getElementByTagName("jumbotron").innerHTML+= Textarray.shift();
        }else{
            clearTimeout(loopTime);
        }
    loopTime = setTimeout("looper()",50);
}

looper();
