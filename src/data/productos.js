export const gruposDeProductos = [
  {
    nombre: 'Productos de 18€',
    productos: [
      {
        id: 1,
        nombre: 'Ensalada César',
        descripcion: 'Lechuga fresca con pollo a la parrilla, crutones y aderezo César',
        precioBase: 18,
        imagen: '/patocastillo.jpg',
        opciones: [
          { id: 1, nombre: 'Agregar bacon', precio: 2 },
          { id: 2, nombre: 'Doble porción de pollo', precio: 3 },
        ]
      },
      {
        id: 2,
        nombre: 'Pizza Margarita',
        descripcion: 'Pizza clásica con salsa de tomate, mozzarella y albahaca',
        precioBase: 18,
        imagen: '/raqueta.jpg',
        opciones: [
          { id: 3, nombre: 'Borde relleno de queso', precio: 2 },
          { id: 4, nombre: 'Tamaño familiar', precio: 4 },
        ]
      }
    ]
  },
  {
    nombre: 'Productos de 25€',
    productos: [
      {
        id: 3,
        nombre: 'Sushi Combo',
        descripcion: 'Selección variada de 16 piezas de sushi',
        precioBase: 25,
        imagen: '/guitarra.jpg',
        opciones: [
          { id: 5, nombre: 'Agregar sashimi', precio: 5 },
          { id: 6, nombre: 'Incluir tempura', precio: 7 },
        ]
      },
      {
        id: 4,
        nombre: 'Parrillada de Carnes',
        descripcion: 'Selección de carnes a la parrilla con guarnición',
        precioBase: 25,
        imagen: '/caramelo.jpg',
        opciones: [
          { id: 7, nombre: 'Agregar chorizo', precio: 3 },
          { id: 8, nombre: 'Incluir salsa chimichurri', precio: 2 },
        ]
      }
    ]
  },
  {
    nombre: 'Productos de 30€',
    productos: [
      {
        id: 5,
        nombre: 'Menú Degustación',
        descripcion: 'Menú de 5 platos con maridaje de vinos',
        precioBase: 30,
        imagen: '/castillo.jpg',
        opciones: [
          { id: 9, nombre: 'Postre especial', precio: 5 },
          { id: 10, nombre: 'Cata de quesos', precio: 8 },
        ]
      },
      {
        id: 6,
        nombre: 'Mariscada',
        descripcion: 'Selección de mariscos frescos del día',
        precioBase: 30,
        imagen: '/guita.png',
        opciones: [
          { id: 11, nombre: 'Agregar langosta', precio: 15 },
          { id: 12, nombre: 'Incluir botella de vino blanco', precio: 10 },
        ]
      }
    ]
  }
];
