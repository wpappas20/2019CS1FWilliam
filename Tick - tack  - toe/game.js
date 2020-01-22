//Like the file you showed me, you will need a variable to keep track of the clicks
//This variable will increase with each click.

$(".square").click(
    function(){
        if(/* the number of clicks is odd*/){
            $(this).css("background-color","red");
        }
        else{
            $(this).css("background-color","blue");
        }
    }

    //increase your click counter
);