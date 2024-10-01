export const gruposDeProductos = [
  {
    nombre: 'Detalles simples',
    productos: [
      {
        id: 1,
        nombre: 'Caramelo',
        descripcion: "Dulce sorpresa visual que combina practicidad y diversión: un pastel de pañales en forma de caramelo gigante, decorado con cintas y accesorios coloridos.",
        precioBase: 18,
        imagenes: ['/caramelo.webp', '/caramelo2.webp'],
        orientacionImagen: 'horizontal',
        descripcionDetallada: "Nuestro pastel de pañales 'Caramelo' es una deliciosa sorpresa visual que encantará a padres y bebés por igual. Diseñado con esmero para parecer un caramelo gigante, este regalo único combina practicidad y diversión en un solo paquete.",
        caracteristicas: [
          "Diseño único en forma de caramelo gigante",
          "20 pañales de alta calidad (tamaño a elegir)",
          "Par de calcetines para bebé incluidos",
          "Decorado con cintas y accesorios coloridos",
          "Perfecto como centro de mesa para baby showers",
          "Combina utilidad y estética en un solo regalo"
        ],
        contenido: [
          "20 pañales de alta calidad (tamaño a elegir)",
          "1 par de calcetines para bebé",
          "Envoltorio de tul en colores vibrantes",
          "Cintas decorativas"
        ]
      },
      {
        id: 2,
        nombre: 'Moto',
        descripcion: 'Regalo perfecto para futuros pilotos: una moto de pañales que combina practicidad y diversión, ideal para baby showers o como regalo de bienvenida.',
        precioBase: 30,
        imagenes: ['/moto.webp'],
        orientacionImagen: 'horizontal',
        descripcionDetallada: "Nuestra Moto de Pañales es el regalo perfecto para los padres que sueñan con un futuro piloto en la familia. Este diseño único combina la practicidad de los pañales con la diversión de una moto, creando un regalo que es tanto útil como visualmente impactante. Ideal para baby showers o como regalo de bienvenida, esta moto de pañales seguramente arrancará sonrisas y emoción.",
        caracteristicas: [
          "Diseño único en forma de moto",
          "26 pañales de talla 1, perfectos para recién nacidos",
          "Peluche decorativo para añadir un toque tierno",
          "Nombre personalizado para hacer el regalo aún más especial",
          "Ideal como centro de atención en baby showers o como regalo de nacimiento"
        ],
        contenido: [
          "26 pañales de talla 1",
          "1 Peluche decorativo similar al de las imágenes",
          "Nombre personalizado en la moto de pañales",
          "Materiales y decoración para la estructura de la moto"
        ]
      },
      {
        id: 3,
        nombre: 'Batería',
        descripcion: 'Para los padres más marchosos: una tarta de pañales en forma de batería, combinando utilidad con diversión musical.',
        precioBase: 30,
        imagenes: ['/bateria.webp','/bateria2.webp'],
        orientacionImagen: 'horizontal',
        descripcionDetallada: "Nuestra tarta de pañales en forma de batería es el regalo perfecto para los padres más marchosos. Este diseño único combina la practicidad de los pañales con la diversión de un set de batería, creando un regalo que es tanto útil como visualmente impactante. Ideal para baby showers o como regalo de bienvenida, esta batería de pañales seguramente hará que el nuevo bebé sea la estrella del rock en la familia.",
        caracteristicas: [
          "Diseño único en forma de batería",
          "26 pañales de talla 1, perfectos para recién nacidos",
          "Peluche decorativo para añadir un toque tierno",
          "Nombre personalizado para hacer el regalo aún más especial",
          "Ideal como centro de atención en baby showers o como regalo de nacimiento",
          "Perfecto para padres amantes de la música o futuros rockeros"
        ],
        contenido: [
          "26 pañales de talla 1",
          "1 Peluche decorativo similar al de las imágenes",
          "Nombre personalizado en la tarta de pañales",
          "Materiales y decoración para la estructura de la batería"
        ]
      },
    ]
  },
  {
    nombre: 'Pasteles de pañales',
    productos: [
      {
        id: 4,
        nombre: 'Pastel de 2 pisos',
        descripcion: 'Tarta de pañales compacta y encantadora, perfecta para dar la bienvenida a un recién nacido con estilo y practicidad.',
        precioBase: 25,
        imagenes: ['/2pisos2.webp','/2pisos1.webp','/2pisos3.webp'],
        orientacionImagen: 'vertical',
        opciones: [
          { id: 1, nombre: 'Agregar 2 detalles', precio: 5 },
          { id: 2, nombre: 'Agregar 5 detalles', precio: 10 },
        ],
        descripcionDetallada: "Nuestra tarta de pañales de 2 pisos es un regalo práctico y encantador, perfecto para dar la bienvenida a un recién nacido. Combina utilidad y estética en un diseño compacto y atractivo, ideal para aquellos que buscan un regalo más pequeño pero igualmente especial.",
        caracteristicas: [
          "24 pañales de talla 1, perfectos para recién nacidos",
          "Peluche decorativo",
          "Calcetines o babero incluidos",
          "Nombre personalizado en la tarta",
          "Diseño de 2 pisos compacto y atractivo",
          "Ideal como regalo para baby showers o nacimientos"
        ],
        contenido: [
          "24 pañales de talla 1",
          "1 Peluche decorativo",
          "1 par de calcetines o 1 babero (según disponibilidad)",
          "Nombre personalizado en la tarta",
          "Decoración y materiales para la estructura de 2 pisos"
        ]
      },
      {
        id: 5,
        nombre: 'Pastel de 3 pisos',
        descripcion: 'Regalo práctico y encantador que combina utilidad y estética en un diseño de tres pisos, ideal para baby showers o nacimientos.',
        precioBase: 30,
        imagenes: ['/3pisos1.webp','/3pisos2.webp','/3pisos3.webp','/3pisos4.webp'],
        orientacionImagen: 'vertical',
        opciones: [
          { id: 3, nombre: 'Agregar 2 detalles', precio: 5 },
          { id: 4, nombre: 'Agregar 5 detalles', precio: 10 },
        ],
        descripcionDetallada: "Nuestro pastel de pañales de 3 pisos es un regalo práctico y encantador para dar la bienvenida al nuevo bebé. Combina utilidad con estética, ofreciendo una presentación hermosa que incluye pañales de alta calidad y accesorios esenciales para el recién nacido.",
        caracteristicas: [
          "34 pañales de talla 1, perfectos para recién nacidos",
          "Peluche decorativo",
          "Calcetines o babero incluidos",
          "Nombre personalizado en la tarta",
          "Diseño de 3 pisos visualmente atractivo",
          "Ideal como regalo para baby showers o nacimientos"
        ],
        contenido: [
          "34 pañales de talla 1",
          "1 Peluche decorativo",
          "1 par de calcetines o 1 babero (según disponibilidad)",
          "Nombre personalizado en la tarta",
          "Decoración y materiales para la estructura de 3 pisos"
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
        descripcion: 'Creación mágica que transforma cualquier baby shower en un cuento de hadas, con base redonda y diseño encantador.',
        precioBase: 35,
        imagenes: ['/castillomediano.webp','/castillomediano2.webp','/castillomediano3.webp'],
        orientacionImagen: 'horizontal',
        opciones: [
          { id: 5, nombre: 'Agregar 2 detalles', precio: 5 },
        ],
        descripcionDetallada: "Nuestro 'Castillo mediano' es una creación mágica que transformará cualquier baby shower en un cuento de hadas. Con su base redonda y su diseño encantador, este castillo de pañales es el regalo perfecto para dar la bienvenida al nuevo príncipe o princesa. Combina practicidad con un toque de fantasía, ofreciendo tanto pañales esenciales como accesorios adorables.",
        caracteristicas: [
          "Diseño único de castillo con base redonda",
          "38 pañales de talla 1, ideales para recién nacidos",
          "Peluche decorativo incluido",
          "Nombre personalizado en el castillo",
          "Perfecto como centro de mesa para baby showers o como regalo de bienvenida"
        ],
        contenido: [
          "38 pañales de talla 1",
          "1 Peluche decorativo similar al de las imágenes",
          "Nombre personalizado del bebé en el castillo",
          "Materiales y decoración para la estructura del castillo"
        ]
      },
      {
        id: 7,
        nombre: 'Castillo grande',
        descripcion: 'Impresionante castillo de pañales con base rectangular, perfecto para dar la bienvenida al nuevo príncipe o princesa con estilo.',
        precioBase: 45,
        imagenes: ['/castillogrande.webp','/castillogrande2.webp'],
        orientacionImagen: 'horizontal',
        opciones: [
          { id: 6, nombre: 'Agregar 2 detalles', precio: 5 }
        ],
        descripcionDetallada: "Nuestro 'Castillo grande' es una impresionante creación que hará las delicias de cualquier baby shower o celebración de bienvenida al bebé. Con su base rectangular y su majestuoso diseño, este castillo de pañales es el regalo perfecto para los nuevos padres, combinando practicidad y fantasía en un solo paquete.",
        caracteristicas: [
          "Diseño imponente de castillo con base rectangular",
          "48 pañales de talla 1, ideales para recién nacidos",
          "Peluche decorativo como toque final encantador",
          "Perfecto como pieza central para baby showers o como regalo de bienvenida"
        ],
        contenido: [
          "48 pañales de talla 1",
          "1 Peluche decorativo similar al de las imágenes",
          "Materiales y decoración para la estructura del castillo grande"
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
        descripcion: 'Encantador carrito de pañales que combina practicidad y estilo, lleno de elementos esenciales para el cuidado del recién nacido.',
        precioBase: 50,
        imagenes: ['/carro.webp','/carrito2.webp','/carrito3.webp'],
        orientacionImagen: 'horizontal',
        descripcionDetallada: "Nuestro Carrito de Pañales es una creación encantadora que combina practicidad y estilo en un solo regalo. Diseñado para parecer un auténtico carrito de bebé, este conjunto no solo es visualmente atractivo, sino que también está lleno de elementos esenciales para el cuidado del recién nacido. Es el regalo perfecto para dar la bienvenida al nuevo miembro de la familia con un toque de originalidad y ternura.",
        caracteristicas: [
          "Diseño único en forma de carrito de bebé",
          "54 pañales de talla 1, ideales para recién nacidos",
          "Incluye 3 productos esenciales para el cuidado del bebé",
          "Peluche decorativo para añadir un toque tierno",
          "Nombre personalizado para hacer el regalo aún más especial",
          "Perfecto como centro de atención en baby showers o como regalo de bienvenida"
        ],
        contenido: [
          "54 pañales de talla 1",
          "3 productos para el cuidado del bebé",
          "1 Peluche decorativo similar al de las imágenes",
          "Nombre personalizado en el carrito de pañales",
          "Materiales y decoración para la estructura del carrito"
        ]
      },
      {
        id: 9,
        nombre: 'Coche',
        descripcion: 'Regalo práctico y atractivo que simula un coche de bebé, repleto de elementos esenciales para el cuidado del recién nacido.',
        precioBase: 50,
        imagenes: ['/coche.webp','/coche2.webp'],
        orientacionImagen: 'horizontal',
        descripcionDetallada: "Nuestro Coche de Pañales es un regalo encantador y práctico para los nuevos padres. Con su diseño ingenioso que simula un coche de bebé, este conjunto no solo es visualmente atractivo, sino que también está repleto de elementos esenciales para el cuidado del recién nacido. Es el regalo perfecto para dar la bienvenida al nuevo miembro de la familia con estilo y utilidad.",
        caracteristicas: [
          "Diseño único en forma de coche de bebé",
          "35 pañales de talla 1, ideales para recién nacidos",
          "Incluye un babero para el cuidado del bebé",
          "Peluche decorativo incluido",
          "Nombre personalizado para hacer el regalo aún más especial",
          "Perfecto como centro de atención en baby showers o como regalo de bienvenida"
        ],
        contenido: [
          "35 pañales de talla 1",
          "1 Babero",
          "1 Peluche decorativo",
          "Nombre personalizado en el coche de pañales",
          "Materiales y decoración para la estructura del coche"
        ]
      },
      {
        id: 10,
        nombre: 'Guitarra',
        descripcion: 'Tarta de pañales única en forma de guitarra, perfecta para padres amantes de la música o futuros rockeros.',
        precioBase: 50,
        imagenes: ['/guitarra.webp'],
        orientacionImagen: 'horizontal',
        descripcionDetallada: "Descubre nuestra tarta guitarra hecha con pañales: un regalo único y creativo para los padres amantes de la música. Esta tarta de pañales en forma de guitarra no solo es visualmente impresionante, sino también práctica, combinando la diversión de un instrumento musical con la utilidad de los pañales para el recién nacido.",
        caracteristicas: [
          "Diseño único en forma de guitarra",
          "45 pañales de talla 1, ideales para recién nacidos",
          "Peluche decorativo incluido",
          "Nombre personalizado en la tarta",
          "Perfecto para padres músicos o amantes de la música",
          "Combina funcionalidad con un diseño creativo y divertido"
        ],
        contenido: [
          "45 pañales de talla 1",
          "1 Peluche decorativo",
          "Nombre personalizado en la tarta de pañales",
          "Materiales y decoración para la estructura de la guitarra"
        ]
      },
      {
        id: 11,
        nombre: 'Raqueta de pádel',
        descripcion: 'Regalo creativo para padres deportistas: una raqueta de pádel hecha de pañales, combinando utilidad y diversión.',
        precioBase: 50,
        imagenes: ['/raqueta.webp','/raqueta2.webp'],
        orientacionImagen: 'horizontal',
        descripcionDetallada: "Nuestra Raqueta de Pádel de Pañales es el regalo perfecto para los padres aficionados al deporte. Este diseño creativo combina la practicidad de los pañales con la forma divertida de una raqueta de pádel, creando un regalo único que es tanto útil como visualmente impactante. Ideal para baby showers o como regalo de bienvenida, esta raqueta de pañales seguramente será un éxito entre los padres deportistas.",
        caracteristicas: [
          "Diseño único en forma de raqueta de pádel",
          "45 pañales de talla 1, ideales para recién nacidos",
          "Peluche decorativo incluido",
          "Nombre personalizado en la tarta",
          "Perfecto para padres aficionados al pádel o deportistas",
          "Combina funcionalidad con un diseño creativo y deportivo"
        ],
        contenido: [
          "45 pañales de talla 1",
          "1 Peluche decorativo",
          "Nombre personalizado en la tarta de pañales",
          "Materiales y decoración para la estructura de la raqueta"
        ]
      },
      {
        id: 12,
        nombre: 'Artes marciales',
        descripcion: 'Tarta de pañales temática de artes marciales, ideal para padres aficionados a los deportes de combate o futuros campeones.',
        precioBase: 50,
        imagenes: ['/ring2.webp','/ring1.webp'],
        orientacionImagen: 'horizontal',
        opciones: [
          { id: 7, nombre: 'Agregar 2 detalles', precio: 5 },
        ],
        descripcionDetallada: "Nuestra tarta de pañales de Artes Marciales es el regalo perfecto para los padres aficionados a los deportes de combate. Este diseño creativo combina la practicidad de los pañales con un tema de artes marciales, creando un regalo único que es tanto útil como visualmente impactante. Ideal para baby showers o como regalo de bienvenida, esta tarta de pañales seguramente inspirará al futuro campeón de la familia.",
        caracteristicas: [
          "Diseño temático de artes marciales",
          "45 pañales de talla 1, ideales para recién nacidos",
          "Incluye 2 detalles relacionados con las artes marciales",
          "Peluche decorativo incluido",
          "Nombre personalizado en la tarta",
          "Perfecto para padres aficionados a las artes marciales o deportes de combate"
        ],
        contenido: [
          "45 pañales de talla 1",
          "2 detalles relacionados con las artes marciales",
          "1 Peluche decorativo",
          "Nombre personalizado en la tarta de pañales",
          "Materiales y decoración para la estructura temática"
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
        descripcion: 'Servicio de personalización total: transformamos tu idea en una tarta de pañales única, perfecta para regalos temáticos o con significado especial.',
        precioBase: 60,
        imagenes: ['/regalo.webp'],
        orientacionImagen: 'horizontal',
        opciones: [
          { id: 8, nombre: 'Agregar 2 detalles', precio: 5 },
          { id: 9, nombre: 'Agregar 5 detalles', precio: 10 },
        ],
        descripcionDetallada: "Con nuestro servicio 'Tu idea hecha regalo', llevamos la personalización al siguiente nivel. Ya sea que tengas en mente un tema específico, un hobby único o cualquier concepto especial, nosotros lo transformaremos en una tarta de pañales completamente personalizada. Este servicio permite crear un regalo verdaderamente único y significativo para el nuevo bebé y sus padres.",
        caracteristicas: [
          "Diseño completamente personalizado según tus especificaciones",
          "Incluye pañales y accesorios esenciales para el cuidado del bebé",
          "Posibilidad de incorporar elementos temáticos específicos",
          "Nombre personalizado incluido en el diseño",
          "Perfecto para regalos temáticos o con significado especial",
          "Ideal para quienes buscan un regalo verdaderamente único"
        ],
        contenido: [
          "Pañales de talla 1",
          "Accesorios para el cuidado del bebé (según el diseño elegido)",
          "Elementos decorativos personalizados",
          "Nombre personalizado en el regalo",
          "Materiales y decoración para la estructura personalizada"
        ]
      },
    ]
  }
];
