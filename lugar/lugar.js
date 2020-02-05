const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodedURL = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '121307f525mshb4d0a32b66c4351p1b52f1jsndd09aba78afe' }
    });

    // instance.get()
    //     .then(resp => {
    //         let salida = resp.data.Results[0]
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log("Error ", err)
    //     })

    const resp = await instance.get()
    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lon = data.lon

    if (data.length === 0) {
        throw new Error(`No existen resultados para ${dir}`)
    }
    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}