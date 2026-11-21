# DattaQuest · Primera implementación de Otros servicios

## Publicación en GitHub Pages

1. Descomprimí el ZIP en tu PC.
2. Copiá los archivos y carpetas de **dattashamir-main/** al nivel principal (raíz) de tu repositorio `TomiAF98/dattashamir` (o subí los archivos modificados conservando la estructura).
3. Hacé commit a la rama publicada por GitHub Pages.
4. Abrí `https://tomiaf98.github.io/dattashamir/index.html` y hacé clic en **OTROS SERVICIOS**.
5. También podés ir a `https://tomiaf98.github.io/dattashamir/otros-servicios/index.html`.

La carpeta `.nojekyll` previene que GitHub Pages excluya nombres especiales. No necesitás servidor ni base de datos para probar esta implementación.

## Servicios y estado

| Página | Estado inicial |
|---|---|
| `otros-servicios/prestadores/index.html` | Interfaz + validación del número; **no consulta** el operador actual (requiere portabilidad autorizada). |
| `otros-servicios/prefijos/index.html` | Consulta **local y funcional** de una **muestra parcial** de códigos en `data/prefijos.json`. |
| `otros-servicios/dolar/index.html` | Consulta **funcional** de cotizaciones vía `https://dolarapi.com/v1/dolares`. API externa gratuita, **no base propia todavía**. Caché local durante 3 horas. Fuente atribuida. |
| `otros-servicios/cuil/index.html` | Interfaz + validación DNI; **no calcula ni asegura** el CUIL real. Requiere ANSES u otra vía autorizada. |
| `otros-servicios/radicacion/index.html` | Interfaz + validación patente; **no consulta** DNRPA ni radicación real. |
| `otros-servicios/imei/index.html` | **Valida estructura y Luhn localmente**. **No consulta** listas de bloqueo/robo (requiere fuente autorizada). |

## Organización

- Los archivos HTML originales de la raíz fueron modificados únicamente para agregar el enlace desplegable y dos referencias a recursos (`otros-servicios/comun/nav.css`, `otros-servicios/comun/nav.js`).
- `otros-servicios/comun/` tiene estilos y scripts compartidos para que el diseño sea uniforme. Incluye un desplegable con alternativa nativa si los scripts de Bootstrap originales no se ejecutan.
- Cada servicio tiene `index.html`, `css/estilo.css`, `js/consulta.js` y, cuando corresponde, una carpeta `data/`.
- El sonido del menú se reproduce con `click.mp3` original. Los enlaces están hechos para el sitio GitHub Pages dentro de `/dattashamir/`.

## Evolución a bases propias

GitHub Pages publica archivos estáticos: **no corre bases SQL, procesos automáticos ni APIs privadas**. Para trabajar con datos internos, habrá que añadir una API/backend separado (por ejemplo Cloudflare Workers o Supabase) y un proceso de actualización de datos autorizado. Para cotizaciones, la API externa actual es un adaptador temporal. Los prefijos pueden ampliarse usando los indicativos públicos del ENACOM con seguimiento de su fuente y fecha. No recolectar ni exponer datos personales sin la base legal correspondiente.

Fuentes de referencia:
- ENACOM prestadores: https://www.enacom.gob.ar/buscador-de-prestadores_p1510
- ENACOM indicativos: https://www.enacom.gob.ar/indicativos-interurbanos_p143
- ANSES CUIL: https://www.argentina.gob.ar/servicio/solicitar-constancia-de-cuil
- DNRPA radicación: https://www.argentina.gob.ar/propiedadautomotor/consultar-radicacion-vehiculo
- ENACOM IMEI: https://www.enacom.gob.ar/denuncia-al-910_p4034
- Cotizaciones / uso: https://dolarapi.com/docs/uso

**Nota de privacidad:** los formularios de prestadores, CUIL, radicación e IMEI no transmiten los datos ingresados. El de dólar sí solicita cotizaciones a un servicio externo sin pasar identificaciones del usuario.
