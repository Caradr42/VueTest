//console.log("AAAAA")
var app = 	new Vue({
    el: '#app', 
    data: { 
        message: 'México es el primer destino turístico para extranjeros dentro de América Latina en 2019 y es el sexto lugar a nivel mundial en términos de llegadas de turistas internacionales',
        item: '',
        items: [
            'Chichén Itzá (Yucatán)',
            'Cancún e Isla Mujeres (Quintana Roo)',
            'Xochimilco (Ciudad de Mexico)',
            'Parque Xcaret (Quintana Roo)',
            'San Cristobal de las Casas (Chiapas)',
            'Hierve el Agua (Oaxaca)',
            'Islas Marietas (Nayarit)',
            'Catedral de Guadalajara (Jalisco)',
            'Prismas Basálticos (Hidalgo)',
            'Playa del Carmen (Quintana Roo)'
        ],
        isHidden: false,
        editar: false
    }
});