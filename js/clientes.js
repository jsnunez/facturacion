const listaClientes=[];
faker.locale = 'es';
const cargarClientes=()=>{   
    for(let i=0;i<=10;i++){
        const nuevoCliente={
            id:i,
            nombre:faker.name.findName(),
            edad:  Math.floor(Math.random() * (50 - 18) + 18),
            
            email: faker.internet.email()
        };
        listaClientes.push(nuevoCliente);
    }    
}

const cargarFormularioClientes=()=>{
      const clientesForm = document.getElementById('clientes-form');
      clientesForm.innerHTML = `
        <form>
            <label for="nombreCliente">Nombre del Cliente:</label>
            <input type="text" id="nombreCliente" required>
            <label for="edadCliente">Edad del Cliente:</label>
            <input type="number" id="edadCliente" required>
            <label for="emailCliente">Correo Electrónico del Cliente:</label>
            <input type="email" id="emailCliente" required>
            <button type="button" onclick="crearCliente()">Crear Cliente</button>
            <button type="button" onclick="mostrarListado()">Ver Listado de Clientes</button>
            <!-- Aquí se puede añadir más funcionalidad, como modificar y eliminar clientes -->
        </form>
    `;
    const listadoClientes = document.getElementById('listado-clientes');
    listadoClientes.style.display='none';
}

const crearCliente=()=>{
    const nombreInput=document.getElementById('nombreCliente');
    const edadInput=document.getElementById('edadCliente');
    const emailInput=document.getElementById('emailCliente');

    const nombre=nombreInput.value;
    const edad=edadInput.value;
    const email=emailInput.value;

    const nuevoCliente={
        id:listaClientes.length,
        nombre:nombre,
        edad: edad,
        email: email
    }

    listaClientes.push(nuevoCliente);

    nombreInput.value='';
    edadInput.value='';
    emailInput.value='';

    alert('Cliente creado con éxito!');
    console.log(listaClientes);

    return nuevoCliente;

}

const mostrarListado=()=>{
    const clientesForm = document.getElementById('clientes-form');
    const listadoClientes = document.getElementById('listado-clientes');
    
  
    
    clientesForm.style.display='none';
    listadoClientes.style.display='block';

    const ul=document.createElement('ul');

    for(const cliente of listaClientes){
        const li=document.createElement('li');
        li.textContent= `ID: ${cliente.id}, Nombre: ${cliente.nombre}, Edad: ${cliente.edad}, Email: ${cliente.email}`;
        ul.appendChild(li);


    }

    listadoClientes.innerHTML='';
    listadoClientes.appendChild(ul);



    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',volverFormulario);
    listadoClientes.appendChild(volverButton);
    
}

const volverFormulario=()=>{
    const clientesForm=document.getElementById('clientes-form');
    const listadoClientes = document.getElementById('listado-clientes');

    listadoClientes.style.display='none';
    clientesForm.style.display='block';
    
}

const cargarClientesf=()=>{   
    const factcliente = document.getElementById('factcliente');
    const select=document.createElement('select');
    select.id = "nombreselect"; 
    
    for(const cliente1 of listaClientes){
    
        const option=document.createElement('option');
        option.textContent= ` ${cliente1.nombre}`;
        select.appendChild(option);
    
    
    }
    console.log(select)
    factcliente.innerHTML='';
    factcliente.appendChild(select);}


console.log(listaClientes);