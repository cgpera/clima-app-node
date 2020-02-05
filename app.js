const lugar = require('./lugar/lugar')

const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClima('40.419998', '-3.700000')
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(dir) => {

    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lon)
        return `El clima de la ciudad ${coords.direccion} es de ${temp}`
    } catch (e) {
        return `El clima de la ciudad ${dir} no se pudo obtener`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)