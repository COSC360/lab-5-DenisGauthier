function setForm(){
    var formElement = document.forms[0];
    formElement.onsubmit = function(e){
        e.preventDefault();
        FormCheck()
        }

    formElement.onchange={
        function(e){resetElement(e);}
    }
}

function resetElement(e)
{
    e.target.className = "";
    if(e.target.name == "accept")
        document.getElementsByClassName("rectangle")[0].className = "rectangle";
}

function formCheck()
{
    var submitForm = true;
    var elementNames = ["title","description"];
    for (var i = 0; i < elementNames.length; i++)
    {
        var elementValue = (document.getElementsByName(elementNames[i]))[0].value;
        if(elementValue == "")
        {
            document.getElementsByName(elementNames[i])[0].className+=" highlight";
            if(elementNames[i] == "title" || elementNames[i] == "description")
            {
                submitForm = false;
            }
        }
    }   

    var acceptValue = document.getElementsByName("accept")[0].checked;
    if(acceptValue == false)
        {
        document.getElementsByClassName("rectangle")[0].className+=" highlight";
        submitForm = false;
        }


    if(submitForm == true)
    {
        document.forms[0].submit();
    }
}

window.onload = setForm;