
const observer = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
        if(mutation.addedNodes.length){
            console.log('Añadido: ', mutation.addedNodes[0]);
        }
        if(mutation.removedNodes.length){
            console.log('Elimina: ', mutation.removedNodes[0]);
        }
        console.log('Type: ',mutation.type);

    });
});



//indicar el target que deseamos observar
const frutas = document.querySelector('ul.frutas');
const observerOptions = {
    childList: true,     // observa hijos directos
    subtree: true,       // observa que se crean, destruyen elementos
    attributes: true,    //observa attributis
    characterData: true  //observa el textContent
    //attributeOldValue – si es true, tanto el valor viejo como el nuevo del atributo son pasados al callback (ver abajo), de otro modo pasa solamente el nuevo (necesita la opción attributes),
    //characterDataOldValue – si es true, tanto el valor viejo como el nuevo de node.data son pasados al callback (ver abajo), de otro 
};

observer.observe(frutas,observerOptions);

