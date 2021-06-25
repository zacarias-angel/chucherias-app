import React,{useState} from 'react';
import {Link} from 'react-router-dom';
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



const Item = () => {
       
console.log("esta esta despues de la promesa")

    const [Elemento,setElemento] = useState([]);
    ejeucutarpromesa().then ((Elemento)=>{
     
        setElemento(Elemento)
         
    }).catch((erroor)=>{
        console.log("error")

    })

   

    return(
        <div id="cajapadre" className="caja-articulos"> 
        {Elemento.map((eLemento, id )=> <React.Fragment key={id}>
        <div className="articulo-hijo">
            <img className="tamano-tarjeta" src={eLemento.rutaimagen} alt=""/>
            <div id="articulo01" className="body-tarjeta">
                <h5 className="titulo-tarjeta"> {eLemento.titulo} </h5>
                <ul className="descripcion" >
                    <li>cantidad por pack {eLemento.pack}</li>
                    <li>cantidad bulto {eLemento.bulto}</li>
                    <li>precio {eLemento.precio}</li>
                </ul>
                <Link to={`/detalles/${eLemento.id}`}>
                <button id="btncard "    className="btn-card">ver mas</button>
                </Link>
            </div>    
        </div>

        </React.Fragment>
        )}
    </div>
    )
};

export default Item;