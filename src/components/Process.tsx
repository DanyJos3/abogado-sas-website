export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Evaluamos tu proyecto empresarial y definimos la estructura legal más conveniente para tu SAS.",
      duration: "1 día"
    },
    {
      number: "02",
      title: "Preparación de Documentos",
      description: "Elaboramos toda la documentación necesaria: estatutos, actas constitutivas y demás requisitos legales.",
      duration: "2-3 días"
    },
    {
      number: "03",
      title: "Reserva de Denominación",
      description: "Realizamos la reserva del nombre de tu empresa en la Superintendencia de Compañías.",
      duration: "1 día"
    },
    {
      number: "04",
      title: "Apertura de Cuenta de Integración",
      description: "Gestionamos la apertura de la cuenta bancaria temporal para el depósito del capital.",
      duration: "1-2 días"
    },
    {
      number: "05",
      title: "Constitución Legal",
      description: "Tramitamos la constitución ante notario y la inscripción en el Registro Mercantil.",
      duration: "3-5 días"
    },
    {
      number: "06",
      title: "Obtención de RUC",
      description: "Gestionamos la obtención del RUC y otros permisos necesarios para el funcionamiento.",
      duration: "1-2 días"
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proceso de Constitución
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Te acompañamos paso a paso en todo el proceso de constitución de tu SAS, 
            asegurando el cumplimiento de todos los requisitos legales.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:flex-row`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <div className="text-blue-600 font-semibold">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tiempo Total del Proceso
            </h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">
              7-15 días hábiles
            </div>
            <p className="text-gray-600 mb-6">
              Dependiendo de la complejidad y los tiempos de respuesta de las entidades públicas
            </p>
            <a
              href="#contacto"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
            >
              Comenzar Mi Proceso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
