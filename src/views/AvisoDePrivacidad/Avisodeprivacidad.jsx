// src/pages/AvisoPrivacidad.jsx
import React from "react";

// Estilos minimalistas médicos
const styles = {
  root: {
    background: "#f4f7ff",
    color: "#214a67",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    minHeight: "100vh",
    margin: 0,
  },
  container: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 16px rgba(47,183,161,0.07)",
    padding: "2.5rem 2rem",
    maxWidth: "900px",
    margin: "2rem auto",
  },
  h1: {
    color: "#2fb7a1",
    fontWeight: 700,
    fontSize: "2.1rem",
    marginTop: 0,
    marginBottom: "1rem",
  },
  h2: {
    color: "#2fb7a1",
    fontWeight: 700,
    fontSize: "1.3rem",
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  p: {
    color: "#214a67",
    fontSize: "1rem",
    lineHeight: 1.7,
    marginBottom: "1.1rem",
  },
  ul: {
    color: "#214a67",
    fontSize: "1rem",
    lineHeight: 1.7,
    marginBottom: "1.1rem",
    paddingLeft: "1.2rem",
  },
  a: {
    color: "#2fb7a1",
    textDecoration: "underline",
  },
  hr: {
    border: "none",
    borderTop: "1px solid #eaf0ff",
    margin: "2rem 0",
  },
};

export default function AvisoPrivacidad() {
  const handleBack = () => window.history.back();

  return (
    <div style={styles.root}>
      <main className="container" style={styles.container}>
        <h1 style={styles.h1}>Política de Privacidad</h1>
        <p style={styles.p}>
          Esta aplicación recoge algunos datos personales de sus usuarios.
          Controlador de datos y propietario: <strong>ECD</strong>.
        </p>
        <p style={styles.p}>
          Estas políticas de privacidad rigen el uso que toda persona natural o
          jurídica, o representante en cualquier forma de los mismos (el/los
          “Usuario(s)”), hace de la plataforma, aplicación, página web y de
          cualquier servicio que sea de propiedad o esté controlado por <strong>ECD</strong>. Por medio de este documento se explica qué información se recopila,
          cómo se utiliza dicha información, en qué circunstancias es compartida
          dicha información, y los derechos que tiene el Usuario sobre esa
          información.
        </p>
        <p style={styles.p}>
          Esta política se aplica si el usuario accede al servicio a través de un
          navegador, aplicación móvil, o por medio de cualquier otro método
          existente o que pudiera llegar a existir en el futuro. Por el uso de la
          aplicación, se entiende que el Usuario ha leído y aceptado la Política de
          Privacidad que se expresa a continuación, en todas sus partes. En caso
          contrario, el Usuario deberá abstenerse de acceder a la aplicación, ya
          sea directa o indirectamente, y de utilizar cualquier información o
          servicio provisto por la misma.
        </p>

        <h2 style={styles.h2}>Aceptación y Modificaciones</h2>
        <p style={styles.p}>
          Por la sola utilización de la aplicación, cualquier persona adquiere la
          condición de Usuario y expresa su aceptación plena y sin reservas de
          todas y cada una de las cláusulas de esta Política de Privacidad. La
          utilización de los Servicios implica la aceptación plena y sin reservas
          por parte del Usuario de los Términos y Condiciones publicados en la
          aplicación, y que son complementarios con la Política de Privacidad.
          <strong>ECD</strong> podrá modificar la Política de Privacidad en cualquier
          momento y sin necesidad de aviso previo. El uso posterior a cualquier
          cambio constituirá una aceptación expresa de los mismos.
        </p>

        <h2 style={styles.h2}>Tipos de datos recolectados</h2>
        <p style={styles.p}>
          Entre los tipos de datos personales que esta aplicación recopila, por sí
          mismo o a través de terceros, se encuentran: posición geográfica,
          dirección de correo electrónico, nombre de usuario, contraseña e imagen.
          Otros datos personales recopilados se pueden describir en otras secciones
          de esta política de privacidad o mediante un texto de explicación dedicado
          contextualmente con la recopilación de datos.
        </p>
        <p style={styles.p}>
          Los datos personales pueden ser proporcionados libremente por el usuario o
          recopilados automáticamente cuando se utiliza esta aplicación. Para
          reservar una cita, será necesario que el Usuario entregue su nombre real
          y un número de teléfono de contacto, además, si la atención es a
          domicilio, tendrá que indicar la dirección de su domicilio. Estos datos
          serán entregados al Prestador de Servicio elegido, para que este pueda
          cumplir con el servicio prestado.
        </p>

        <h2 style={styles.h2}>Modo y lugar de procesamiento de los datos</h2>
        <p style={styles.p}>
          El controlador de datos procesa los datos de los usuarios de manera
          adecuada y tomará las medidas de seguridad adecuadas para evitar el
          acceso no autorizado, la divulgación, la modificación o la destrucción no
          autorizada de los datos. El procesamiento de datos se lleva a cabo
          utilizando computadoras y/o herramientas habilitadas para TI, siguiendo
          los procedimientos de la organización y los modos estrictamente
          relacionados con los fines indicados.
        </p>
        <p style={styles.p}>
          Los datos se procesan en las oficinas de operación del controlador de
          datos y en cualquier otro lugar donde se encuentren las partes
          involucradas en el procesamiento.
        </p>
        <p style={styles.p}>
          Los datos se conservan durante el tiempo necesario para proporcionar el
          servicio solicitado por el Usuario, o establecidos por los fines
          descritos en este documento, y el Usuario siempre puede solicitar que el
          controlador de datos suspenda o elimine los datos.
        </p>

        <h2 style={styles.h2}>El uso de los datos recopilados</h2>
        <p style={styles.p}>
          Los datos relativos al Usuario se recopilan para permitir que el
          propietario brinde sus servicios, así como para los siguientes propósitos:
          acceso a cuentas de servicios de terceros, registro y autenticación,
          interacciones basadas en la ubicación, monitoreo de infraestructura y
          administración de soporte y solicitudes de contacto.
        </p>
        <p style={styles.p}>
          Esta aplicación puede enviar notificaciones automáticas al usuario.
        </p>

        <h2 style={styles.h2}>Información adicional sobre la recopilación y el procesamiento de datos</h2>
        <p style={styles.p}>
          Los datos personales del Usuario pueden ser utilizados con fines legales
          por el controlador de datos, en el Tribunal o en las etapas que conducen
          a posibles acciones legales que surjan del uso indebido de esta
          aplicación o los servicios relacionados. El Usuario declara conocer que
          es posible que el controlador de datos deba revelar datos personales a
          petición de las autoridades públicas.
        </p>
        <p style={styles.p}>
          Los usuarios tienen derecho, en cualquier momento, a saber si sus datos
          personales han sido almacenados y pueden consultar el controlador de datos
          para conocer sus contenidos y origen, verificar su exactitud o solicitar
          que se completen, cancelen, actualicen o corrijan, o para su
          transformación en formato anónimo o para bloquear cualquier información
          que se tenga en violación de la ley, así como para oponerse a su
          tratamiento por cualquier razón legítima. Las solicitudes deben enviarse
          al controlador de datos a la información de contacto establecida
          anteriormente.
        </p>
        <p style={styles.p}>
          Salvo disposición expresa en contrario, <strong>ECD</strong> podrá divulgar
          información personal de los Usuarios, cuando de buena fe estime que es
          razonablemente necesaria para cumplir con su responsabilidad legal,
          cuando así lo exija una orden judicial o de una autoridad administrativa
          competente, y para proteger los derechos, propiedad o seguridad de
          <strong>ECD</strong>, de los Usuarios o de terceros.
        </p>
        <p style={styles.p}>
          EL USUARIO DECLARA EXPRESAMENTE CONOCER Y ACEPTAR ESTA POLÍTICA DE
          PRIVACIDAD Y LOS DERECHOS QUE ÉSTA OTORGA.
        </p>
        <p style={styles.p}>
          Para cualquier consulta sobre privacidad, puede contactarnos en:{" "}
          <a href="mailto:privacidad@ecd.com" style={styles.a}>privacidad@ecd.com</a>
        </p>

        <hr style={styles.hr} />

        <h1 style={styles.h1}>Términos y Condiciones de Uso</h1>
        <h2 style={styles.h2}>1.- Condiciones de Uso</h2>
        <p style={styles.p}>
          El registro, uso y ejecución de la plataforma <strong>Expedientes Clínicos Digitales (ECD)</strong> y sus servicios están sujetos a los siguientes Términos y Condiciones, aplicables a toda persona natural o jurídica que contrate los servicios, navegue por el sitio o utilice la plataforma. El uso de <strong>ECD</strong> implica la aceptación de estos Términos y Condiciones, que se regirán por la legislación aplicable y las normativas de protección de datos y derechos de los pacientes.
        </p>
        <p style={styles.p}>
          El usuario declara que los datos proporcionados son veraces y actualizados, siendo responsable de los mismos en el uso del sitio y eximiendo a <strong>ECD</strong> de cualquier error o problema por inexactitud.
        </p>

        <h2 style={styles.h2}>2.- Definiciones</h2>
        <ul style={styles.ul}>
          <li><strong>ECD:</strong> Plataforma web dedicada a la prestación de servicios telemáticos y software para gestión clínica.</li>
          <li><strong>Usuario:</strong> Persona natural o jurídica que utiliza los servicios, navega o contrata a través de ECD.</li>
          <li><strong>Términos y Condiciones:</strong> Condiciones generales de contratación aplicables a todos los usuarios.</li>
          <li><strong>Servicios:</strong> Alternativas disponibles para el usuario en la plataforma, detalladas en cada caso.</li>
          <li><strong>Recursos y Aplicaciones:</strong> Características técnicas y de programación que permiten gestionar los servicios contratados.</li>
          <li><strong>Login y Contraseña:</strong> Sistemas de seguridad para acceso y autenticación del usuario.</li>
          <li><strong>Fuerza Mayor:</strong> Eventos imprevisibles que puedan afectar el funcionamiento del servicio.</li>
          <li><strong>Mal Uso del Software:</strong> Conducta contraria a los Términos y Condiciones que cause daños a ECD, usuarios o terceros.</li>
          <li><strong>Las Partes:</strong> Referencia conjunta a ECD y el Usuario.</li>
          <li><strong>Representante Legal:</strong> Persona natural que representa legalmente a la empresa usuaria.</li>
          <li><strong>No Miembro:</strong> Persona que utiliza componentes o servicios sin completar el registro, igualmente sujeta a estos términos.</li>
        </ul>

        <h2 style={styles.h2}>3.- De los Servicios</h2>
        <p style={styles.p}>
          <strong>ECD</strong> ofrece servicios bajo la modalidad de software como servicio, disponibles para los usuarios mediante cuenta propia y correo electrónico. El usuario puede modificar, ampliar o cambiar planes según las especificaciones de cada servicio. Los servicios actuales y futuros estarán sujetos a estos Términos y Condiciones.
        </p>
        <p style={styles.p}>
          El usuario es responsable exclusivo del uso de su cuenta y credenciales.
        </p>

        <h2 style={styles.h2}>4.- Acuerdo de Nivel de Servicio (SLA)</h2>
        <p style={styles.p}>
          <strong>ECD</strong> realizará acciones para mantener el 99% del tiempo el servicio operativo, salvo mantenimientos programados o fuerza mayor. No será responsable por problemas de conexión, transmisión de datos o acceso a internet del usuario. Se recomienda el uso de navegadores actualizados para la mejor experiencia.
        </p>

        <h2 style={styles.h2}>5.- Precio</h2>
        <p style={styles.p}>
          El usuario deberá pagar los valores establecidos para cada servicio, más impuestos aplicables. Las renovaciones pueden implicar incrementos conforme a índices oficiales. Cambios de precios serán comunicados con al menos 30 días de anticipación.
        </p>

        <h2 style={styles.h2}>6.- Formas de Pago</h2>
        <p style={styles.p}>
          El pago se realiza siempre de forma anticipada. <strong>ECD</strong> puede ofrecer diversos métodos de pago y emitir la factura correspondiente. El no pago puede implicar suspensión de servicios hasta la resolución de la deuda.
        </p>

        <h2 style={styles.h2}>7.- Suspensión y Cancelación de Servicios</h2>
        <p style={styles.p}>
          <strong>ECD</strong> se reserva el derecho de suspender o cancelar servicios ante incidencias de fuerza mayor o mal uso del software, comunicando al usuario con al menos 10 días de anticipación. La cancelación implica la eliminación de los datos asociados.
        </p>

        <h2 style={styles.h2}>8.- Copias y Respaldo</h2>
        <p style={styles.p}>
          <strong>ECD</strong> realiza copias de seguridad temporales, pero no se responsabiliza por pérdida o borrado accidental de datos. El servicio de alojamiento no incluye reposición de contenidos salvados.
        </p>

        <h2 style={styles.h2}>9.- Registro de Comunicaciones</h2>
        <p style={styles.p}>
          El usuario acepta que las comunicaciones pueden ser registradas para mejorar la calidad y seguridad de los servicios, cumpliendo con la normativa de protección de datos.
        </p>

        <h2 style={styles.h2}>10.- Devoluciones</h2>
        <p style={styles.p}>
          <strong>ECD</strong> no efectuará devoluciones, reembolsos o restituciones por servicios no utilizados, salvo crédito por el importe del servicio no consumido en caso de cancelación anticipada.
        </p>

        <h2 style={styles.h2}>11.- Inicio, Duración, Renovaciones, Cambio de Planes</h2>
        <p style={styles.p}>
          Los servicios se ejecutan tras el pago y pueden ser contratados en diversos plazos. Las renovaciones son tácitas salvo aviso previo. Cambios de plan y cancelaciones deben ser solicitados por escrito.
        </p>

        <h2 style={styles.h2}>12.- Garantía de Satisfacción</h2>
        <p style={styles.p}>
          El usuario dispone de 30 días desde la activación para resolver el contrato sin penalización, salvo cuotas ya pagadas o servicios ya efectuados.
        </p>

        <h2 style={styles.h2}>13.- Modificaciones</h2>
        <p style={styles.p}>
          <strong>ECD</strong> puede modificar características y condiciones de los servicios, comunicando al usuario, quien puede rescindir el contrato si no está de acuerdo.
        </p>

        <h2 style={styles.h2}>14.- Obligaciones</h2>
        <ul style={styles.ul}>
          <li>ECD debe prestar los servicios contratados y mantener las instalaciones necesarias.</li>
          <li>El usuario debe cumplir con las obligaciones de pago y uso adecuado del servicio, mantener sus dispositivos actualizados y proteger sus credenciales.</li>
          <li>El usuario es responsable del contenido y uso de su cuenta, correo electrónico y sitio web, así como de la veracidad de sus datos.</li>
          <li>El usuario debe cerrar sesión al finalizar la jornada y realizar la verificación en dos pasos si corresponde.</li>
          <li>No compartir credenciales con terceros ajenos a la empresa.</li>
          <li>Crear un usuario por cada persona que trabaje en la organización.</li>
        </ul>

        <h2 style={styles.h2}>15.- Propiedad Intelectual</h2>
        <p style={styles.p}>
          Todos los derechos de propiedad intelectual de los productos y servicios de <strong>ECD</strong> y el usuario permanecen en propiedad de cada parte. Los datos almacenados y procesados por <strong>ECD</strong> son de exclusiva propiedad del usuario.
        </p>

        <h2 style={styles.h2}>16.- Confidencialidad</h2>
        <p style={styles.p}>
          Las partes convienen en mantener en estricta confidencialidad toda información relacionada con las actividades comerciales, técnicas y datos personales intercambiados. La obligación de confidencialidad subsiste aún después del término de los servicios.
        </p>

        <h2 style={styles.h2}>17.- Protección de Datos Personales</h2>
        <p style={styles.p}>
          <strong>ECD</strong> se somete a la legislación vigente sobre protección de datos personales y confidencialidad de fichas clínicas. El usuario es responsable de la información almacenada y debe cumplir con la normativa aplicable.
        </p>
        <p style={styles.p}>
          Para ejercer derechos ARCO (Acceso, Rectificación, Cancelación, Oposición), puede contactarnos en: <a href="mailto:privacidad@ecd.com" style={styles.a}>privacidad@ecd.com</a>
        </p>

        <h2 style={styles.h2}>18.- Limitaciones de Responsabilidad</h2>
        <p style={styles.p}>
          <strong>ECD</strong> no garantiza la disponibilidad continua e ininterrumpida del servicio por circunstancias de fuerza mayor, problemas técnicos o ciberataques. El usuario asume toda la responsabilidad derivada del uso de la información alojada y del contenido de su correo electrónico.
        </p>

        <h2 style={styles.h2}>19.- Comunicaciones</h2>
        <p style={styles.p}>
          Todas las notificaciones entre las partes se realizarán por correo electrónico. El usuario es responsable de mantener sus datos actualizados.
        </p>

        <h2 style={styles.h2}>20.- Prohibición de Cesión</h2>
        <p style={styles.p}>
          Las partes no podrán ceder derechos y obligaciones sin consentimiento previo y por escrito de la otra parte.
        </p>

        <h2 style={styles.h2}>21.- Término Anticipado de los Servicios</h2>
        <p style={styles.p}>
          La prestación de los servicios se extinguirá por las causas generales establecidas en la legislación y por incumplimiento de obligaciones. La resolución anticipada no genera derecho de indemnización para el usuario.
        </p>

        <h2 style={styles.h2}>22.- Casos Especiales de Sucesión, Fusiones y Adquisiciones</h2>
        <p style={styles.p}>
          En caso de sucesión, fusión o adquisición, <strong>ECD</strong> exigirá la documentación legal correspondiente para el traspaso de accesos y datos, respetando la confidencialidad y protección de datos de los pacientes.
        </p>

        <h2 style={styles.h2}>23.- Cumplimiento de Protección de Datos Personales</h2>
        <p style={styles.p}>
          <strong>ECD</strong> declara regirse por los principios de finalidad, interés legítimo y titularidad en el tratamiento de datos personales, conforme a la legislación vigente.
        </p>

        <h2 style={styles.h2}>24.- Aceptación de los Términos y Condiciones</h2>
        <p style={styles.p}>
          El uso de <strong>ECD</strong> implica la aceptación libre y espontánea de estos Términos y Condiciones, sometiéndose a su regulación y a la legislación aplicable.
        </p>
        <hr style={styles.hr} />
        <p style={styles.p}>
          Para cualquier consulta sobre privacidad o términos, puede contactarnos en:{" "}
          <a href="mailto:info@ecd.com" style={styles.a}>info@ecd.com</a>
        </p>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button
            style={{
              background: "#eaf7f5",
              color: "#2fb7a1",
              border: "none",
              borderRadius: "10px",
              padding: "0.7rem 1.2rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(47,183,161,0.07)"
            }}
            onClick={handleBack}
          >
            ← Regresar
          </button>
        </div>
      </main>
    </div>
  );
}
  