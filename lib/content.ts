/* -------------------------------------------------------------------------
   CONTENIDO EDITABLE DEL SITIO
   Todo lo que Emi puede querer cambiar (textos, precios, testimonios,
   contacto) vive acá. No hace falta tocar los componentes.
   Los campos marcados con TODO son placeholders a confirmar.
------------------------------------------------------------------------- */

export const site = {
  nombre: "Emiliano Peralta",
  nombreCorto: "Emi Peralta",
  rol: "Entrenamiento para la salud y el deporte",
  ciudad: "Córdoba, Argentina",
  telefono: "3516571033",
  whatsapp: "5493516571033",
  email: "emiperaltahjk@gmail.com",
  instagram: "https://www.instagram.com/emilianoperaltaz/",
  url: "https://emiperalta.com.ar", // TODO: dominio final
};

export const waLink = (mensaje: string) =>
  "https://wa.me/" + site.whatsapp + "?text=" + encodeURIComponent(mensaje);

export const cta = {
  principal: waLink(
    "Hola Emi! Vi tu web y quiero empezar a entrenar. ¿Cómo arrancamos?"
  ),
  plan: waLink(
    "Hola Emi! Me interesa un plan de entrenamiento. ¿Me contás cómo funciona?"
  ),
  consulta: waLink("Hola Emi! Tengo una consulta antes de empezar."),
  centros: waLink(
    "Hola Emi! Tengo un gimnasio o centro de salud y me interesa tu asesoramiento."
  ),
};

/* Tienda (venta de suplementos) queda pendiente: todavía no tiene contenido
   propio, así que no se agrega al menú hasta que exista esa sección. */
export const nav = [
  { label: "Inicio", href: "#top" },
  { label: "Formación", href: "#formacion" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Método", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  nombre: "Emiliano Peralta",
  rol: "Profesor de Educación Física · Preparador Físico · Técnico Universitario en Actividad Física",
  /* Título grande del hero, ya partido en las dos líneas que se muestran. */
  titulo: ["Te enseño a moverte y entrenar", "para alcanzar tus objetivos."],
  subtitulo: "Entrenamiento basado en evidencia, adaptado a tu contexto.",
  tagline: "Entreno personas, no rutinas.",
  botones: {
    trabajar: "Trabajemos juntos",
    formacion: "Conocé mi formación",
    experiencia: "Mi experiencia",
  },
  /* Foto de la portada.
     modo "foto"    -> la imagen llena el bloque (foto normal, con fondo).
     modo "recorte" -> la imagen se apoya abajo sin recortarse, sobre un
                       fondo oscuro con halo detrás. Es el modo para la foto
                       de Emi sin fondo (PNG con transparencia). */
  foto: {
    src: "/images/emi-foto.jpg",
    alt: "Emiliano Peralta, profe de educación física, en el gimnasio",
    modo: "foto" as "foto" | "recorte",
    /* Solo se usa en modo "recorte": va detrás, oscurecido y desenfocado. */
    fondo: "/images/hero-fondo.jpg",
  },
  watermark: "PERALTA",
};

export const stats = [
  { valor: "4664", sufijo: "hs", label: "de formación universitaria" },
  { valor: "6", sufijo: "+", label: "clubes y centros donde trabajé" },
  { valor: "100", sufijo: "%", label: "de los planes son individuales" },
];

export const perfiles = {
  titulo: "Entreno personas, no rutinas",
  bajada:
    "El entrenamiento no empieza con una rutina. Empieza con una persona. Sus objetivos, su biografía motriz, sus posibilidades, su contexto y aquello que quiere conseguir. A partir de ahí evalúo, planifico y ajusto el entrenamiento.",
  items: [
    {
      titulo: "Nunca entrenaste",
      texto: "No te preocupes, la planificación se adapta a vos. Se aprende desde 0.",
      img: "/images/metodo.jpg",
      alt: "Persona entrenando en el gimnasio",
    },
    {
      titulo: "Volvés de una lesión",
      texto:
        "Adaptamos el entrenamiento para que contribuya a tu recuperación. Trabajo interdisciplinar con tu kinesiólogo.",
      img: "/images/about.jpg",
      alt: "Persona entrenando con barra en el gimnasio",
    },
    {
      titulo: "Tenés más de 60",
      texto:
        "Fuerza, equilibrio y autonomía. Entrenar para seguir haciendo tu vida sin depender de nadie.",
      img: "/images/perfil-adultos.jpg",
      alt: "Personas entrenando al aire libre",
    },
    {
      titulo: "Competís",
      texto:
        "Te ayudo a desarrollar tu potencial y rendimiento. Entrenamiento medido, no improvisado.",
      img: "/images/perfil-deportistas.jpg",
      alt: "Deportista entrenando fuerza en el gimnasio",
    },
  ],
};

/* ---- Formación ------------------------------------------------------- */

export const formacionSeccion = {
  titulo: "Formación",
};

export const formacionCredenciales = [
  {
    titulo: "Profesorado Universitario de Educación Física",
    lugar: "FEF IPEF",
    detalle: "4.º año · 2864 hs",
  },
  {
    titulo: "Tecnicatura Universitaria en Actividad Física",
    lugar: "Universidad Provincial de Córdoba",
    detalle: "1800 hs",
  },
  {
    titulo: "Preparador Físico Nivel 1",
    lugar: "Unión Argentina de Rugby (UAR)",
    detalle: "",
  },
];

export const capacitacionesSeccion = {
  titulo: "Cursos y capacitaciones",
};

export const capacitaciones = [
  {
    titulo: "RCP y primeros socorros",
    lugar: "Defensa Civil Córdoba",
    detalle: "Actualización continua · 2024, 2025, 2026",
  },
  {
    titulo: "Jornada internacional sobre entrenamiento, evaluación y actividad física",
    lugar: "Capacitaciones Urban",
    detalle: "Presencial · 12 hs · 27/09/25",
  },
  {
    titulo: "Congreso internacional sobre ejercicio físico y salud",
    lugar: "Cámara de Gimnasios de Córdoba",
    detalle: "Presencial · 12 hs",
  },
];

export const areasExperienciaSeccion = {
  titulo: "Áreas de experiencia",
};

export const areasExperiencia = [
  { titulo: "Preparación física", texto: "Rugby, plantel superior." },
  {
    titulo: "Entrenamiento personalizado",
    texto: "Salud, fuerza, composición corporal y rendimiento.",
  },
  {
    titulo: "Educación física",
    texto: "Nivel inicial, primario, secundario e iniciación deportiva.",
  },
  {
    titulo: "Trabajo interdisciplinario",
    texto: "Articulación con profesionales de nutrición, kinesiología y psicología.",
  },
  {
    titulo: "Trabajo con discapacidad en pileta",
    texto: "Introducción al medio acuático, natación y juegos.",
  },
];

/* ---- Experiencia (práctica real, con foto) ---------------------------- */

export const experienciaSeccion = {
  titulo: "Mi experiencia en la práctica",
};

export const experiencia = [
  {
    id: "rugby",
    titulo: "Rugby, plantel superior",
    lugar: "Club Universitario de Córdoba",
    texto:
      "Preparación física, reducción de riesgo lesional y desarrollo de capacidades condicionales para jugadores.",
    img: "/images/tr-universitario.jpg",
    alt: "Plantel de rugby del Club Universitario Córdoba",
  },
  {
    id: "futbol",
    titulo: "Fútbol",
    lugar: "Escuela de Deportes León XIII",
    texto:
      "Trabajo con jóvenes de entre 6 y 12 años en iniciación deportiva para el desarrollo de sus capacidades físicas, lúdicas y motrices.",
    img: "/images/tr-leon-xiii.jpg",
    alt: "Equipo de fútbol infantil de la Escuela de Deportes León XIII",
  },
  {
    id: "personalizado",
    titulo: "Entrenamiento personalizado",
    lugar: "",
    texto:
      "Evaluación, planificación y seguimiento de personas con diferentes objetivos y niveles de experiencia.",
    img: "/images/about.jpg",
    alt: "Entrenamiento de fuerza con barra",
  },
  {
    id: "educacion-fisica",
    titulo: "Educación física",
    lugar: "",
    texto: "Diseño y desarrollo de propuestas pedagógicas en diferentes niveles educativos.",
    img: "/images/metodo.jpg",
    alt: "Persona entrenando en el gimnasio",
  },
  {
    id: "pileta",
    titulo: "Discapacidad en pileta",
    lugar: "T.E.A. · Todos Estimulados Aprendemos",
    texto:
      "Trabajo con niños y adultos con discapacidad en pileta, sobre los miedos y temores, introducción al medio acuático y natación.",
    img: "/images/perfil-pileta.jpg",
    alt: "Persona nadando en una pileta con andariveles",
  },
];

/* TODO: Emi va a mandar fotos reales de cada uno de estos espacios. */
export const espaciosDondeTrabaje = {
  titulo: "Espacios donde trabajé",
  lugares: ["MB Entrenamiento", "MC Fitness Las Delicias", "Gimnasio BIGG", "Quivox"],
};

/* ---- Filosofía + método ------------------------------------------------ */

export const filosofia = {
  eyebrow: "Mi forma de entender el entrenamiento",
  titulo: "No hay una rutina universal",
  texto:
    "Cada persona llega al entrenamiento con su historia, sus posibilidades, su contexto y sus objetivos. Por eso, antes de programar, buscamos conocer a la persona, evaluar sus necesidades y entender qué estrategias pueden ayudarla a avanzar.",
  pasos: ["Contexto", "Evaluación", "Planificación", "Entrenamiento", "Seguimiento"],
};

export const metodo = {
  titulo: "¿Cómo trabajamos?",
  pasos: [
    {
      n: "01",
      icono: "chat" as const,
      titulo: "Conocemos tu contexto",
      texto: "Objetivos, experiencia, disponibilidad, necesidades y características individuales.",
    },
    {
      n: "02",
      icono: "medir" as const,
      titulo: "Evaluamos",
      texto: "Utilizamos diferentes herramientas para conocer tu punto de partida.",
    },
    {
      n: "03",
      icono: "plan" as const,
      titulo: "Planificamos",
      texto: "Diseñamos un entrenamiento acorde a tus objetivos y posibilidades.",
    },
    {
      n: "04",
      icono: "entrenar" as const,
      titulo: "Entrenamos",
      texto: "Aplicamos la planificación y aprendemos a movernos y entrenar.",
    },
    {
      n: "05",
      icono: "ajuste" as const,
      titulo: "Ajustamos",
      texto: "El entrenamiento cambia a medida que vos cambiás.",
    },
  ],
};

/* ---- Servicios + planes ------------------------------------------------ */

export const serviciosSeccion = {
  titulo: "¿En qué puedo ayudarte?",
};

export const servicios = [
  {
    titulo: "Salud y calidad de vida",
    texto: "Fuerza, movilidad, composición corporal y autonomía.",
  },
  {
    titulo: "Rendimiento deportivo",
    texto: "Preparación física y desarrollo de capacidades específicas.",
  },
  {
    titulo: "Entrenamiento personalizado",
    texto: "Programación individual según objetivos, experiencia y contexto.",
  },
  {
    titulo: "Entrenamiento online",
    texto: "Planificación y seguimiento a distancia.",
  },
  {
    titulo: "Educación y asesoramiento",
    texto: "Contenido relacionado con actividad física, entrenamiento y hábitos saludables.",
  },
];

export const planesSeccion = {
  titulo: "Elegí tu plan",
  bajada:
    "Sin permanencia mínima ni letra chica. Si en el primer mes no te sirve, lo hablamos y listo.",
  nota: "¿Sos un club o un gimnasio? Preparación física de planteles y asesoramiento a centros de entrenamiento.",
};

/* TODO: confirmar precios reales con Emi antes de publicar. */
export const planes = [
  {
    nombre: "Online",
    precio: "45.000",
    periodo: "por mes",
    para: "Para quien entrena solo y quiere dejar de improvisar.",
    incluye: [
      "Evaluación inicial por videollamada",
      "Programación semanal a tu medida",
      "Video y explicación de cada ejercicio",
      "Consultas por WhatsApp",
    ],
    destacado: false,
    cta: "Quiero este plan",
  },
  {
    nombre: "Online + Seguimiento",
    precio: "70.000",
    periodo: "por mes",
    para: "El más elegido. Plan online con control cercano y mediciones.",
    incluye: [
      "Todo lo del plan Online",
      "Videollamada quincenal de control",
      "Mediciones y registro de progreso",
      "Corrección de técnica por video",
    ],
    destacado: true,
    cta: "Quiero este plan",
  },
  {
    nombre: "Presencial 1 a 1",
    precio: "Consultar",
    periodo: "según frecuencia",
    para: "Entrenás conmigo en sala, con corrección en vivo.",
    incluye: [
      "Sesiones individuales o en dupla",
      "Corrección técnica en el momento",
      "Trabajo sobre dolores y limitaciones",
      "Plan para los días que entrenás solo",
    ],
    destacado: false,
    cta: "Consultar",
  },
];

/* ---- Sobre mí ----------------------------------------------------------- */

export const sobreMiSeccion = {
  titulo: "Sobre mí",
};

export const sobreMiTexto = [
  "Desde chico, el movimiento formó parte de mi vida. Crecí jugando en la calle, andando en bicicleta y explorando distintas formas de moverme, mucho antes de pensar que algún día eso se convertiría en mi profesión.",
  "Durante la adolescencia encontré en la natación una nueva forma de relacionarme con el movimiento: esta vez desde la práctica deportiva y la competencia. Con el tiempo, esa curiosidad fue creciendo y me llevó a experimentar con disciplinas muy diferentes entre sí: ciclismo, boxeo, gimnasio, calistenia, escalada, karting y muchas otras. Cada una me permitió conocer nuevas posibilidades del cuerpo, nuevas maneras de entrenar y, sobre todo, nuevas formas de disfrutar del movimiento.",
  "La educación también estuvo siempre presente en mi historia. En mi familia, la docencia atraviesa generaciones: mis abuelos y mis padres son docentes. Quizás por eso, aunque no siempre lo tuviera completamente claro, siempre supe que quería dedicarme a algo que me permitiera acompañar y ayudar a otras personas.",
  "Elegí formarme como Profesor de Educación Física y como entrenador porque encontré allí la posibilidad de unir tres cosas que me apasionan: ayudar a los demás, la educación como herramienta de transformación y el movimiento.",
  "Hoy prefiero hablar de entrenamiento.",
  "Porque entrenar no es solamente realizar ejercicios. Es aprender a conocer nuestro cuerpo, desarrollar nuestras capacidades y adquirir herramientas que nos permitan movernos mejor, afrontar nuevos desafíos y alcanzar nuestros objetivos.",
  "Ese es el lugar desde el que entiendo mi profesión: utilizar el movimiento y el entrenamiento como herramientas de aprendizaje, desarrollo y transformación.",
];

/* Frases a destacar dentro de sobreMiTexto (mismo índice, ni una palabra
   cambiada: son subcadenas literales del párrafo que se pintan más grandes
   y en rojo para que salten a la vista al leer). */
export const sobreMiDestacados: string[][] = [
  ["el movimiento formó parte de mi vida"],
  ["nuevas formas de disfrutar del movimiento"],
  ["siempre supe que quería dedicarme a algo que me permitiera acompañar y ayudar a otras personas"],
  ["ayudar a los demás, la educación como herramienta de transformación y el movimiento"],
  ["Hoy prefiero hablar de entrenamiento."],
  ["movernos mejor, afrontar nuevos desafíos y alcanzar nuestros objetivos"],
  ["utilizar el movimiento y el entrenamiento como herramientas de aprendizaje, desarrollo y transformación"],
];

/* ---- Testimonios --------------------------------------------------------- */

export const testimoniosSeccion = {
  titulo: "Lo que dicen quienes ya entrenan",
};

/* TODO: reemplazar por testimonios reales (con nombre y foto si se puede). */
export const testimonios = [
  {
    texto:
      "Llegué después de una lesión de rodilla y con miedo a moverme. En tres meses volví a jugar. El plan iba cambiando según cómo me sentía.",
    nombre: "Martín G.",
    detalle: "Rugby · 28 años",
  },
  {
    texto:
      "Nunca había pisado un gimnasio. Emi me explicó cada ejercicio y nunca me sentí fuera de lugar. Hoy entreno cuatro veces por semana.",
    nombre: "Carla P.",
    detalle: "Plan online · 41 años",
  },
  {
    texto:
      "Mi mamá tiene 72 y volvió a subir escaleras sin ayuda. Eso vale más que cualquier número.",
    nombre: "Lucía R.",
    detalle: "Adultos mayores",
  },
];

/* TODO: pegar acá el enlace real de la ficha de Google Business de Emi
   (Google Maps → Compartir → "Pedir reseñas" te da este link corto). Sin
   ese enlace real el botón no puede apuntar a ningún lado: no se inventan
   reseñas ni una calificación falsa, eso va en contra de las políticas de
   Google y sería engañoso para quien visite el sitio. */
export const googleReview = {
  texto: "Si ya entrenaste conmigo, tu reseña ayuda a que más gente me encuentre.",
  boton: "Dejar reseña en Google",
  url: "",
};

export const faqSeccion = {
  titulo: "Antes de escribirme",
};

export const faq = [
  {
    q: "Nunca entrené. ¿Sirve igual?",
    a: "Es el mejor momento para empezar bien. El plan arranca desde donde estás hoy: aprendemos los movimientos básicos antes de sumar carga, para que no te lesiones ni abandones en la segunda semana.",
  },
  {
    q: "¿Necesito gimnasio?",
    a: "No necesariamente. Antes de armar el plan me contás con qué contás: gimnasio completo, algunas mancuernas y bandas, o solo tu peso corporal. La programación se adapta a eso.",
  },
  {
    q: "Tengo una lesión o dolor crónico. ¿Puedo entrenar?",
    a: "En la mayoría de los casos sí, y entrenar suele ser parte de la solución. Trabajo con personas en readaptación y, cuando hace falta, coordino con tu kinesiólogo o médico. Nunca voy por encima de una indicación profesional.",
  },
  {
    q: "¿Cuánto tarda en verse el resultado?",
    a: "Las primeras mejoras de fuerza y energía aparecen entre la tercera y la sexta semana. Los cambios de composición corporal llevan más tiempo y dependen mucho del descanso y la alimentación. Prefiero decírtelo antes y no venderte un mes mágico.",
  },
];

export const finalCta = {
  titulo: "¿Arrancamos?",
  texto:
    "Escribime por WhatsApp y charlamos sin compromiso. En cinco minutos sabés si esto es para vos.",
  boton: "Escribirme por WhatsApp",
};
