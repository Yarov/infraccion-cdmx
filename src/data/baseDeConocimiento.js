/**
 * Base de conocimiento extraída de la Ley de Cultura Cívica de la Ciudad de México
 */

const baseDeConocimiento = {
  infracciones: [
    // INFRACCIONES CONTRA LA DIGNIDAD
    {
      id: "26-I",
      tipo: "Contra la dignidad de las personas",
      articulo: 26,
      fraccion: "I",
      descripcion: "Vejar, intimidar o maltratar física o verbalmente a cualquier persona o grupo de personas.",
      clase: "A",
      sancion: "Multa por 1 a 10 UMA o arresto de 6 a 12 horas o trabajo comunitario de 3 a 6 horas",
      conciliable: true,
      notasConciliacion: "Solo procederá cuando las partes de común acuerdo fijen el monto del daño y el probable infractor repare el daño."
    },
    {
      id: "26-II",
      tipo: "Contra la dignidad de las personas",
      articulo: 26,
      fraccion: "II",
      descripcion: "Coaccionar de cualquier manera a otra persona para realizar alguna conducta que atente contra su voluntad, su libre autodeterminación o represente un trato degradante.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "26-III",
      tipo: "Contra la dignidad de las personas",
      articulo: 26,
      fraccion: "III",
      descripcion: "Coartar o atentar contra la privacidad de una persona.",
      clase: "D",
      sancion: "Arresto de 20 a 36 horas o trabajo comunitario de 10 a 18 horas",
      conciliable: true,
      notasConciliacion: "Solo procederá cuando el probable infractor repare el daño; las partes de común acuerdo fijarán el monto del daño."
    },
    {
      id: "26-IV",
      tipo: "Contra la dignidad de las personas",
      articulo: 26,
      fraccion: "IV",
      descripcion: "Permitir a menores de edad el acceso a lugares a los que expresamente les esté prohibido, así como promover o permitir que estos realicen sobre vías de circulación vehicular, cualquier actividad por la que se pretenda obtener un ingreso económico.",
      clase: "D",
      sancion: "Arresto de 20 a 36 horas o trabajo comunitario de 10 a 18 horas"
    },
    {
      id: "26-V",
      tipo: "Contra la dignidad de las personas",
      articulo: 26,
      fraccion: "V",
      descripcion: "Propinar a una persona, en forma intencional y fuera de riña, golpes que no le causen lesión.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "26-IX",
      tipo: "Contra la dignidad de las personas",
      articulo: 26,
      fraccion: "IX",
      descripcion: "Proferir silbidos o expresiones verbales de connotación sexual a una persona con el propósito de afectar su dignidad.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "26-X",
      tipo: "Contra la dignidad de las personas",
      articulo: 26,
      fraccion: "X",
      descripcion: "Realizar la exhibición de órganos sexuales con la intención de molestar o agredir a otra persona.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas",
      nota: "Sólo procederá la presentación de la persona probable infractora cuando exista queja de la persona agredida o molestada."
    },
    {
      id: "26-XI",
      tipo: "Contra la dignidad de las personas",
      articulo: 26,
      fraccion: "XI",
      descripcion: "Vejar, intimidar, maltratar físicamente o incitar a la violencia contra un integrante de las instituciones de Seguridad Ciudadana.",
      clase: "E",
      sancion: "De 20 y hasta 36 horas, inconmutables de trabajo en favor de la comunidad"
    },

    // INFRACCIONES CONTRA LA TRANQUILIDAD
    {
      id: "27-I",
      tipo: "Contra la tranquilidad de las personas",
      articulo: 27,
      fraccion: "I",
      descripcion: "Prestar algún servicio sin que le sea solicitado y coaccionar de cualquier manera a quien lo reciba para obtener un pago por el mismo.",
      clase: "A",
      sancion: "Multa por 1 a 10 UMA o arresto de 6 a 12 horas o trabajo comunitario de 3 a 6 horas",
      nota: "La presentación del infractor sólo procederá por queja previa."
    },
    {
      id: "27-II",
      tipo: "Contra la tranquilidad de las personas",
      articulo: 27,
      fraccion: "II",
      descripcion: "Poseer animales sin adoptar las medidas de higiene necesarias que impidan malos olores o la presencia de plagas que ocasionen cualquier molestia a los vecinos.",
      clase: "A",
      sancion: "Multa por 1 a 10 UMA o arresto de 6 a 12 horas o trabajo comunitario de 3 a 6 horas"
    },
    {
      id: "27-III",
      tipo: "Contra la tranquilidad de las personas",
      articulo: 27,
      fraccion: "III",
      descripcion: "Producir o causar ruidos por cualquier medio que notoriamente atenten contra la tranquilidad o represente un posible riesgo a la salud.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "27-IV",
      tipo: "Contra la tranquilidad de las personas",
      articulo: 27,
      fraccion: "IV",
      descripcion: "Impedir el uso de los bienes del dominio público de uso común.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "27-V",
      tipo: "Contra la tranquilidad de las personas",
      articulo: 27,
      fraccion: "V",
      descripcion: "Obstruir con cualquier objeto entradas o salidas de inmuebles sin autorización del propietario o poseedor del mismo.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },

    // INFRACCIONES CONTRA LA SEGURIDAD CIUDADANA
    {
      id: "28-I",
      tipo: "Contra la seguridad ciudadana",
      articulo: 28,
      fraccion: "I",
      descripcion: "Permitir a la persona propietaria o poseedora de un animal que este transite libremente o transitar con él sin adoptar las medidas de seguridad necesarias, de acuerdo con las características particulares del animal, para prevenir posibles ataques a otras personas o animales, así como azuzarlo o no contenerlo.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "28-V",
      tipo: "Contra la seguridad ciudadana",
      articulo: 28,
      fraccion: "V",
      descripcion: "Ingerir bebidas alcohólicas en lugares públicos no autorizados o consumir, ingerir, inhalar o aspirar estupefacientes, psicotrópicos, enervantes o sustancias tóxicas en lugares públicos.",
      clase: "C",
      sancion: "Multa por 21 a 30 UMA o arresto de 25 a 36 horas o trabajo comunitario de 12 a 18 horas"
    },
    {
      id: "28-VIII",
      tipo: "Contra la seguridad ciudadana",
      articulo: 28,
      fraccion: "VIII",
      descripcion: "Reñir con una o más personas.",
      clase: "C",
      sancion: "Multa por 21 a 30 UMA o arresto de 25 a 36 horas o trabajo comunitario de 12 a 18 horas"
    },
    {
      id: "28-IX",
      tipo: "Contra la seguridad ciudadana",
      articulo: 28,
      fraccion: "IX",
      descripcion: "Llamar o solicitar los servicios de emergencia con fines ociosos que distraigan la prestación de los mismos, que constituyan falsas alarmas de siniestros o que puedan producir o produzcan temor o pánico colectivos.",
      clase: "D",
      sancion: "Arresto de 20 a 36 horas o trabajo comunitario de 10 a 18 horas",
      nota: "La sanción se aplicará al titular o poseedor de la línea telefónica desde la que se haya realizado la llamada; en caso de reincidencia se duplicará la sanción."
    },

    // INFRACCIONES CONTRA EL ENTORNO URBANO
    {
      id: "29-I",
      tipo: "Contra el entorno urbano de la Ciudad",
      articulo: 29,
      fraccion: "I",
      descripcion: "Abstenerse de recoger del espacio público, las heces de un animal su propiedad o bajo su custodia, así como tirar o abandonar dichos desechos fuera de los contenedores.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "29-II",
      tipo: "Contra el entorno urbano de la Ciudad",
      articulo: 29,
      fraccion: "II",
      descripcion: "Orinar o defecar en los lugares a que se refiere el artículo 5 de esta Ley.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "29-IV",
      tipo: "Contra el entorno urbano de la Ciudad",
      articulo: 29,
      fraccion: "IV",
      descripcion: "Tirar basura en lugares no autorizados.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    {
      id: "29-V",
      tipo: "Contra el entorno urbano de la Ciudad",
      articulo: 29,
      fraccion: "V",
      descripcion: "Dañar, pintar, maltratar, ensuciar o hacer uso indebido de las fachadas de inmuebles públicos o de particulares, sin autorización de éstos, estatuas, monumentos, postes, arbotantes, semáforos, parquímetros, buzones, tomas de agua, señalizaciones viales o de obras, puentes, pasos peatonales, plazas, parques, jardines, elementos de ornato u otros bienes semejantes.",
      clase: "B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas",
      nota: "El daño será competencia de la Persona Juzgadora hasta el valor de 20 veces la Unidad de Medida."
    }
  ],

  clasesInfracciones: {
    "A": {
      descripcion: "Infracciones tipo A",
      sancion: "Multa por 1 a 10 UMA o arresto de 6 a 12 horas o trabajo comunitario de 3 a 6 horas"
    },
    "B": {
      descripcion: "Infracciones tipo B",
      sancion: "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas"
    },
    "C": {
      descripcion: "Infracciones tipo C",
      sancion: "Multa por 21 a 30 UMA o arresto de 25 a 36 horas o trabajo comunitario de 12 a 18 horas"
    },
    "D": {
      descripcion: "Infracciones tipo D",
      sancion: "Arresto de 20 a 36 horas o trabajo comunitario de 10 a 18 horas"
    },
    "E": {
      descripcion: "Infracciones tipo E",
      sancion: "De 20 y hasta 36 horas, inconmutables de trabajo en favor de la comunidad"
    }
  },

  procedimientos: {
    conciliacion: "El procedimiento de conciliación se realiza con la presencia de ambas partes ante el Juez Cívico, quien procurará un acuerdo entre ellas.",
    mediacion: "La mediación comunitaria es un mecanismo voluntario para gestionar la solución de conflictos con ayuda de un mediador comunitario.",
    queja: "Las personas pueden presentar quejas orales o por escrito ante el Juez Cívico por hechos constitutivos de probables infracciones."
  },

  autoridades: {
    juzgadosCivicos: "Los Juzgados Cívicos son los encargados de conocer las infracciones e imponer las sanciones correspondientes.",
    policia: "La Secretaría de Seguridad Ciudadana es responsable de la detención y presentación de probables infractores ante el Juez Cívico."
  }
};

export default baseDeConocimiento;