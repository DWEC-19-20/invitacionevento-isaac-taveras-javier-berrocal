/*
 --Cómo Administrador del evento, querría añadir invitados al evento.
 --Cómo Administrador del evento, querría poder confirmar invitados al evento.
 --Cómo Administrador del evento poder editar el nombre de cada asistente al evento.
 Cómo Administrador del evento querría poder filtrar los invitados para mostrar solo los que tienen confirmada la asistencia.
 --Cómo Administrador del evento, querría poder eliminar invitados al evento
 --Cómo Administrador del evento me confirme antes de borrar un invitado al evento.
 Cómo Administrador del evento querría que no se pudiera repetir el nombre de un invitado al evento (sin añadir uno vacio)

*/
const divWrapper=document.getElementsByClassName("wrapper");
const header=document.getElementsByTagName("header");
const form=document.getElementsByTagName("form")[0];
const inputInvitacion=form.firstElementChild;
const botonInvitacion=inputInvitacion.nextElementSibling;
const buttonEdit=document.getElementsByClassName("edit");
const divMain=document.getElementsByClassName("main")[0];
const h2=divMain.firstElementChild;
const ul=h2.nextElementSibling;
var u=document.createElement("ul");
u.setAttribute("id","listadoConfirmados");
document.getElementById("listaH3").style.color="blue";


      



//FORMA 1 DE HACER EL LISTADO DE CONFIRMADOS
/*document.getElementById("confirmados").addEventListener('change', e => {
    
    if(e.target.checked){
        
     
            if(document.getElementById("invitedList").querySelectorAll('[type="checkbox"]:checked')){
                alert("dentro de checkeado");
                var h3=document.createElement("h3");
                h3.innerHTML="<u>Listado de confirmados</u>";
                h3.style.color="blue";

                var checkbox=document.getElementById("invitedList").querySelectorAll('[type="checkbox"]:checked');

                document.getElementById("confirmados").appendChild(u);
               var p=document.createElement("p");
               p.innerHTML=elementoAnterior.textContent;
               lista.appendChild(p);
               
               

               

            }
  

        
    }

});*/



//ES ESTA FUNCIÓN PACO
document.getElementById("confirmados").addEventListener('change', e => {

if(document.getElementById("confirmados").checked==true){

        for(let x=0;x<document.getElementsByClassName("confirmo").length;x++){

            if(document.getElementsByClassName("confirmo")[x].checked){
            
            
        
            var label=document.getElementsByClassName("confirmo")[x].parentElement;
            var span=label.previousElementSibling;
            var contenido=document.createElement("span");
            contenido.textContent=span.textContent;
            var content=contenido.textContent;
            var list=document.getElementById("lista");
            
           

            document.getElementById("lista").appendChild(contenido);
            var br=document.createElement("br");
            document.getElementById("lista").appendChild(br);
           

            
            }
        

            else{

                var label=document.getElementsByClassName("confirmo")[x].parentElement;
                var span=label.previousElementSibling;
                var contenido=document.createElement("span");
                contenido.innerHTML=span.innerHTML;
                
                document.getElementById("lista").remove(getElementsByTagName("span")[x]);

            }
        }
        document.getElementById("lista").style.display="block";

    }

    else{

        document.getElementById("lista").style.display="none";

    }

 
    

});




//else{

    /*for(let x=0;x<document.getElementsByTagName("p").length;x++){

        if(document.getElementsByClassName("confirmo")[x].checked){
            

                var p=document.getElementByTagName("p")[x];
                document.getElementById("lista").removeChild(p);
    
            
    
            
        }

    }*/
    //document.getElementById("lista").style.display="none";    

//}

//});




function removeB(e){

        if(confirm("¿Estás seguro de querer eliminar este elemento?")){

            var boton=e.target;
            var elemento=boton.parentElement;
            document.getElementById("invitedList").removeChild(elemento);
        }
}

function editB(e){

        e.preventDefault();
        var newName=prompt("Introduce el nuevo nombre que deseas poner: ");
        var botonE=e.target;
        var padre=botonE.parentElement;
        var primerHijo=padre.firstElementChild;
        primerHijo.innerHTML=newName;
}

/*function repetido(){

    for(let i=0;i<document.getElementsByName("nombre").length;i++){

        if(document.getElementsByName("name")[0].value==document.getElementsByName("nombre")[i].value){

            //alert("El valor del elemento input: "+document.getElementsByName("name")[0].value+" es igual al valor del elemnto span: "+document.getElementsByName("nombre")[i].value);
            return true;
            break;

        }
        else{
            return false;
        }

    }

}*/



for(let j=0;j<document.getElementsByClassName("remove").length;j++){

    document.getElementsByClassName("remove")[j].addEventListener("click",removeB);

}


for(let y=0;y<document.getElementsByClassName("edit").length;y++){

    document.getElementsByClassName("edit")[y].addEventListener("click",editB);

}


botonInvitacion.addEventListener("click",function(e){
    e.preventDefault();
    if(inputInvitacion.value==''){
        alert("campo vacío.No se hace nada");

    }
    /*else if(repetido){
        alert("Repetido");
    }*/
    else{
        alert("campo relleno");

        var nuevoElemento=document.createElement("li");

        var spanLi=document.createElement("span");
        spanLi.textContent=inputInvitacion.value;
        spanLi.setAttribute("name","nombre");
        nuevoElemento.appendChild(spanLi);

        var label=document.createElement("label");
        label.className="confirmed";
        label.textContent="Confirmed";
        var checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.className="confirmo";

        label.appendChild(checkbox);
        nuevoElemento.appendChild(label);

        var buttonEdit=document.createElement("button");
        buttonEdit.className="edit";
        buttonEdit.textContent="edit";
        nuevoElemento.appendChild(buttonEdit);
        buttonEdit.addEventListener("click",editB);

        var buttonRemove=document.createElement("button");
        buttonRemove.setAttribute("class","remove");
        buttonRemove.textContent="remove";
        nuevoElemento.appendChild(buttonRemove);
        buttonRemove.addEventListener("click",removeB);

        document.getElementById("invitedList").appendChild(nuevoElemento);
    }

});







    

