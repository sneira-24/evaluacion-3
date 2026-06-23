Elementos de React utilizados:

Componentes (2):
1.- FiltrarDesembarque: Se encuentra a la izquierda en el panel y sirve para filtrar los desembarques por especie o estado
2.- ListaDesembarque: Es el componente principal y es el que muestra la lista de desembarques

useState (5):
1.- error: se utiliza para que el mensaje del error sea dinámico
2.- desembarque: se utiliza para recibir los datos del JSON
3.- cargando: se utiliza para asignar el mensaje de cargando
4.- prioritarios: se utiliza para modificar la lista de los desembarques prioritarios
5.- filtro: se utiliza para usar dinámicamente el valor que se encuentra en el input de filtro

useEffect (1):
1.- obtenerDesembarques: se utiliza como función asincrónica para obtener los datos del servidor JSON

eventos (2):
1.- onChange: se utiliza para detectar el cambio en la casilla de input
2.- onClick: se utiliza para detectar la acción del botón priorizar

Sugerencias de Claude AI:

prompt: de qué manera puedo sanitizar la entrada para que no haya inyección de código?
respuesta:

function sanitizar(valor) {
return valor.replace(/[<>"'`=;()/\\]/g, "");
}

por qué no se aplicó: la descarté porque la misma IA me explicó que React ya escapa el contenido que renderiza en el DOM por defecto, así que una inyección directa desde este input no llegaría a ejecutarse.

Análisis con SonarQube:

Hallazgos:

1.- Use <output> instead of the "status" role to ensure accessibility across all devices.
Corrección aplicada: se cambió la linea 35 de "ListaDesembarques" para que tenga mejor accesibilidad.

2.- A fragment with only one child is redundant.
Corección aplicada: se removieron los <></> (fragmento) ya que no eran necesarios al tener un <div> y un <main>.
