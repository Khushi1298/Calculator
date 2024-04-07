let result =document.getElementById("result") ;
function getResult(value)
{
    if(value==="=")
    {
       result.value =eval(result.value) ;
    }
    else
    {
     result.value += value ;
    } 
}
function clearResult()
{
    result.value ="" ; 
}
function eraseone()
{
    result.value = result.value.substring(0, result.value.length-1);
}