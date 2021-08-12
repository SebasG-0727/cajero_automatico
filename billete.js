class billete
{
    constructor(v,c)
    {
        this.imagen = new Image();
     
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = imagenes[this.valor]  
    }

    mostrar()
    {
        
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br>";
    
    }
}