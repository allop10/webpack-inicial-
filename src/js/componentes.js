
import '../css/componentes.css';
//import paganni from '../assets/img/Pagani_zondaR.jpg';

export const saludar = (nombre) =>{
    console.log('Crear eqiqueta H1'); 

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`; 
    
    document.body.append(h1);

    //crear img
    // const img = document.createElement('img');
    //img.src = paganni; 
    //document.body.append(img);

}