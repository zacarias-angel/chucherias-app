import React,{useEffect,useState,Fragment} from 'react';
import Inoxi from '../img/inoxi.jpg';
import Cuadriculada from '../img/cuadriculada.jpg';

const datadetail = [ {
    rutaimagen: Inoxi,
    titulo:" esp. acero",
    descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laboriosam provident sapiente quia quidem doloremque veritatis debitis vero reprehenderit incidunt, ratione, voluptatem distinctio eum rem quam culpa voluptate, perspiciatis iusto.",
    pack :24,
    bulto :600,
    precio : 16,
    id :2}
    ,
    {
    rutaimagen: Cuadriculada,
    titulo:" esp. acero",
    descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laboriosam provident sapiente quia quidem doloremque veritatis debitis vero reprehenderit incidunt, ratione, voluptatem distinctio eum rem quam culpa voluptate, perspiciatis iusto.",
    pack :24,
    bulto :600,
    precio : 16,
    id : 1
    } ];

const promesadetail = () =>{
    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            if(datadetail.length>0){
                resolve(datadetail);
            } else{
                reject("error al obtener los datos ");
            }
        },2000);
    })
}


const ItemDetail = () =>{
    const [Elementodetail,setElementodetail] = useState([]);


   useEffect(()=>{
        promesadetail().then((Elementodetail) =>{
            setElementodetail(Elementodetail);
            console.log(Elementodetail);
        }).catch((erroor)=>{
        console.log("error")
    })
   },[])
       
    return(
    
      
       <>{Elementodetail.map((datosDtail,id)=><div className="contenedorPadre" key={id}>
            
        <div className="contenedorMain">  
        
			<div className="tamañoImagen">
				<img src = {datosDtail.rutaimagen} alt=""/>
			</div>
			<div className="descripcion">
				<h1>{datosDtail.titulo}</h1>
				<p>{datosDtail.descripcion}</p>
				<h4>precio: {datosDtail.precio}</h4>
				<span className="cantidadProductos"> 0 </span>
				<button className="btn-comprar">comprar</button>
			</div>
		</div>
       </div>
        )
    } </>
    )
}

export default ItemDetail;