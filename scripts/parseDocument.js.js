// Dividir el texto en líneas
const lineas = texto.split('\n');

// Expresiones regulares para detectar artículos e infracciones
const regexArticulo26 = /Artículo 26.- Son infracciones contra la dignidad de las personas:/i;
const regexArticulo27 = /Artículo 27.- Son infracciones contra la tranquilidad de las personas:/i;
const regexArticulo28 = /Artículo 28.- Son infracciones contra la seguridad ciudadana:/i;
const regexArticulo29 = /Artículo 29.- Son infracciones contra el entorno urbano de la Ciudad:/i;
const regexFraccion = /^\s*(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XVI|XVII|XVIII|XIX)\.\s*(.*)/i;

// Variables para almacenar la información
const infracciones = [];
let articuloActual = null;
let tipoInfraccion = null;

// Recorrer las líneas y extraer la información
for (let i = 0; i < lineas.length; i++) {
  const linea = lineas[i].trim();

  // Detectar artículos
  if (regexArticulo26.test(linea)) {
    articuloActual = 26;
    tipoInfraccion = "Contra la dignidad de las personas";
  } else if (regexArticulo27.test(linea)) {
    articuloActual = 27;
    tipoInfraccion = "Contra la tranquilidad de las personas";
  } else if (regexArticulo28.test(linea)) {
    articuloActual = 28;
    tipoInfraccion = "Contra la seguridad ciudadana";
  } else if (regexArticulo29.test(linea)) {
    articuloActual = 29;
    tipoInfraccion = "Contra el entorno urbano de la Ciudad";
  }

  // Detectar fracciones
  const matchFraccion = linea.match(regexFraccion);
  if (articuloActual && matchFraccion) {
    const fraccion = matchFraccion[1];
    const descripcion = matchFraccion[2];

    // Detectar notas adicionales (siguientes líneas)
    let notas = "";
    let j = i + 1;
    while (j < lineas.length && !regexFraccion.test(lineas[j]) &&
      !regexArticulo26.test(lineas[j]) && !regexArticulo27.test(lineas[j]) &&
      !regexArticulo28.test(lineas[j]) && !regexArticulo29.test(lineas[j])) {
      if (lineas[j].trim()) {
        notas += lineas[j].trim() + " ";
      }
      j++;
    }

    // Determinar clase de infracción (esto requeriría datos del artículo 32)
    const clase = determinarClase(articuloActual, fraccion);

    // Crear objeto de infracción
    infracciones.push({
      id: `${articuloActual}-${fraccion}`,
      tipo: tipoInfraccion,
      articulo: articuloActual,
      fraccion: fraccion,
      descripcion: descripcion,
      clase: clase,
      sancion: determinarSancion(clase),
      nota: notas.trim() || null,
      conciliable: esInfraccionConciliable(articuloActual, fraccion)
    });
  }
}

// Guardar resultado en un archivo JSON
fs.writeFileSync(
  './src/data/baseConocimiento.js',
  `/**
 * Base de conocimiento extraída de la Ley de Cultura Cívica de la Ciudad de México
 */

const baseDeConocimiento = ${JSON.stringify({ infracciones }, null, 2)};

export default baseDeConocimiento;`
);

console.log(`Se han extraído ${infracciones.length} infracciones.`);
return infracciones;
  } catch (error) {
  console.error('Error al procesar el documento:', error);
  return [];
}
}

// Función para determinar la clase de infracción según la tabla del artículo 32
function determinarClase(articulo, fraccion) {
  // Esta función debería implementarse según la tabla del artículo 32
  // Ejemplo simplificado:
  const clasificaciones = {
    "26": {
      "I": "A",
      "II": "B", "V": "B", "IX": "B", "X": "B",
      "III": "D", "IV": "D", "VI": "D", "VII": "D", "VIII": "D",
      "XI": "E"
    },
    "27": {
      "I": "A", "II": "A",
      "III": "B", "IV": "B", "V": "B", "VI": "B",
      "VII": "D"
    },
    "28": {
      "I": "B", "II": "B", "III": "B", "IV": "B",
      "V": "C", "VI": "C", "VII": "C", "VIII": "C", "X": "C", "XII": "C", "XIII": "C", "XIV": "C", "XIX": "C",
      "IX": "D", "XI": "D", "XV": "D", "XVI": "D", "XVII": "D"
    },
    "29": {
      "I": "B", "II": "B", "III": "B", "IV": "B", "V": "B", "VI": "B", "VII": "B",
      "VIII": "D", "XV": "D",
      "IX": "C", "X": "C", "XI": "C", "XII": "C", "XIII": "C", "XIV": "C"
    }
  };

  return clasificaciones[articulo] && clasificaciones[articulo][fraccion]
    ? clasificaciones[articulo][fraccion]
    : "?";
}

// Función para determinar la sanción según la clase
function determinarSancion(clase) {
  const sanciones = {
    "A": "Multa por 1 a 10 UMA o arresto de 6 a 12 horas o trabajo comunitario de 3 a 6 horas",
    "B": "Multa por 11 a 40 UMA o arresto de 13 a 24 horas o trabajo comunitario de 6 a 12 horas",
    "C": "Multa por 21 a 30 UMA o arresto de 25 a 36 horas o trabajo comunitario de 12 a 18 horas",
    "D": "Arresto de 20 a 36 horas o trabajo comunitario de 10 a 18 horas",
    "E": "De 20 y hasta 36 horas, inconmutables de trabajo en favor de la comunidad"
  };

  return sanciones[clase] || "Sanción no especificada";
}

// Función para determinar si una infracción es conciliable
function esInfraccionConciliable(articulo, fraccion) {
  // Lista de infracciones conciliables según la ley
  const infraccionesConciliables = [
    { articulo: 26, fraccion: "I" },
    { articulo: 26, fraccion: "III" },
    { articulo: 26, fraccion: "VI" },
    { articulo: 26, fraccion: "VII" }
  ];

  return infraccionesConciliables.some(inf =>
    inf.articulo == articulo && inf.fraccion == fraccion
  );
}

// Ejecutar la extracción
const rutaArchivo = process.argv[2] || './ley-cultura-civica-cdmx.pdf';
console.log(`Analizando el archivo: ${rutaArchivo}`);
extraerInfracciones(rutaArchivo)
  .then(() => console.log('Proceso completado'))
  .catch(err => console.error('Error:', err));