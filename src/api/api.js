import axios from 'axios';

/**
 * esta function usa el metodo .create de axios
 * para crear un endpoint (baseURL).
 * Para correr el servidor en el puerto 5000 uso 
 * una dependencia llamada json-server que simula un 
 * backend con un archivo json haciendo las veces de una
 * base de datos.
 */
export const api = axios.create({
    baseURL: "http://localhost:5000"
});

/**
 * Esta funcion hace una peticion GET al endpoint especificado
 * y setea los datos obtenidos en el estado 'data'.
 * @param {string} url - URL del endpoint. Para el caso especifico
 * de esta aplicacion puede ser categorias o posts que son los nombres
 * de los arrays de objetos en el archivo db.json
 * @param {function} setData - Funcion para establecer los datos.
 */
export const getData = async(url, setData) => {
    const response = await api.get(url);
    setData(response.data);
};
