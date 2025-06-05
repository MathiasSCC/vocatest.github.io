const testQuestions = [
    {
        question: "¿Qué tipo de actividades te resultan más atractivas?",
        options: [
            { text: "Resolver problemas complejos y analizar datos", category: "ciencias" },
            { text: "Crear y diseñar cosas nuevas", category: "arte" },
            { text: "Ayudar y trabajar con personas", category: "social" },
            { text: "Organizar y liderar proyectos", category: "negocios" }
        ]
    },
    {
        question: "¿En qué ambiente te sientes más cómodo trabajando?",
        options: [
            { text: "En un laboratorio o ambiente técnico", category: "ciencias" },
            { text: "En un estudio creativo o espacio artístico", category: "arte" },
            { text: "En contacto directo con la comunidad", category: "social" },
            { text: "En oficinas corporativas o centros de negocios", category: "negocios" }
        ]
    },
    {
        question: "¿Cuál de estas habilidades consideras tu fortaleza?",
        options: [
            { text: "Pensamiento lógico y análisis", category: "ciencias" },
            { text: "Creatividad e imaginación", category: "arte" },
            { text: "Empatía y comunicación", category: "social" },
            { text: "Liderazgo y toma de decisiones", category: "negocios" }
        ]
    },
    {
        question: "¿Qué te motiva más en el trabajo?",
        options: [
            { text: "Descubrir nuevos conocimientos", category: "ciencias" },
            { text: "Expresar mi creatividad", category: "arte" },
            { text: "Hacer una diferencia en la vida de otros", category: "social" },
            { text: "Alcanzar objetivos y metas", category: "negocios" }
        ]
    },
    {
        question: "¿Cómo prefieres resolver problemas?",
        options: [
            { text: "Con métodos científicos y evidencia", category: "ciencias" },
            { text: "Con soluciones creativas e innovadoras", category: "arte" },
            { text: "Colaborando y consultando con otros", category: "social" },
            { text: "Con estrategias prácticas y eficientes", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de proyectos te emocionan más?",
        options: [
            { text: "Investigación y desarrollo tecnológico", category: "ciencias" },
            { text: "Proyectos artísticos y culturales", category: "arte" },
            { text: "Programas de ayuda social", category: "social" },
            { text: "Desarrollo de nuevos productos o servicios", category: "negocios" }
        ]
    },
    {
        question: "¿Cómo te describirían tus amigos?",
        options: [
            { text: "Analítico y curioso", category: "ciencias" },
            { text: "Creativo y original", category: "arte" },
            { text: "Comprensivo y servicial", category: "social" },
            { text: "Ambicioso y determinado", category: "negocios" }
        ]
    },
    {
        question: "¿Qué asignatura te gustaba más en el colegio?",
        options: [
            { text: "Matemáticas, Física o Química", category: "ciencias" },
            { text: "Arte, Música o Literatura", category: "arte" },
            { text: "Historia, Filosofía o Psicología", category: "social" },
            { text: "Economía o Administración", category: "negocios" }
        ]
    },
    {
        question: "¿Cómo te gusta pasar tu tiempo libre?",
        options: [
            { text: "Leyendo sobre ciencia o tecnología", category: "ciencias" },
            { text: "Haciendo actividades creativas", category: "arte" },
            { text: "Participando en actividades comunitarias", category: "social" },
            { text: "Planificando proyectos personales", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de reconocimiento valoras más?",
        options: [
            { text: "Reconocimiento por innovación científica", category: "ciencias" },
            { text: "Reconocimiento por creatividad artística", category: "arte" },
            { text: "Reconocimiento por servicio comunitario", category: "social" },
            { text: "Reconocimiento por logros empresariales", category: "negocios" }
        ]
    },
    {
        question: "¿Cuál es tu mayor preocupación sobre el futuro?",
        options: [
            { text: "Los avances tecnológicos y científicos", category: "ciencias" },
            { text: "La preservación del arte y la cultura", category: "arte" },
            { text: "Los problemas sociales y humanos", category: "social" },
            { text: "El desarrollo económico y empresarial", category: "negocios" }
        ]
    },
    {
        question: "¿Qué herramientas prefieres usar en tu trabajo?",
        options: [
            { text: "Equipos técnicos y software especializado", category: "ciencias" },
            { text: "Herramientas creativas y artísticas", category: "arte" },
            { text: "Recursos para comunicación y colaboración", category: "social" },
            { text: "Herramientas de gestión y análisis", category: "negocios" }
        ]
    },
    {
        question: "¿Cómo prefieres aprender cosas nuevas?",
        options: [
            { text: "Experimentando y probando hipótesis", category: "ciencias" },
            { text: "Explorando y creando libremente", category: "arte" },
            { text: "Discutiendo y compartiendo con otros", category: "social" },
            { text: "Aplicando conocimientos a casos prácticos", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de impacto quieres tener en el mundo?",
        options: [
            { text: "Avanzar el conocimiento científico", category: "ciencias" },
            { text: "Inspirar y emocionar a través del arte", category: "arte" },
            { text: "Mejorar la calidad de vida de las personas", category: "social" },
            { text: "Generar crecimiento económico y empleo", category: "negocios" }
        ]
    },
    {
        question: "¿Qué te parece más interesante?",
        options: [
            { text: "Entender cómo funcionan las cosas", category: "ciencias" },
            { text: "Crear belleza y expresar emociones", category: "arte" },
            { text: "Comprender el comportamiento humano", category: "social" },
            { text: "Optimizar procesos y resultados", category: "negocios" }
        ]
    },
    {
        question: "¿En qué tipo de equipo trabajas mejor?",
        options: [
            { text: "Equipos de investigación especializados", category: "ciencias" },
            { text: "Equipos creativos multidisciplinarios", category: "arte" },
            { text: "Equipos orientados al servicio social", category: "social" },
            { text: "Equipos orientados a resultados", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de desafíos te motivan más?",
        options: [
            { text: "Resolver problemas técnicos complejos", category: "ciencias" },
            { text: "Crear algo totalmente nuevo", category: "arte" },
            { text: "Ayudar a resolver conflictos humanos", category: "social" },
            { text: "Alcanzar objetivos ambiciosos", category: "negocios" }
        ]
    },
    {
        question: "¿Cómo te gusta comunicar tus ideas?",
        options: [
            { text: "A través de datos y evidencia", category: "ciencias" },
            { text: "A través de medios visuales y creativos", category: "arte" },
            { text: "A través del diálogo y la conversación", category: "social" },
            { text: "A través de presentaciones y propuestas", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de responsabilidad te atrae más?",
        options: [
            { text: "Responsabilidad por la precisión y calidad", category: "ciencias" },
            { text: "Responsabilidad por la originalidad", category: "arte" },
            { text: "Responsabilidad por el bienestar de otros", category: "social" },
            { text: "Responsabilidad por resultados financieros", category: "negocios" }
        ]
    },
    {
        question: "¿Qué valoras más en un trabajo?",
        options: [
            { text: "La posibilidad de investigar y descubrir", category: "ciencias" },
            { text: "La libertad creativa y expresión personal", category: "arte" },
            { text: "La posibilidad de ayudar a otros", category: "social" },
            { text: "Las oportunidades de crecimiento profesional", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de lectura prefieres?",
        options: [
            { text: "Revistas científicas y técnicas", category: "ciencias" },
            { text: "Libros de arte, literatura y cultura", category: "arte" },
            { text: "Libros de desarrollo personal y social", category: "social" },
            { text: "Libros de negocios y economía", category: "negocios" }
        ]
    },
    {
        question: "¿Cómo manejas la presión en el trabajo?",
        options: [
            { text: "Analizando sistemáticamente la situación", category: "ciencias" },
            { text: "Encontrando soluciones creativas", category: "arte" },
            { text: "Buscando apoyo en otros", category: "social" },
            { text: "Enfocándome en los objetivos", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de eventos profesionales te interesan más?",
        options: [
            { text: "Conferencias científicas y técnicas", category: "ciencias" },
            { text: "Exposiciones y eventos culturales", category: "arte" },
            { text: "Congresos de trabajo social", category: "social" },
            { text: "Ferias y eventos de negocios", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de feedback valoras más?",
        options: [
            { text: "Feedback sobre la precisión técnica", category: "ciencias" },
            { text: "Feedback sobre la creatividad", category: "arte" },
            { text: "Feedback sobre el impacto social", category: "social" },
            { text: "Feedback sobre resultados y eficiencia", category: "negocios" }
        ]
    },
    {
        question: "¿Qué te parece más importante en la sociedad?",
        options: [
            { text: "El avance científico y tecnológico", category: "ciencias" },
            { text: "La riqueza cultural y artística", category: "arte" },
            { text: "La justicia social y el bienestar", category: "social" },
            { text: "El desarrollo económico", category: "negocios" }
        ]
    },
    {
        question: "¿Cómo prefieres planificar tu futuro profesional?",
        options: [
            { text: "Basándome en avances científicos", category: "ciencias" },
            { text: "Siguiendo mi inspiración creativa", category: "arte" },
            { text: "Considerando las necesidades sociales", category: "social" },
            { text: "Analizando oportunidades de mercado", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de logro te haría sentir más orgulloso?",
        options: [
            { text: "Hacer un descubrimiento científico", category: "ciencias" },
            { text: "Crear una obra artística reconocida", category: "arte" },
            { text: "Ayudar a transformar una comunidad", category: "social" },
            { text: "Construir una empresa exitosa", category: "negocios" }
        ]
    },
    {
        question: "¿Qué tipo de innovación te emociona más?",
        options: [
            { text: "Innovación tecnológica y científica", category: "ciencias" },
            { text: "Innovación artística y cultural", category: "arte" },
            { text: "Innovación en servicios sociales", category: "social" },
            { text: "Innovación en modelos de negocio", category: "negocios" }
        ]
    },
    {
        question: "¿Cómo te ves trabajando en 10 años?",
        options: [
            { text: "Liderando investigaciones científicas", category: "ciencias" },
            { text: "Desarrollando proyectos creativos", category: "arte" },
            { text: "Dirigiendo programas sociales", category: "social" },
            { text: "Gestionando empresas o proyectos", category: "negocios" }
        ]
    },
    {
        question: "¿Qué aspecto del trabajo te genera más satisfacción?",
        options: [
            { text: "Resolver problemas complejos", category: "ciencias" },
            { text: "Ver mis ideas cobrar vida", category: "arte" },
            { text: "Ver el progreso de las personas", category: "social" },
            { text: "Alcanzar metas y objetivos", category: "negocios" }
        ]
    }
];