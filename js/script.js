/*
 -Cómo Administrador del evento, querría añadir invitados al evento.
 -Cómo Administrador del evento, querría poder confirmar invitados al evento.
 Cómo Administrador del evento poder editar el nombre de cada asistente al evento.
 Cómo Administrador del evento querría poder filtrar los invitados para mostrar solo los que tienen confirmada la asistencia.
 -Cómo Administrador del evento, querría poder eliminar invitados al evento
 -Cómo Administrador del evento me confirme antes de borrar un invitado al evento.
 Cómo Administrador del evento querría que no se pudiera repetir el nombre de un invitado al evento (sin añadir uno vacio)
//AL AÑADIR NUEVOS ELEMENTOS NO FUNCIONAN SUS PARTES
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




for(let j=0;j<document.getElementsByClassName("remove").length;j++){

    document.getElementsByClassName("remove")[j].addEventListener("click",function(){
        
        
        if(confirm("¿Estás seguro de querer eliminar este elemento?")){

            var boton=document.getElementsByClassName("remove")[j];
            var elemento=document.getElementsByClassName("remove")[j].parentElement;
            ul.removeChild(elemento);

        }

    });

}


for(let y=0;y<document.getElementsByClassName("edit").length;y++){
document.getElementsByClassName("edit")[y].addEventListener("click",function(e){

    e.preventDefault();
    var newName=prompt("Introduce el nuevo nombre que deseas poner: ");
    document.getElementsByName("nombre")[y].innerHTML=newName;


});

}


botonInvitacion.addEventListener("click",function(e){
    e.preventDefault();
    if(inputInvitacion.value==''){
        alert("campo vacío.No se hace nada");
    }
    else{
        alert("campo relleno");

        var nuevoElemento=document.createElement("li");

        var spanLi=document.createElement("span");
        spanLi.textContent=inputInvitacion.value;
        spanLi.setAttribute("name","nombre");
        nuevoElemento.appendChild(spanLi);

        var label=document.createElement("label");
        label.textContent="Confirmed";
        var checkbox=document.createElement("input");
        checkbox.type="checkbox";

        label.appendChild(checkbox);
        nuevoElemento.appendChild(label);

        var buttonEdit=document.createElement("button");
        buttonEdit.className="edit";
        buttonEdit.textContent="edit";
        nuevoElemento.appendChild(buttonEdit);

        var buttonRemove=document.createElement("button");
        buttonRemove.setAttribute("class","remove");
        buttonRemove.textContent="remove";
        nuevoElemento.appendChild(buttonRemove);
        document.getElementById("invitedList").appendChild(nuevoElemento);
    }

});







    

