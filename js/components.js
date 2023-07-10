$(document).ready(function()
{
    hideAllElements();

    $("#showButtonCode").click(function(){
        $("#buttonCode").toggle();
    });

    $("#showOutlineButtonCode").click(function(){
        $("#outlineButtonCode").toggle();
    });

    $("#showCardCode").click(function(){
        $("#cardCode").toggle();
    });

    $("#showImageCardCode").click(function(){
        $("#imageCardCode").toggle();
    });

    $("#showHeaderCardCode").click(function(){
        $("#headerCardCode").toggle();
    });

    $("#showListGroupCode").click(function(){
        $("#listGroupCode").toggle();
    });

    $("#showModalCode").click(function(){
        $("#modalCode").toggle();
    });

    $("#showNavCode").click(function(){
        $("#navCode").toggle();
    });

    $("#showProgressCode").click(function(){
        $("#progressCode").toggle();
    });
});

function hideAllElements() 
{
    $("#buttonCode").hide();
    $("#outlineButtonCode").hide();
    $("#cardCode").hide();
    $("#imageCardCode").hide();
    $("#headerCardCode").hide();
    $("#listGroupCode").hide();
    $("#modalCode").hide();
    $("#navCode").hide();
    $("#progressCode").hide();
}