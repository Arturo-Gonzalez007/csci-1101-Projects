window.addEventListener("load", function ()
{
    //Get button element reference
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");

    //Counter value.
    let counter = 0;

    //Click button function.
    let clickButtonFunction = function()
    {
        //Incriment counter
        counter++;
        
        //Click counter value.
        clickCounterElement.innerHTML = counter;
    };

    //Attach click button.
    clickButtonElement.addEventListener("click", clickButtonFunction);
});