function parimpar() 
{
    var numeroUno=document.getElementById("numero").value;
    if (numeroUno === '')
    {
       document.getElementById("resultado").innerHTML=("Debe ingresar un número");
       return false;
    }
    else 
    {
        if (numeroUno%2==0)
        {
        document.getElementById("resultado").innerHTML=("El número es par");
        return true;  
        }
        else
        {
        document.getElementById("resultado").innerHTML=("El número es impar");  
        return true;  
        }
    }
}