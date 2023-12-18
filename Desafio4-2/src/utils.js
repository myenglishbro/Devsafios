import {dirname} from "path"
import { fileURLToPath } from "url"

export  const __dirname=dirname(fileURLToPath(import.meta.url))

// import.meta.url: Devuelve un objeto que contiene información sobre el módulo actual. 
//import.meta.url proporciona la URL del script actual.

// fileURLToPath(): Es una función que convierte una URL de archivo en una cadena de ruta de sistema de archivos.
// Esto es útil porque las URL de archivo pueden tener un formato especial, y a veces es necesario convertirlas a una cadena de ruta de archivo 
//que sea compatible con el sistema de archivos local.
// dirname(): Es una función que toma una ruta de archivo y devuelve el directorio padre de esa ruta.
// En resumen, la expresión completa dirname(fileURLToPath(import.meta.url)) está obteniendo el directorio padre del archivo actual 
//en el que se está ejecutando el código JavaScript. 
//Este patrón es comúnmente utilizado para obtener el directorio de trabajo del script actual