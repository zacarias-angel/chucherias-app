 
    <>
    <div className="contenedorPadre" >
    {Elementodetail === 0 ? (<div className="contenedorMain">  
                            
                            <div className="tamañoImagen">
            
            </div>
            <div className="descripcion">
            <h1> cargando....</h1> 
            </div>
        </div> )  : (



        <> {Elementodetail.map((datosDtail,id)=>
            
        <div key={id} className="contenedorMain">  
        
        <div className="tamañoImagen">
            <img src = {} alt=""/>
            </div>
            <div className="descripcion">
                <h1>{}</h1>
                <p>{}</p>
                <h4>precio: {}</h4>
                <span className="cantidadProductos"> 0 </span>
                <button className="btn-comprar">comprar</button>
            </div>
        </div>
        
        )
    }</>
    )}
    </div>
    </>