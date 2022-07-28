import React from "react";

function ErrorShowing(){
    var errors = document.getElementById("error")
    if(null(document.getElementById("setting").value))
    {
        <div class="alert alert-danger" role="alert">
             A simple danger alert—check it out!
            </div>
    }else{
        errors.textContent = "" 
    }
};
export default ErrorShowing;
