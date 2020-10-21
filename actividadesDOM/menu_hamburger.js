export default  function hamburgerMenu(panelBtn,panel,menuLink){
    const d = document;

    d.addEventListener("click",e => {
        //si el objecto que ocaciona el evento conincide con panel boton active la clase

        //el asterisco indica que si hacemos click en cualquier hijo de que encuentre en ese elemento tambien se cumple la funcion
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}