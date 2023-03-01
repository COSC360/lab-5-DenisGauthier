window.onload = function (){
    document.getElementById("mainForm").onsubmit = function(e){
        var Title = document.getElementsByName("title");
        var Desc = document.getElementsByName("description");
        var CheckBox = document.getElementsByName("accept").checked;
        var formReq = document.getElementsByClassName("required");

        if ( Title.value == "" || Title.value == undefined || Desc.value == "" || Desc.value == undefined|| !CheckBox.checked){
            e.preventDefault();
            formReq[0].classList.add("highlight");
            formReq[1].classList.add("highlight");
        }

        if (formReq[0].value && formReq[0].value){
            document.getElementById("mainForm").submit();
        }
    }
    var changeColor = document.getElementsByClassName("required");

    changeColor[0].addEventListener("input", function(){
    changeColor[0].classList.remove("highlight");
    })

    changeColor[1].addEventListener("input", function(){
    changeColor[1].classList.remove("highlight");
    })
}
