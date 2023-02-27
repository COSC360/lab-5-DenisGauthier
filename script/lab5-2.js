window.onload=function(){
    var allnodes = document.body.getElementsByTagName("*");
    for(var i = 1; i < allnodes.length; i++){
        var nodeNumber = allnodes[i].nodeType;
        var currentNode = allnodes[i];

        //node 3 = text so do not want text or DIV 
        if(nodeNumber !=3 && currentNode.nodeName != "DIV"){
            //Save old and add it back plus a new div with the type added to it
            var oldtext = currentNode.innerHTML;
            currentNode.innerHTML = oldtext + "<div class = 'hoverNode'>"+currentNode.nodeName+"</div>";
            currentNode.addEventListener("click",clickCheck);
        }
    }
    function clickCheck(){
        alert(currentNode.id + currentNode.parentNode.nodeName);
    }

}