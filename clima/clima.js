const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9230922dbbcb1bcf0b33dbb45c7ebed8&units=metric`);
    // console.log(resp);
    return resp.data.main.temp
}

module.exports = {
    getClima
}