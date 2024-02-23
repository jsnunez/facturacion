const listaProductos=[];

const cargarProductos=()=>{   
    for(let i=0;i<=10;i++){
        const nuevoProducto={
            id:"PROD"+i,
            descripcion:faker.commerce.productName(),
            precio: Math.floor(Math.random() * (150 - 0) + 0)
            
        };
        listaProductos.push(nuevoProducto);
    }    
}

const cargarFormularioProductos=()=>{
      const productosForm = document.getElementById('productos-form');
      productosForm.innerHTML = `
        <form>
            <label for="idProducto">Codigo del Producto:</label>
            <input type="text" id="idProducto" required>
            <label for="despProducto">Descripcion del producto:</label>
            <input type="text" id="despProducto" required>
            <label for="precioProducto">Precio del producto:</label>
            <input type="number" id="precioProducto" required>
            <button type="button" onclick="crearProducto()">Crear Producto</button>
            <button type="button" onclick="mostrarListado1()">Ver Listado de Productos</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar productos -->
        </form>
    `;
    const listadoProductos = document.getElementById('listado-productos');
    listadoProductos.style.display='none';
}

const crearProducto=()=>{
    const idpInput=document.getElementById('idProducto');
    const desInput=document.getElementById('despProducto');
    const precioInput=document.getElementById('precioProducto');

    const idp=idpInput.value;
    const desc=desInput.value;
    const precio=precioInput.value;

    const nuevoProducto={
        id:idp,
        descripcion:desc,
        precio: precio
      
    }

    listaProductos.push(nuevoProducto);

    idpInput.value='';
    desInput.value='';
    precioInput.value='';

    alert('Producto creado con éxito!');
    console.log(listaProductos);

    return nuevoProducto;

}

const mostrarListado1=()=>{
    const productosForm = document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');
    
    productosForm.style.display='none';
    listadoProductos.style.display='block';

    const ul=document.createElement('ul');

    for(const producto of listaProductos){
        const li=document.createElement('li');
        li.textContent= `ID: ${producto.id}, descripcion: ${producto.descripcion}, precio: ${producto.precio}`;
        ul.appendChild(li);
    }

    listadoProductos.innerHTML='';
    listadoProductos.appendChild(ul);

    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',volverFormulario1);
    listadoProductos.appendChild(volverButton);
    
}

const volverFormulario1=()=>{
    const productosForm=document.getElementById('productos-form');
    const listadoProductos = document.getElementById('listado-productos');

    listadoProductos.style.display='none';
    productosForm.style.display='block';
    
}



const cargarproductosf=()=>{   
    const factproductos = document.getElementById('factproductos');
    const scroll=document.createElement('select');
    scroll.id = "productselect"; 
    scroll.multiple = true;
    for(const  producto1 of listaProductos){
    
        const scroll_pag=document.createElement('option');
        scroll_pag.textContent= ` ${producto1.descripcion}`;
        scroll.appendChild(scroll_pag);
    
    
    }
    console.log(scroll)
    factproductos.innerHTML='';
    factproductos.appendChild(scroll);}


console.log(listaProductos);