// Contenido bilingüe. Todo lo que aparece entre [corchetes] es un marcador:
// sustitúyelo por datos reales. No hay empleadores, fechas ni métricas inventadas.

export type Lang = 'es' | 'en';

type Entry = {
  title: string;
  org: string;
  date: string;
  current?: boolean;
  detail?: string;
  seed: string;
};

type Project = {
  title: string;
  summary: string;
  detail: string;
  stack?: string;
  linkLabel: string;
  href: string;
  seed: string;
};

export const content = {
  es: {
    htmlLang: 'es',
    title: 'Ricardo · Ciberseguridad e ingeniería de software',
    description:
      'Portfolio de Ricardo: estudiante de máster en ciberseguridad, abierto a roles de seguridad, ingeniería de software y frontend.',
    name: 'Ricardo',
    fullName: 'Ricardo Carreño Mariño',
    role: 'Ciberseguridad · Ingeniería de software · Frontend',
    intro:
      'Ingeniero informático del software, con el máster en ciberseguridad en curso. Construyo software y me oriento a la seguridad de aplicaciones. Aquí tienes mi formación, mis proyectos y cómo contactarme.',
    skip: 'Saltar al contenido',
    switchLabel: 'Cambiar idioma',
    switchTo: { code: 'EN', href: '/en/', name: 'English' },
    keysLabel: 'Secciones',
    gate: { label: 'Encender y reproducir con sonido' },
    audio: { play: 'PLAY: reproducir música de fondo', pause: 'PAUSE: pausar música de fondo', volume: 'Volumen', track: 'PISTA' },
    off: {
      power: 'Apagar el sistema',
      ask: '¿Seguro que quieres apagar el sistema?',
      yes: 'Sí',
      no: 'No',
      stop: 'STOP',
      console: 'Terminal',
      term: {
        notFound: 'bash: {cmd}: orden no encontrada',
        start: 'Reiniciando el sistema...',
        cvMissing: 'cv: falta el idioma. Uso: cv -es | -en',
        cvBad: "cv: opción no válida '{flag}'. Uso: cv -es | -en",
        cvGo: 'Descargando CV ({lang})...',
        cvLangs: { es: 'español', en: 'inglés' },
        exitAgain: 'Para salir, escribe «exit» otra vez.',
        exitBye: 'logout',
        help: {
          start: 'Rebobina la cinta hasta el principio. Con PLAY y todo; no, no hace falta soplar.',
          cv: 'Descarga mi CV. Elige -es o -en: sin flag no hay CV, y sin CV no hay entrevista.',
          learning: 'Lo que he estudiado, por si dudabas de que fuera a clase. Spoiler: iba.',
          projects: 'Lo que he construido. Todo compila; lo de mi cocina es otra historia.',
          experience: 'Dónde he currado. Del café gratis no hay constancia oficial.',
          contact: 'Cómo escribirme. Contesto más rápido que un ping (a Marte, no).',
          help: 'Esto que estás leyendo. Sí, es meta; no, no me arrepiento.',
          exit: 'Cierra la pestaña. Hay que pedirlo dos veces: la primera es para que lo pienses.',
        },
        helpHint: 'Aquí no están todos. Quien manda no sale en la lista.',
        super: { loading: 'Cargando modo superadmin', leaving: 'Saliendo del modo superadmin' },
        admin: {
          prompt: 'Contraseña:',
          hints: {
            '33': 'Pista: el numerín de Fernando Alonso.',
            apple: 'Pista: la marca de tech favorita de Ricardo.',
            ferran: 'Pista: el goleador de la final de España. Sin tilde, que esto es una terminal y no un examen de lengua.',
            konami: 'Pista: aquí no se escribe, se pulsa, como en los videojuegos de antes. Flechas, A, B y la barra espaciadora de Start.',
          },
          bad: 'Contraseña incorrecta. Este intento queda registrado (en ningún sitio, pero da miedo).',
          jokeAdmin: '«admin». Claro, claro. Sabiendo que estudio ciberseguridad, casi me ofendes. Incorrecta, y mi fe en ti también.',
          jokePass: 'Has escrito «contraseña» como contraseña. Literal. Es como pedir una llave y enseñar el dibujo de una llave. Incorrecta.',
          pity: 'Te veo perdido. Toma una pista, que me das pena.',
          tooMany: 'admin: demasiados intentos. Vuelve cuando hayas desayunado.',
          ok: 'Acceso concedido. Bienvenido, administrador. Cargando el modo admin...',
          off: 'Acceso concedido. Modo naranja desactivado: vuelves a ser un mortal.',
          cancel: '^C',
        },
      },
    },
    layerWord: 'Capa',
    pduWord: 'PDU',
    slabs: [
      { n: 5, name: 'Aplicación', pdu: 'Mensaje', fields: 'GET /ricardo │ perfil' },
      { n: 4, name: 'Transporte', pdu: 'Segmento', fields: 'ORIGEN │ DESTINO │ SEC │ CHK' },
      { n: 3, name: 'Red', pdu: 'Paquete', fields: 'VER │ TTL │ IP ORIGEN │ IP DESTINO' },
      { n: 2, name: 'Enlace', pdu: 'Trama', fields: 'MAC DST │ MAC ORG │ TIPO │ FCS' },
      { n: 1, name: 'Física', pdu: 'Bits', fields: 'PREÁMBULO │ 10101010 │ SEÑAL' },
    ],
    sent: 'BITS EN EL MEDIO',
    quips: [
      { title: 'Hola, soy el mensaje', sub: 'lo único que se lee' },
      { title: 'Entrega garantizada', sub: 'con acuse de apuntes' },
      { title: 'Calculando ruta...', sub: 'el GPS no tiene cobertura' },
      { title: 'Cable va, cable viene', sub: 'trama a trama se aprende' },
      { title: 'Pulsa y que vuele', sub: 'bits cruzando el charco' },
    ],
    stamp: 'ENVIADO',
    ack: 'ACK RECIBIDO',
    seeProjects: 'Ver proyectos',
    keys: [
      { id: 'learning', label: 'Formación', seed: 'formacion' },
      { id: 'projects', label: 'Proyectos', seed: 'proyectos' },
      { id: 'experience', label: 'Experiencia', seed: 'experiencia' },
      { id: 'contact', label: 'Contacto', seed: 'contacto' },
    ],
    cv: {
      label: 'Descargar CV',
      short: 'CV',
      seed: 'cv-ricardo',
      options: [
        { lang: 'es', label: 'Español', href: 'https://rxresu.me/api/resumes/rikicarre/cv-spanish/pdf?download' },
        { lang: 'en', label: 'English', href: 'https://rxresu.me/api/resumes/rikicarre/cv/pdf?download' },
      ],
    },
    inProgress: 'En curso',
    learning: {
      heading: 'Formación y certificaciones',
      degrees: [
        {
          title: 'Máster Universitario en Ciberseguridad',
          org: 'Universidad Internacional de La Rioja (UNIR)',
          date: 'Desde septiembre de 2026',
          current: true,
          detail:
            'Máster oficial de 60 ECTS: seguridad en sistemas y redes, desarrollo seguro de software, auditoría, hacking ético, análisis forense y respuesta ante incidentes.',
          seed: 'master-ciberseguridad',
        },
        {
          title: 'Grado en Ingeniería Informática del Software',
          org: 'Universidad de Sevilla',
          date: '2021 – 2025',
          detail: 'Escuela Técnica Superior de Ingeniería Informática, en Sevilla.',
          seed: 'grado-informatica',
        },
      ] as Entry[],
      coursesHeading: 'Cursos y certificaciones',
      courses: [
        {
          title: 'Curso de preparación para CompTIA Security+ (SY0-701)',
          org: 'CiberExt',
          date: 'Mayo 2026',
          seed: 'cert-security-plus',
        },
        {
          title: 'Introducción a los fundamentos de ciberseguridad',
          org: 'IBM',
          date: 'Febrero 2026',
          seed: 'cert-ibm',
        },
        {
          title: 'Introducción a la Ciberseguridad',
          org: 'Cisco Networking Academy',
          date: 'Enero 2026',
          seed: 'cert-cisco',
        },
      ] as Entry[],
    },
    projects: {
      heading: 'Proyectos',
      open: 'Abrir proyecto',
      stackLabel: 'Tecnologías',
      items: [
        {
          title: 'ReDe',
          summary: 'Reservas de instalaciones deportivas para municipios rurales.',
          detail:
            'Mi trabajo de fin de grado: una aplicación web con autenticación y control de acceso (solo el propietario modifica o cancela una reserva), validaciones de horarios, disponibilidad y límites por usuario, y pruebas automatizadas de esos flujos.',
          stack: 'Python, Django, pruebas automatizadas',
          linkLabel: 'Ver código',
          href: 'https://github.com/RIKICARRE/ReDe_TFG',
          seed: 'proyecto-rede',
        },
        {
          title: 'Valdehornillos Turismo',
          summary: 'Sitio web turístico de Valdehornillos.',
          detail:
            'Lo desarrollé en Impulsa Dirección de Proyectos, con autenticación y controles de acceso a las funciones de gestión.',
          linkLabel: 'Ver sitio',
          href: 'https://www.valdehornillosturismo.com/es',
          seed: 'proyecto-valdehornillos',
        },
        {
          title: 'Pueblos Inteligentes del Valle del Jerte',
          summary: 'Sitio web de la Mancomunidad del Valle del Jerte para su proyecto Pueblos Inteligentes.',
          detail:
            'Lo desarrollé en Impulsa Dirección de Proyectos, con autenticación y controles de acceso a las funciones de gestión.',
          linkLabel: 'Ver sitio',
          href: 'https://pueblosinteligentes.mvj.es/es',
          seed: 'proyecto-pueblos-inteligentes',
        },
      ] as Project[],
    },
    experience: {
      heading: 'Experiencia',
      items: [
        {
          title: 'Técnico de Proyectos de Software y Documentación Técnica',
          org: 'Impulsa Dirección de Proyectos · Badajoz',
          date: 'Mar. – sep. 2026',
          detail:
            'Documentación para la tramitación de subvenciones y desarrollo de los sitios web de Valdehornillos Turismo y Pueblos Inteligentes (Mancomunidad del Valle del Jerte), con autenticación y controles de acceso.',
          seed: 'exp-impulsa',
        },
      ] as Entry[],
    },
    contact: {
      heading: 'Contacto',
      lead: 'Busco oportunidades en ciberseguridad, ingeniería de software y frontend.',
      links: [
        { label: 'Correo', value: 'ricardocarremar@icloud.com', href: 'mailto:ricardocarremar@icloud.com' },
        { label: 'LinkedIn', value: 'linkedin.com/in/ricardo-carreno-marino', href: 'https://www.linkedin.com/in/ricardo-carreno-marino' },
        { label: 'GitHub', value: 'github.com/RIKICARRE', href: 'https://github.com/RIKICARRE' },
      ],
    },
    credit: 'Música: Extraterrestrial Sphere, de Karl Casey @ White Bat Audio',
  },
  en: {
    htmlLang: 'en',
    title: 'Ricardo · Cybersecurity and software engineering',
    description:
      "Ricardo's portfolio: cybersecurity master's student, open to security, software engineering and frontend roles.",
    name: 'Ricardo',
    fullName: 'Ricardo Carreño Mariño',
    role: 'Cybersecurity · Software engineering · Frontend',
    intro:
      "Software engineering graduate, currently doing a master's in cybersecurity. I build software and I'm heading into application security. Here is my education, my projects and how to reach me.",
    skip: 'Skip to content',
    switchLabel: 'Change language',
    switchTo: { code: 'ES', href: '/', name: 'Español' },
    keysLabel: 'Sections',
    gate: { label: 'Power on and play with sound' },
    audio: { play: 'PLAY: play background music', pause: 'PAUSE: pause background music', volume: 'Volume', track: 'TRACK' },
    off: {
      power: 'Shut down the system',
      ask: 'Are you sure you want to shut down the system?',
      yes: 'Yes',
      no: 'No',
      stop: 'STOP',
      console: 'Terminal',
      term: {
        notFound: 'bash: {cmd}: command not found',
        start: 'Restarting the system...',
        cvMissing: 'cv: missing language flag. Usage: cv -es | -en',
        cvBad: "cv: invalid option '{flag}'. Usage: cv -es | -en",
        cvGo: 'Downloading CV ({lang})...',
        cvLangs: { es: 'Spanish', en: 'English' },
        exitAgain: 'To exit, type "exit" again.',
        exitBye: 'logout',
        help: {
          start: 'Rewinds the tape to the start. PLAY screen included; no, you do not need to blow on it.',
          cv: 'Download my CV. Pick -es or -en: no flag, no CV, and no CV, no interview.',
          learning: 'What I have studied, in case you doubted I went to class. Spoiler: I did.',
          projects: 'What I have built. It all compiles; my cooking is another story.',
          experience: 'Where I have worked. Free coffee is not on the official record.',
          contact: 'How to reach me. I answer faster than a ping (to Mars, not so much).',
          help: 'What you are reading right now. Yes, it is meta; no, I do not regret it.',
          exit: 'Closes the tab. You have to ask twice: the first time is for you to think about it.',
        },
        helpHint: 'Not everything is listed here. Whoever is in charge is not on the list.',
        super: { loading: 'Loading superadmin mode', leaving: 'Leaving superadmin mode' },
        admin: {
          prompt: 'Password:',
          hints: {
            '33': "Hint: Fernando Alonso's number.",
            apple: "Hint: Ricardo's favourite tech brand.",
            ferran: "Hint: the scorer in Spain's final. No accents, this is a terminal, not a spelling test.",
            konami: 'Hint: you do not type this one, you press it, like in old video games. Arrows, A, B and the space bar as Start.',
          },
          bad: 'Wrong password. This attempt has been logged (nowhere, but it sounds scary).',
          jokeAdmin: '"admin". Sure, sure. Knowing I study cybersecurity, you almost offend me. Wrong, and so is my faith in you.',
          jokePass: 'You typed "password" as the password. Literally. Like asking for a key and showing a drawing of a key. Wrong.',
          pity: 'You look lost. Here is a hint, because I feel sorry for you.',
          tooMany: 'admin: too many attempts. Come back after breakfast.',
          ok: 'Access granted. Welcome, administrator. Loading orange admin mode...',
          off: 'Access granted. Orange mode off: you are a mere mortal again.',
          cancel: '^C',
        },
      },
    },
    layerWord: 'Layer',
    pduWord: 'PDU',
    slabs: [
      { n: 5, name: 'Application', pdu: 'Message', fields: 'GET /ricardo │ profile' },
      { n: 4, name: 'Transport', pdu: 'Segment', fields: 'SRC │ DST │ SEQ │ CHK' },
      { n: 3, name: 'Network', pdu: 'Packet', fields: 'VER │ TTL │ SRC IP │ DST IP' },
      { n: 2, name: 'Link', pdu: 'Frame', fields: 'DST MAC │ SRC MAC │ TYPE │ FCS' },
      { n: 1, name: 'Physical', pdu: 'Bits', fields: 'PREAMBLE │ 10101010 │ SIGNAL' },
    ],
    sent: 'BITS ON THE WIRE',
    quips: [
      { title: "Hi, I'm the message", sub: 'the only part anyone reads' },
      { title: 'Delivery guaranteed', sub: 'receipt of notes included' },
      { title: 'Calculating route...', sub: 'GPS has no signal' },
      { title: 'Wire in, wire out', sub: 'learning frame by frame' },
      { title: 'Hit send, let it fly', sub: 'bits crossing the pond' },
    ],
    stamp: 'SENT',
    ack: 'ACK RECEIVED',
    seeProjects: 'See projects',
    keys: [
      { id: 'learning', label: 'Education', seed: 'formacion' },
      { id: 'projects', label: 'Projects', seed: 'proyectos' },
      { id: 'experience', label: 'Experience', seed: 'experiencia' },
      { id: 'contact', label: 'Contact', seed: 'contacto' },
    ],
    cv: {
      label: 'Download CV',
      short: 'CV',
      seed: 'cv-ricardo',
      options: [
        { lang: 'en', label: 'English', href: 'https://rxresu.me/api/resumes/rikicarre/cv/pdf?download' },
        { lang: 'es', label: 'Español', href: 'https://rxresu.me/api/resumes/rikicarre/cv-spanish/pdf?download' },
      ],
    },
    inProgress: 'In progress',
    learning: {
      heading: 'Education and certifications',
      degrees: [
        {
          title: "Master's in Cybersecurity",
          org: 'Universidad Internacional de La Rioja (UNIR)',
          date: 'Since September 2026',
          current: true,
          detail:
            'Official 60 ECTS master: systems and network security, secure software development, auditing, ethical hacking, forensics and incident response.',
          seed: 'master-ciberseguridad',
        },
        {
          title: "Bachelor's in Software Engineering (Computer Science)",
          org: 'University of Seville',
          date: '2021 – 2025',
          detail: 'School of Computer Engineering (ETSII), Seville.',
          seed: 'grado-informatica',
        },
      ] as Entry[],
      coursesHeading: 'Courses and certifications',
      courses: [
        {
          title: 'CompTIA Security+ (SY0-701) preparation course',
          org: 'CiberExt',
          date: 'May 2026',
          seed: 'cert-security-plus',
        },
        {
          title: 'Introduction to Cybersecurity Essentials',
          org: 'IBM',
          date: 'February 2026',
          seed: 'cert-ibm',
        },
        {
          title: 'Introduction to Cybersecurity',
          org: 'Cisco Networking Academy',
          date: 'January 2026',
          seed: 'cert-cisco',
        },
      ] as Entry[],
    },
    projects: {
      heading: 'Projects',
      open: 'Open project',
      stackLabel: 'Stack',
      items: [
        {
          title: 'ReDe',
          summary: 'Sports facility booking for rural municipalities.',
          detail:
            "My bachelor's thesis: a web app with authentication and access control (only the owner can change or cancel a booking), validation of schedules, availability and per-user limits, and automated tests for those flows.",
          stack: 'Python, Django, automated testing',
          linkLabel: 'View code',
          href: 'https://github.com/RIKICARRE/ReDe_TFG',
          seed: 'proyecto-rede',
        },
        {
          title: 'Valdehornillos Turismo',
          summary: 'Tourism website for Valdehornillos.',
          detail:
            'Built at Impulsa Dirección de Proyectos, with authentication and access controls for the management features.',
          linkLabel: 'Visit site',
          href: 'https://www.valdehornillosturismo.com/es',
          seed: 'proyecto-valdehornillos',
        },
        {
          title: 'Pueblos Inteligentes, Valle del Jerte',
          summary: 'Website of the Valle del Jerte Mancomunidad for its Smart Villages project.',
          detail:
            'Built at Impulsa Dirección de Proyectos, with authentication and access controls for the management features.',
          linkLabel: 'Visit site',
          href: 'https://pueblosinteligentes.mvj.es/es',
          seed: 'proyecto-pueblos-inteligentes',
        },
      ] as Project[],
    },
    experience: {
      heading: 'Experience',
      items: [
        {
          title: 'Software Projects and Technical Documentation Specialist',
          org: 'Impulsa Dirección de Proyectos · Badajoz',
          date: 'Mar – Sep 2026',
          detail:
            'Documentation for grant applications, and development of the Valdehornillos Turismo and Pueblos Inteligentes (Valle del Jerte) websites, with authentication and access controls.',
          seed: 'exp-impulsa',
        },
      ] as Entry[],
    },
    contact: {
      heading: 'Contact',
      lead: "I'm looking for opportunities in cybersecurity, software engineering and frontend.",
      links: [
        { label: 'Email', value: 'ricardocarremar@icloud.com', href: 'mailto:ricardocarremar@icloud.com' },
        { label: 'LinkedIn', value: 'linkedin.com/in/ricardo-carreno-marino', href: 'https://www.linkedin.com/in/ricardo-carreno-marino' },
        { label: 'GitHub', value: 'github.com/RIKICARRE', href: 'https://github.com/RIKICARRE' },
      ],
    },
    credit: 'Music: Extraterrestrial Sphere by Karl Casey @ White Bat Audio',
  },
} as const;
