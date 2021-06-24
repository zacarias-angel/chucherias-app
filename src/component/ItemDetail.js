import React,{useEffect,useState} from 'react';
import Inoxi from '../img/inoxi.jpg';
import BarreHojas from '../img/barre-hojas.jpg';
import Cuadriculada from '../img/cuadriculada.jpg';
import Dorada from '../img/doradajpg.jpg';
import Lana from '../img/lana.jpg';
import Amarillo from '../img/amarillo.jpg';
import {useParams} from 'react-router-dom'


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


const promesadetail = () =>{
    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            if(data.length>0){
                resolve(data);
            } else{
                reject("error al obtener los datos ");
            }
        },2000);
    })
}


const ItemDetail = () =>{
    const [Elementodetail,setElementodetail] = useState([]);
    const {id} = (useParams);
        console.log(id)
        

useEffect(()=>{
        promesadetail().then((Elementodetail) =>{
            setElementodetail(Elementodetail);
            console.log(Elementodetail);
        }).catch((erroor)=>{
        console.log("error")
    })
},[])


    return(
        <div className="contenedorMain">  
        
        <div className="tamañoImagen">
            <img src={"/"} alt=""/> </div>
        
            <div className="descripcion">
                <h1></h1>
                <p></p>
                <h4>precio:</h4>
                <span className="cantidadProductos"> 0 </span>
                <button className="btn-comprar">comprar</button>
            </div>
        </div>

    )
}

export default ItemDetail;