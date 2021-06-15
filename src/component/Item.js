import React,{useState} from 'react'

const data = [ {
    rutaimagen:"..img/inoxi.jpg",
    titulo:" esp. acero",
    pack :24,
    bulto :600,
    precio : 16,
    id : 1
    }
    ,
    {
    rutaimagen:"./img/inoxi.jpg",
    titulo:"esponja",
    pack :12,
    bulto :240,
    precio : 16,
    id : 2
    }
    ,
    {
    rutaimagen:"img/inoxi.jpg",
    titulo:"lana acero",
    pack :12,
    bulto :250,
    precio : 22,
    id: 3
    }    
    ,
    {
        rutaimagen:"inoxi.jpg",
        titulo:"esp. dorada",
        pack :24,
        bulto :600,
        precio : 24,
        id: 4
    },
    {
        rutaimagen:"imagenes/limpieza/amarillo.jpg",
        titulo:"paño amarillo",
        pack :1,
        bulto :250,
        precio : 15,
        id : 5
    }  
    ,
    {
        rutaimagen:"imagenes/limpieza/barre-hojas.jpg",
        titulo:"barre hojas",
        pack :12,
        bulto :12,
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
                <button id="btncard" className="btn-card">comprar</button>
            </div>    
        </div>

        </React.Fragment>
        )}
    </div>
    )
};

export default Item;