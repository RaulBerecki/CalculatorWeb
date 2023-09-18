let calculus=0.0;
let screenInfo='0';
let calculed='';

function buttonNum(num){
    if(screenInfo=='0')
        screenInfo=num.toString();
    else if(screenInfo.length<11)
        screenInfo+=num.toString();
    document.getElementById('screen').innerHTML=screenInfo;
}
function button0(){
    if(screenInfo!='' && screenInfo.length<11)
    {
        screenInfo+='0';
        document.getElementById('screen').innerHTML=screenInfo;
    }
}
function buttonPlus()
{
    if(calculus==0 && calculed=='')
        calculus=parseFloat(screenInfo);
    screenInfo='0';
    document.getElementById('screen').innerHTML=screenInfo;
    calculed='plus';
}
function buttonMinus()
{
    if(calculus==0 && calculed=='')
        calculus=parseFloat(screenInfo);
    screenInfo='0';
    document.getElementById('screen').innerHTML=screenInfo;
    calculed='minus';
}
function buttonMultiply()
{
    if(calculus==0 && calculed=='')
        calculus=parseFloat(screenInfo);
    screenInfo='0';
    document.getElementById('screen').innerHTML=screenInfo;
    calculed='multi';
}
function buttonDivide()
{
    if(calculus==0 && calculed=='')
        calculus=parseFloat(screenInfo);
    screenInfo='0';
    document.getElementById('screen').innerHTML=screenInfo;
    calculed='divide';
}
function buttonEqual()
{
    if(calculed=='plus')
    {
        calculus+=parseFloat(screenInfo);
    }
    else if(calculed=='minus')
    {
        calculus-=parseFloat(screenInfo);
    }
    else if(calculed=='multi')
    {
        calculus*=parseFloat(screenInfo);
    }
    else if(calculed=='divide')
    {
        calculus/=parseFloat(screenInfo);
    }
    screenInfo=calculus.toString();
    if(calculus%1!=0)
        screenInfo=calculus.toFixed(3).toString();    
    document.getElementById('screen').innerHTML=screenInfo;
}
function buttonPoint()
{
    if(!screenInfo.includes('.') && screenInfo.length<13)
    {
        screenInfo+='.';
        document.getElementById('screen').innerHTML=screenInfo;
    }   
}
function buttonClear()
{
    calculus=0.0;
    screenInfo='0';
    calculed='';
    document.getElementById('screen').innerHTML=screenInfo;
}