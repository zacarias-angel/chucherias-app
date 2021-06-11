import React,{useState} from 'react';

 const ItemCount = () => {
     
const [Numero, setNumero] = useState(0);



const aumentar = () =>{
    setNumero(Numero + 1);
}

const reducir = () =>{
    setNumero(Numero - 1);
    if (Numero < 0){
    {console.log("es menor que 0")}
    }

    
}



    return(
        <div id="cajapadre" className="caja-articulos"> 
            <div className="articulo-hijo">
                <div id="articulo01" className="body-tarjeta">
                    <h5 className="titulo-tarjeta"> desafio 2 </h5> <h5 className="titulo-tarjeta"> cantidad del contador: {Numero} </h5>
                    <ul className="descripcion" >
                        <li><button onClick ={aumentar} className="btn-card">sumar</button></li>
                        <li><button onClick ={reducir} className="btn-card" >restar</button></li>
                        <li><button className="btn-card">agregar al carrito</button></li>
                    </ul>
                    
                </div>
            </div>
        </div>
            
        
    ) 
}


export default ItemCount;