// DOM Elements

let cardMainV = document.querySelector(".ventaMain")
let cardMainA = document.querySelector(".alquilerMain")
let propertyCardA = document.querySelector(".productoA")
let propertyCardV = document.querySelector(".productoB")

//Variables

const numberOfRenders = 3
let renderedItemCountV = 0
let renderedItemCountA = 0


const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
]
    

const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón e la ciudad, cerca de todo',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 1,
    costo: 2000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    }
]


    

//Functions
    function renderMain() {
    //Templates main venta
    for (let propiedadMainV of propiedades_venta) {
        if (renderedItemCountV >= numberOfRenders) {
            break
        }
        if (propiedadMainV.smoke == true && propiedadMainV.pets == true) {
            const templateMainV = `
            <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedadMainV.src}" alt="Foto producto">
                <div class="card-body">
                    <h5 class="card-title"> ${propiedadMainV.nombre}</h5>
                    <p class="card-text"> ${propiedadMainV.descripcion}</p>
                    <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainV.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedadMainV.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainV.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedadMainV.costo}</p>
                    <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                    <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
                </div>
            </div>
            `
            cardMainV.innerHTML += templateMainV
            renderedItemCountV++
        } else if (propiedadMainV.smoke == false && propiedadMainV.pets == false){
            const templateMainV = `
            <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedadMainV.src}" alt="Foto producto">
                <div class="card-body">
                    <h5 class="card-title"> ${propiedadMainV.nombre}</h5>
                    <p class="card-text"> ${propiedadMainV.descripcion}</p>
                    <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainV.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedadMainV.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainV.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedadMainV.costo}</p>
                    <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                    <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
                </div>
            </div>
            `
            cardMainV.innerHTML += templateMainV
            renderedItemCountV++
        } else if (propiedadMainV.smoke == true && propiedadMainV.pets == false) {
            const templateMainV = `
            <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedadMainV.src}" alt="Foto producto">
                <div class="card-body">
                    <h5 class="card-title"> ${propiedadMainV.nombre}</h5>
                    <p class="card-text"> ${propiedadMainV.descripcion}</p>
                    <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainV.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedadMainV.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainV.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedadMainV.costo}</p>
                    <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                    <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
                </div>
            </div>
            `
            cardMainV.innerHTML += templateMainV
            renderedItemCountV++
        } else if (propiedadMainV.smoke == false && propiedadMainV.pets == true) {
            const templateMainV = `
            <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedadMainV.src}" alt="Foto producto">
                <div class="card-body">
                    <h5 class="card-title"> ${propiedadMainV.nombre}</h5>
                    <p class="card-text"> ${propiedadMainV.descripcion}</p>
                    <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainV.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedadMainV.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainV.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedadMainV.costo}</p>
                    <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                    <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
                </div>
            </div>
            `
            cardMainV.innerHTML += templateMainV
            renderedItemCountV++
        }
        }
    
    //Templates main alquiler
    for (let propiedadMainA of propiedades_alquiler) {
        if (renderedItemCountA >= numberOfRenders) {
            break
        }
        if (propiedadMainA.smoke == true && propiedadMainA.pets == true) {
        const templateMainA = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadMainA.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadMainA.nombre}</h5>
                <p class="card-text"> ${propiedadMainA.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainA.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadMainA.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainA.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadMainA.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
        </div>
        `
        cardMainA.innerHTML += templateMainA
        renderedItemCountA++
    } else if (propiedadMainA.smoke == false && propiedadMainA.pets == false) {
        const templateMainA = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadMainA.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadMainA.nombre}</h5>
                <p class="card-text"> ${propiedadMainA.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainA.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadMainA.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainA.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadMainA.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
            </div>
        </div>
        `
        cardMainA.innerHTML += templateMainA
        renderedItemCountA++
    } else if (propiedadMainA.smoke == true && propiedadMainA.pets == false) {
        const templateMainA = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadMainA.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadMainA.nombre}</h5>
                <p class="card-text"> ${propiedadMainA.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainA.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadMainA.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainA.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadMainA.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
            </div>
        </div>
        `
        cardMainA.innerHTML += templateMainA
        renderedItemCountA++
    } else if (propiedadMainA.smoke == false && propiedadMainA.pets == true) {
        const templateMainA = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadMainA.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadMainA.nombre}</h5>
                <p class="card-text"> ${propiedadMainA.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadMainA.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadMainA.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadMainA.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadMainA.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
        </div>
        `
        cardMainA.innerHTML += templateMainA
        renderedItemCountA++
    }
    }
}

    //Templates Propiedades en Venta
    function renderVenta () {
    for (let propiedadV of propiedades_venta) {
        if (propiedadV.smoke == true && propiedadV.pets == true) {
        const templateV = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadV.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadV.nombre}</h5>
                <p class="card-text"> ${propiedadV.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadV.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadV.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadV.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadV.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
        </div>
        `
        propertyCardV.innerHTML += templateV
    } else if (propiedadV.smoke == false && propiedadV.pets == false){
        const templateV = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadV.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadV.nombre}</h5>
                <p class="card-text"> ${propiedadV.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadV.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadV.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadV.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadV.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
            </div>
        </div>
        `
        propertyCardV.innerHTML += templateV
    } else if (propiedadV.smoke == true && propiedadV.pets == false) {
        const templateV = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadV.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadV.nombre}</h5>
                <p class="card-text"> ${propiedadV.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadV.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadV.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadV.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadV.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
            </div>
        </div>
        `
        propertyCardV.innerHTML += templateV
    } else if (propiedadV.smoke == false && propiedadV.pets == true) {
        const templateV = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadV.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadV.nombre}</h5>
                <p class="card-text"> ${propiedadV.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadV.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadV.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadV.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadV.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
        </div>
        `
        propertyCardV.innerHTML += templateV
    }
    }
}
    //Templates Propiedades en Alquiler
    function renderAlquier() {
    for (let propiedadA of propiedades_alquiler) {
        if (propiedadA.smoke == true && propiedadA.pets == true) {
        const templateA = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadA.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadA.nombre}</h5>
                <p class="card-text"> ${propiedadA.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadA.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadA.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadA.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadA.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
        </div>
        `
        propertyCardA.innerHTML += templateA
    } else if (propiedadA.smoke == false && propiedadA.pets == false) {
        const templateA = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadA.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadA.nombre}</h5>
                <p class="card-text"> ${propiedadA.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadA.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadA.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadA.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadA.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
            </div>
        </div>
        `
        propertyCardA.innerHTML += templateA
    } else if (propiedadA.smoke == true && propiedadA.pets == false) {
        const templateA = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadA.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadA.nombre}</h5>
                <p class="card-text"> ${propiedadA.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadA.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadA.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadA.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadA.costo}</p>
                <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>
                <p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
            </div>
        </div>
        `
        propertyCardA.innerHTML += templateA
    } else if (propiedadA.smoke == false && propiedadA.pets == true) {
        const templateA = `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedadA.src}" alt="Foto producto">
            <div class="card-body">
                <h5 class="card-title"> ${propiedadA.nombre}</h5>
                <p class="card-text"> ${propiedadA.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedadA.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedadA.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedadA.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadA.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                <p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
        </div>
        `
        propertyCardA.innerHTML += templateA
    }
    }
}

//Events

if (document.title === "Main") {
    window.addEventListener("load", renderMain)
} else if (document.title === "Venta") {
    window.addEventListener("load", renderVenta)
} else if (document.title === "Alquiler") {
    window.addEventListener("load", renderAlquier)
}