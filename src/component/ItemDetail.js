import React,{useState} from 'react';
import {useParams} from 'react-router-dom'
import Inoxi from '../img/inoxi.jpg';
import BarreHojas from '../img/barre-hojas.jpg';
import Cuadriculada from '../img/cuadriculada.jpg';
import Dorada from '../img/doradajpg.jpg';
import Lana from '../img/lana.jpg';
import Amarillo from '../img/amarillo.jpg';

 const data = [ {
    rutaimagen: Inoxi,
    titulo:" esp. acero",
    pack :24,
    bulto :600,
    descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laboriosam provident sapiente quia quidem doloremque veritatis debitis vero reprehenderit incidunt, ratione, voluptatem distinctio eum rem quam culpa voluptate, perspiciatis iusto.",
    precio : 16,
    id : 1
    
    }
    ,
    {
    rutaimagen:Cuadriculada,
    titulo:"esponja",
    pack :12,
    bulto :240,
    descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laboriosam provident sapiente quia quidem doloremque veritatis debitis vero reprehenderit incidunt, ratione, voluptatem distinctio eum rem quam culpa voluptate, perspiciatis iusto.",
    precio : 16,
    id : 2
    }
    ,
    {
    rutaimagen:Lana,
    titulo:"lana acero",
    pack :12,
    bulto :250,
    descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laboriosam provident sapiente quia quidem doloremque veritatis debitis vero reprehenderit incidunt, ratione, voluptatem distinctio eum rem quam culpa voluptate, perspiciatis iusto.",
    precio : 22,
    id: 3
    }    
    ,
    {
        rutaimagen:Dorada,
        titulo:"esp. dorada",
        pack :24,
        bulto :600,
        descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laboriosam provident sapiente quia quidem doloremque veritatis debitis vero reprehenderit incidunt, ratione, voluptatem distinctio eum rem quam culpa voluptate, perspiciatis iusto.",
        precio : 24,
        id: 4
    },
    {
        rutaimagen:Amarillo,
        titulo:"paño amarillo",
        pack :1,
        bulto :250,
        descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laboriosam provident sapiente quia quidem doloremque veritatis debitis vero reprehenderit incidunt, ratione, voluptatem distinctio eum rem quam culpa voluptate, perspiciatis iusto.",
        precio : 15,
        id : 5
    }  
    ,
    {
        rutaimagen:BarreHojas,
        titulo:"barre hojas",
        pack :12,
        bulto :12,
        descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laboriosam provident sapiente quia quidem doloremque veritatis debitis vero reprehenderit incidunt, ratione, voluptatem distinctio eum rem quam culpa voluptate, perspiciatis iusto.",
        precio : 45,
        id : 6
    }  ]
const ejeucutarpromesa = ()=>{
    return  new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            if(data.length>0){
                resolve(data);
            }else{
                reject("error al obtener los datos")
            }
            
        },3000)
        
        })
} 



const ItemDetail = () =>{
    const [Elemento,setElemento] = useState([]);
    ejeucutarpromesa().then (( data)=>{
        setElemento (data);
         console.log(Elemento);

    }).catch((erroor)=>{
        console.log("error")
    });
    const {id} = useParams()
        console.log(id)
const resultado = data.filter((item) =>item.id == id)
console.log(resultado)
const [Numero, setNumero] = useState(0);


const aumentar = () =>{
    setNumero(Numero + 1);
}
const reducir = () =>{
    setNumero(Numero - 1);
    if (Numero < 0){
    }
}


    return(
        <div className="contenedorMain">  
        
        <div className="tamañoImagen">
            <img src={resultado[0].rutaimagen} alt="imagen"/> </div>
        
            <div className="descripcion">
                <h1>{resultado[0].titulo}</h1>
                <p>algo mas </p>
                <h4>precio:</h4>
                <span className="cantidadProductos"> {Numero} </span>
                <ul className="descripcion" >
                        <li><button onClick ={aumentar} className="btn-card">sumar</button></li>
                        <li><button onClick ={reducir}  className="btn-card" >restar</button></li>
                        <li><button className="btn-card">agregar al carrito</button></li>
                    </ul>
            </div>
        </div>

    )
}

export default ItemDetail;