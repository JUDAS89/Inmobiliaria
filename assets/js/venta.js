//DOM
const propiedadesVentaCard=document.querySelector(".row")

//VARIABLES
const propiedadesVenta=[
    {
        name:'Apartamento de lujo en zona exclusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        adress: '123 Luxury Lane, Prestige Suburb, CA 45678',
        bedrooms: 4,
        bathrooms: 4,
        cost: 5000,  
        smoke: false,
        pets: false
    },
    {
        name:'Apartamento acogedor en la montaña',
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        adress: '789 Mountain Road, Summit Peaks, CA 23456',
        bedrooms: 2,
        bathrooms: 1,
        cost: 1200,  
        smoke: true,
        pets: true
    },
    {
        name:'Penthouse de lujo con terraza panorámica',
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        adress: '567 Skyline Avenue, Skyview City, CA 56789',
        bedrooms: 3,
        bathrooms: 3,
        cost: 4500,  
        smoke: false,
        pets: true
    },
    {
        name:'Apartamento exclusivo en la playa',
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: 'Apartamento en zona apartada con vista y acceso envidiable a playa cristalina',
        adress: '958 Beach lane, Concon City, CA 565656',
        bedrooms: 2,
        bathrooms: 3,
        cost: 3000,  
        smoke: true,
        pets: false
    }
]

//FUNCIONES
for (let propiedad of propiedadesVenta) {
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
    propiedadesVentaCard.innerHTML+=template
}
