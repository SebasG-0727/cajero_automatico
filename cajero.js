var imagenes = [];
imagenes[50] = "50.png";
imagenes[20] = "20.png";
imagenes[10] = "10.png";

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0 )
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push( new billete(bi.valor,papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "No puedo darte esa cantidad :(";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                for(var bi = 1; bi <= e.cantidad ;bi++)
                {
                resultado.innerHTML += "<img src=" + e.imagen.src + " />" ;
                }
            } 
        }
        }
    }

function existencia()
{
      var total = 0;
    
      for(var bi of caja)
      {
        total += bi.valor * bi.cantidad;
      }
      console.log("El saldo del cajero es " + total );
}

var entregado = [];

var caja =[];
caja.push(new billete(50,20));
caja.push(new billete(20,30));
caja.push(new billete(10,10));
var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);
b.addEventListener("click",existencia);