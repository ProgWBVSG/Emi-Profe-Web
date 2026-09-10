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

export const nav = [
  { label: "Para quién", href: "#perfiles" },
  { label: "Método", href: "#metodo" },
  { label: "Planes", href: "#planes" },
  { label: "Sobre mí", href: "#trayectoria" },
];

export const hero = {
  titulo: ["Construí el cuerpo", "que querés en 90 días"],
  bajada:
    "Dejá de improvisar rutinas. Te armo un plan hecho para tu cuerpo, tu tiempo y tu objetivo, y te acompaño semana a semana para que esta vez no lo dejes.",
  /* Foto de la portada.
     modo "foto"    -> la imagen llena el bloque (foto normal, con fondo).
     modo "recorte" -> la imagen se apoya abajo sin recortarse, sobre un
                       fondo oscuro con halo lima. Es el modo para la foto
                       de Emi sin fondo (PNG con transparencia). */
  foto: {
    src: "/images/emi-hero.png",
    alt: "Emiliano Peralta, profe de educación física",
    modo: "recorte" as "foto" | "recorte",
    /* Solo se usa en modo "recorte": va detrás, oscurecido y desenfocado. */
    fondo: "/images/hero-fondo.jpg",
  },
  ctaPrimario: "Quiero empezar",
  ctaSecundario: "Ver planes",
  watermark: "PERALTA",
};

export const stats = [
  { valor: "1800", sufijo: "hs", label: "de formación universitaria" },
  { valor: "6", sufijo: "+", label: "clubes y centros donde trabajé" },
  { valor: "6-80", sufijo: "", label: "años: entreno a todas las edades" },
  { valor: "100", sufijo: "%", label: "de los planes son individuales" },
];

export const perfiles = {
  titulo: "Entreno personas, no rutinas",
  bajada:
    "Cada historia necesita otra lógica de trabajo. Estas son las que vengo acompañando hace años.",
  items: [
    {
      titulo: "Nunca entrenaste",
      texto:
        "Empezamos de cero y sin vergüenza. Primero aprendés a moverte, después sumamos carga.",
      img: "/images/metodo.jpg",
      alt: "Persona entrenando en el gimnasio",
    },
    {
      titulo: "Volvés de una lesión",
      texto:
        "Recuperás la confianza en tu cuerpo. Trabajo con tu kinesiólogo para que el alta no sea el final.",
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
        "Preparación física de rugby en plantel superior. Rendimiento medido, no improvisado.",
      img: "/images/perfil-deportistas.jpg",
      alt: "Deportista entrenando fuerza en el gimnasio",
    },
  ],
};

export const metodo = {
  titulo: "Cómo trabajamos",
  bajada:
    "Cuatro pasos. Sin rutinas copiadas de internet ni planes que le sirven a cualquiera.",
  pasos: [
    {
      n: "01",
      icono: "chat" as const,
      titulo: "Hablamos",
      texto:
        "Me contás qué buscás, cuánto tiempo tenés y qué te duele. Sin compromiso.",
    },
    {
      n: "02",
      icono: "medir" as const,
      titulo: "Evaluamos",
      texto:
        "Antes de programar, medimos: movilidad, fuerza y punto de partida real.",
    },
    {
      n: "03",
      icono: "plan" as const,
      titulo: "Armo tu plan",
      texto:
        "Recibís la programación con ejercicios, series, cargas y videos, lista para usar.",
    },
    {
      n: "04",
      icono: "ajuste" as const,
      titulo: "Ajustamos",
      texto:
        "Revisamos cada semana. El plan cambia con vos: por eso funciona a largo plazo.",
    },
  ],
};

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

export const sobreMi = {
  titulo: "Quién te va a entrenar",
  bajada:
    "Emiliano Peralta. Técnico universitario en Actividad Física (UPC) y profesorado en curso. Cinco años entrenando en clubes, gimnasios y centros de salud de Córdoba.",
};

export const trayectoria = [
  {
    id: "leon-xiii",
    anio: "2023",
    periodo: "Marzo 2023 — Septiembre 2024",
    rol: "Profe de fútbol",
    lugar: "Escuela de Deportes León XIII",
    texto:
      "Escuelita de iniciación deportiva para chicos y chicas de 6 a 12 años: habilidades motrices básicas, desarrollo técnico-táctico y arbitraje.",
    img: "/images/tr-leon-xiii.jpg",
    alt: "Equipo de fútbol infantil de la Escuela de Deportes León XIII",
  },
  {
    id: "mb",
    anio: "2024",
    periodo: "Noviembre 2024 — Abril 2026",
    rol: "Profe en centro de salud",
    lugar: "MB Entrenamiento",
    texto:
      "Evaluación, planificación y seguimiento para adultos mayores, personas lesionadas y deportistas, junto a nutricionistas, psicólogas y kinesiólogas.",
    img: "/images/about.jpg",
    alt: "Entrenamiento de fuerza con barra",
  },
  {
    id: "tea",
    anio: "2025",
    periodo: "Abril 2025 — Mayo 2026",
    rol: "Profe en pileta",
    lugar: "T.E.A. · Todos Estimulados Aprendemos",
    texto:
      "Introducción al medio acuático y natación para niños, adolescentes y adultos con discapacidad. Actividad adaptada a cada persona.",
    img: "/images/perfil-pileta.jpg",
    alt: "Persona nadando en una pileta con andariveles",
  },
  {
    id: "universitario",
    anio: "2025",
    periodo: "Enero 2025 — Actualidad",
    rol: "Preparador físico de rugby",
    lugar: "Club Universitario Córdoba",
    texto:
      "Plantel superior, pre-intermedia y equipos A y B. Evaluación, planificación, gestión de cargas y control de fatiga con el cuerpo técnico.",
    img: "/images/tr-universitario.jpg",
    alt: "Plantel de rugby del Club Universitario Córdoba",
  },
  {
    id: "mc-fitness",
    anio: "2025",
    periodo: "Noviembre 2025 — Actualidad",
    rol: "Profe de sala",
    lugar: "Gimnasio MC Fitness",
    texto:
      "Planificación, entrenamiento y seguimiento para todas las edades: readaptación física, salud, estética y deporte.",
    img: "/images/srv-centros.jpg",
    alt: "Sala de musculación de un gimnasio",
  },
];

export const formacion = [
  {
    titulo: "Tecnicatura Universitaria en Actividad Física",
    lugar: "Facultad de Educación Física · UPC",
    detalle: "Finalizada · 1800 hs presenciales",
  },
  {
    titulo: "Profesorado Universitario en Educación Física",
    lugar: "Facultad de Educación Física · UPC",
    detalle: "En curso · 4.º año",
  },
  {
    titulo: "Preparador Físico Nivel 1 · UAR",
    lugar: "Unión Argentina de Rugby",
    detalle: "2026 · RCP y primeros socorros vigentes",
  },
];

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
