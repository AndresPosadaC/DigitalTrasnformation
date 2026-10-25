# DigitalTrasnformation
Propuesta de consultoría para Finagro, enfocada en el diagnóstico, digitalización y automatización de procesos con IA en 24 meses. El documento interactivo, accesible localmente o en GitHub Pages, detalla el alcance, método de transformación, frentes a optimizar, roadmap, servicios de IA, modelo de cobro y valor de la propuesta. 
# Propuesta Finagro · Diagnóstico y transformación digital de procesos

Documento web interactivo que presenta la propuesta de consultoría para **Finagro**. La propuesta cubre el diagnóstico de procesos, su digitalización y su automatización con inteligencia artificial, en un horizonte de **24 meses**.

El documento se recorre haciendo scroll. Las fases y etapas aparecen en orden, y una regla de 24 meses fija en la parte superior se llena a medida que el lector avanza por el roadmap.

## Contenido del documento

| Sección | Qué presenta |
|---|---|
| **Alcance** | Dos programas en paralelo: rediseño de procesos (60%) y digitalización con IA (40%). |
| **Método de transformación** | Las tres fases que guían todo el proyecto. **01 Find the Money**: identificar los tres problemas que más dinero cuestan. **02 Map the Outcome**: asignar cada problema a GROW, SCALE, PROTECT, LIVE o TRUST. **03 Price the Outcome**: cobrar por valor y no por hora. |
| **Frentes a optimizar** | Los 7 frentes donde se pierde dinero: ventas, costos, eficiencia, velocidad, rentabilidad, riesgo y capacidad humana. |
| **Roadmap** | 4 fases de 6 meses y 11 rubros, con su peso, entregables, roles e intensidad del equipo por fase. Incluye un Gantt consolidado mes a mes. |
| **Servicios de IA** | Una capa fundacional (datos, nube y seguridad) y una capa de IA aplicada (agentes, copilots y modelos predictivos). |
| **Cómo cobrarlo** | La evolución de los modelos de cobro: INPUT → USAGE → OUTPUT → OUTCOME. Incluye un simulador del componente variable. |
| **Valor de la propuesta** | COP 7.860 M con IVA incluido, desglosados en costo directo y AIU. También el pago por lotes de resultados y los compromisos de co-responsabilidad. |
| **Por qué este valor** | Los argumentos que sustentan el precio: regulación, perfiles escasos, dedicación escalonada, transferencia y AIU. |

## Estructura del repositorio

```
├── index.html    # Estructura y textos de todas las secciones
├── styles.css    # Estilos, paleta de colores y tipografía (variables al inicio)
├── script.js     # Datos del roadmap, Gantt, regla de meses, animaciones y simulador
└── README.md
```

No usa frameworks, dependencias ni proceso de compilación. Es HTML, CSS y JavaScript puros.

## Cómo verlo

**Localmente:** clona el repositorio y abre `index.html` en el navegador.

```bash
git clone <url-del-repositorio>
cd <carpeta-del-repositorio>
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

**En GitHub Pages:**

1. Ve a **Settings → Pages** en el repositorio.
2. En **Source**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
4. En uno o dos minutos el documento queda publicado en `https://<usuario>.github.io/<repositorio>/`.

## Cómo editarlo

### Rubros y fases (`script.js`)

El roadmap completo se genera a partir de dos estructuras de datos. Si las modificas, las fases, las tarjetas, el Gantt y la regla de meses se actualizan solos.

**`R`: los 11 rubros**

```js
1: {
  n: 'Gobierno de procesos y lineamientos',   // nombre
  w: 16,                                       // peso en % del valor
  i: 'AAMM',                                   // intensidad en F1, F2, F3, F4
  roles: ['Arquitecto de procesos líder', ...],
  d: 'Descripción del rubro...',
  it: ['Entregable 1', 'Entregable 2']
}
```

La intensidad usa una letra por fase: `A` = alta, `M` = media, `B` = baja.

**`P`: las 4 fases**

```js
{ c: 'F1', m: [1, 6], t: 'Descubrimiento y Find the Money',
  tf: 'Aplica: 01 FIND THE MONEY', ids: [2, 1, 3, 8] }
```

`m` es el rango de meses, e `ids` son los rubros que se muestran en esa fase, en orden.

### Colores y tipografía (`styles.css`)

Al inicio del archivo están las variables del tema claro. Más abajo se redefinen para el modo oscuro, que se activa automáticamente según la preferencia del sistema.

```css
--field:   #1D6A44;  /* verde principal */
--harvest: #B97C0C;  /* acento dorado */
--display: "Archivo", ...;
--body:    "Public Sans", ...;
```

### Cifras que se editan a mano (`index.html`)

Estas cifras están escritas directamente en el HTML y **no** se recalculan:

- Porcentajes de los dos programas (60% / 40%)
- Tabla de valor: costo directo, AIU, IVA y total
- Valores de los lotes de pago por fase
- Barra de composición del valor (atributos `flex`)

Si cambias el presupuesto o los pesos de los rubros, actualiza estas cifras para que el documento sea coherente.

## Valor de referencia

| Concepto | COP millones |
|---|---:|
| Costo directo | 4.794 |
| A · Administración (8,8%): pólizas, jurídico, ICA, GMF, costo financiero | 421 |
| I · Imprevistos (4,0%) | 192 |
| U · Utilidad (25% sobre costo directo) | 1.198 |
| **Base antes de IVA** | **6.605** |
| IVA 19% | 1.255 |
| **Valor total** | **7.860** |

Las cifras de pólizas, ICA y GMF son estimaciones. Deben validarse con las cotizaciones de la aseguradora, las condiciones del pliego y la asesoría contable. Las cifras del simulador del componente variable son ilustrativas y se reemplazan por la línea base que resulte de la Fase 1.

## Requisitos

- Cualquier navegador moderno: Chrome, Edge, Firefox o Safari.
- Conexión a internet para cargar las tipografías desde Google Fonts. Sin conexión, el documento usa fuentes del sistema.
- Respeta la preferencia de movimiento reducido del sistema operativo: si está activada, se desactivan las animaciones.

## Autor

**Andrés Posada**

---

*Documento de trabajo · Borrador v1 · Octubre 2026*
