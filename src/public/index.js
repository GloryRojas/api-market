var App = new Vue ({
    el: '#App',
    data: {
        productos : [],
        popup: false,
        FormularioProducto: false,
        edit : false,
        delete : false,
        id: null
    },

    methods: {
        popupActive() {  
            this.popup=!this.popup;
        },
        formularioProductoActive(){
            this.FormularioProducto=!this.FormularioProducto;
        },

        addproduct(){
            this.edit =!this.edit;
        },

        propagation(event){
            event.stopPropagation();
        },
        formulario(event){
            event.stopPropagation();
        },

        getOwner(e){
            e.preventDefault();
            let idOnwer = e.target.owner.value;
            location.href = `/productOwner/${idOnwer}`;
        },
    }
});





