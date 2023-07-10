$(document).ready(function()
{

    hideAllElements();

    $("#showContainerCode").click(function(){
        $("#containerCode").toggle();
    });

    $("#showGridCode").click(function(){
        $("#gridCode").toggle();
    });

    $("#showColumnCode").click(function(){
        $("#columnCode").toggle();
    });
});

function hideAllElements() 
{
    $("#containerCode").hide();
    $("#gridCode").hide();
    $("#columnCode").hide();
}