//DOM
const propiedadesAlquilerCard=document.querySelector(".row")

//VARIABLES
const propiedadesAlquiler=[
    {
        name:'Apartamento en el centro de la ciudad',
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        adress: '123 Main Street, Anytown, CA 91234',
        bedrooms: 2,
        bathrooms: 2,
        cost: 2000,  
        smoke: false,
        pets: true
    },
    {
        name:'Apartamento luminoso con vista al mar',
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        adress: '456 Ocean Avenue, Seaside Town, CA 56789',
        bedrooms: 3,
        bathrooms: 3,
        cost: 2500,  
        smoke: true,
        pets: true
    },
    {
        name:'Condominio moderno en zona residencial',
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        adress: '123 Main Street, Anytown, CA 91234',
        bedrooms: 2,
        bathrooms: 2,
        cost: 2200,  
        smoke: false,
        pets: false
    },
    {
        name:'Casa Rural en medio del bosque',
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        description: 'Casa rural instalada en medio de verde bosque ideal para apartarse y disfrutar de la naturaleza',
        adress: '272 Mountain Road, Aniany Peaks, CA 91333',
        bedrooms: 1,
        bathrooms: 1,
        cost: 1000,  
        smoke: false,
        pets: true
    }
]

//FUNCIONES
for (let propiedad of propiedadesAlquiler) {
    const template =`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src=${propiedad.src} class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.name}</h5>
                    <p class="card-text">${propiedad.description}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.adress}</p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones |
                        <i class="fas fa-bath"></i>  ${propiedad.bathrooms} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.cost}</p>
                        <p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>
                    <p class="${propiedad.pets? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.pets? 'fa-paw' : 'fa-ban'}"></i>
                        ${propiedad.smoke? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
    `
    
    propiedadesAlquilerCard.innerHTML+=template
}
