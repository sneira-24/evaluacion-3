# Panel de Desembarques — Pesquera Talcahuano Sur SpA

## Elementos de React utilizados

### Componentes (2)

1. **FiltrarDesembarque:** Se encuentra a la izquierda en el panel y sirve para filtrar los desembarques por especie o estado.
2. **ListaDesembarque:** Es el componente principal y es el que muestra la lista de desembarques.

### useState (5)

1. **error:** Se utiliza para que el mensaje del error sea dinámico.
2. **desembarque:** Se utiliza para recibir los datos del JSON.
3. **cargando:** Se utiliza para asignar el mensaje de cargando.
4. **prioritarios:** Se utiliza para modificar la lista de los desembarques prioritarios.
5. **filtro:** Se utiliza para usar dinámicamente el valor que se encuentra en el input de filtro.

### useEffect (1)

1. **obtenerDesembarques:** Se utiliza como función asincrónica para obtener los datos del servidor JSON.

### Eventos (2)

1. **onChange:** Se utiliza para detectar el cambio en la casilla de input.
2. **onClick:** Se utiliza para detectar la acción del botón priorizar.

---

## Sugerencias de Claude AI

**Prompt:** ¿De qué manera puedo sanitizar la entrada para que no haya inyección de código?

**Respuesta sugerida:**

```js
function sanitizar(valor) {
  return valor.replace(/[<>"'`=;()/\\]/g, "");
}
```

**Por qué no se aplicó:** La descarté porque la misma IA explicó que React ya escapa el contenido que renderiza en el DOM por defecto, por lo que una inyección directa desde el input no llegaría a ejecutarse.

---

## Análisis con SonarQube

### Hallazgos

1. **Use `<output>` instead of the "status" role to ensure accessibility across all devices.**
   - **Corrección aplicada:** Se cambió la línea 35 de `ListaDesembarques` para mejorar la accesibilidad.

2. **A fragment with only one child is redundant.**
   - **Corrección aplicada:** Se removieron los `<></>` (fragmento) ya que no eran necesarios al contar con un `<div>` y un `<main>`.
