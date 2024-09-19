export const gruposDeProductos = [
  {
    nombre: 'Detalles simples',
    productos: [
      {
        id: 1,
        nombre: 'Caramelo',
        descripcion: "Dulce sorpresa para el bebé: un pastel de pañales en forma de caramelo gigante, decorado con cintas y accesorios coloridos.",
        precioBase: 18,
        imagenes: ['/caramelo.jpg', '/caramelo2.jpg'],
        orientacionImagen: 'horizontal',
      },
      {
        id: 2,
        nombre: 'Moto',
        descripcion: 'Sobre ruedas.',
        precioBase: 30,
        imagenes: ['/moto.jpg'],
        orientacionImagen: 'horizontal',
      },
      {
        id: 3,
        nombre: 'Batería',
        descripcion: '¡Para los amantes del rock!',
        precioBase: 30,
        imagenes: ['/bateria.jpg','/bateria2.jpg'],
        orientacionImagen: 'horizontal',
      },
    ]
  },
  {
    nombre: 'Pasteles de pañales',
    productos: [
      {
        id: 4,
        nombre: 'Pastel de 2 pisos',
        descripcion: 'De 2 pisos',
        precioBase: 25,
        imagenes: ['/2pisos2.jpg','/2pisos1.jpg','/2pisos3.jpg',],
        orientacionImagen: 'vertical',
        opciones: [
          { id: 1, nombre: 'Agregar 2 detalles', precio: 5 },
          { id: 2, nombre: 'Agregar 5 detalles', precio: 10 },
        ]
      },
      {
        id: 5,
        nombre: 'Pastel de 3 pisos',
        descripcion: 'De 3 pisos',
        precioBase: 30,
        imagenes: ['/3pisos1.jpg','/3pisos2.jpg','/3pisos3.jpg','/3pisos4.jpg'],
        orientacionImagen: 'vertical',
        opciones: [
          { id: 3, nombre: 'Agregar 2 detalles', precio: 5 },
          { id: 4, nombre: 'Agregar 5 detalles', precio: 10 },
        ]
      }
    ]
  },
  {
    nombre: 'Castillos de pañales',
    productos: [
      {
        id: 6,
        nombre: 'Castillo mediano',
        descripcion: 'De base redonda.',
        precioBase: 35,
        imagenes: ['/castillomediano.jpg','/castillomediano2.jpg','/castillomediano3.jpg'],
        orientacionImagen: 'horizontal',
        opciones: [
          { id: 5, nombre: 'Agregar 2 detalles', precio: 5 },
        ]
      },
      {
        id: 7,
        nombre: 'Castillo grande',
        descripcion: 'De base rectangular.',
        precioBase: 45,
        imagenes: ['/castillogrande.jpg','/castillogrande2.jpg'],
        orientacionImagen: 'horizontal',
        opciones: [
          { id: 6, nombre: 'Agregar 2 detalles', precio: 5 }
        ]
      },
    ]
  },
  {
    nombre: 'Detalles elaborados',
    productos: [
      {
        id: 8,
        nombre: 'Carrito de bebé',
        descripcion: 'Una cesta original.',
        precioBase: 50,
        imagenes: ['/carro.jpg','/carrito2.jpg','/carrito3.jpg'],
        orientacionImagen: 'horizontal',
      },
      {
        id: 9,
        nombre: 'Coche',
        descripcion: 'Sobre ruedas.',
        precioBase: 50,
        imagenes: ['/coche.jpg','/coche2.jpg'],
        orientacionImagen: 'horizontal',
      },
      {
        id: 10,
        nombre: 'Guitarra',
        descripcion: 'Para futuros músicos.',
        precioBase: 50,
        imagenes: ['/guitarra.jpg'],
        orientacionImagen: 'horizontal',
      },
      {
        id: 11,
        nombre: 'Raqueta de pádel',
        descripcion: 'Para futuros deportistas.',
        precioBase: 50,
        imagenes: ['/raqueta.jpg','/raqueta2.jpg'],
        orientacionImagen: 'horizontal',
      },
      {
        id: 12,
        nombre: 'Artes marciales',
        descripcion: 'Para competidores.',
        precioBase: 50,
        imagenes: ['/ring2.jpg','/ring1.jpg'],
        orientacionImagen: 'horizontal',
        opciones: [
          { id: 7, nombre: 'Agregar 2 detalles', precio: 5 },
        ]
      }
    ]
  },
  {
    nombre: 'Detalles personalizados',
    productos: [
      {
        id: 13,
        nombre: 'Tu idea hecha regalo',
        descripcion: 'Creamos un regalo único basado en tu concepto. Tú lo imaginas, nosotros lo hacemos realidad.',
        precioBase: 60,
        imagenes: ['/regalo.png'],
        orientacionImagen: 'horizontal',
        opciones: [
          { id: 8, nombre: 'Agregar 2 detalles', precio: 5 },
          { id: 9, nombre: 'Agregar 5 detalles', precio: 10 },
        ]
      },
    ]
  }
];
