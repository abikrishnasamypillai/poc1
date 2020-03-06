let input=document.getElementById('inputval');
let input1=document.getElementById('inputval2');
let output=document.getElementById('display');

let result=0


function addition()
{
    temp=parseInt(output.value);
    result=temp+1;
    if(result>=0 && result<=10)
    {
    output.value=result;
    }
    else{
        document.getElementById('inputval').disable=true;
    }
}
input.addEventListener('click',addition);


function Subtraction()
{
    temp=parseInt(output.value);
    result=temp-1;
    if(result>=0 && result<=10)
    {
    output.value=result;
    }
    else{
        document.getElementById('inputval2').disable=true;
    }
}
input1.addEventListener('click', Subtraction);

