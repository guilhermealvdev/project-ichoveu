// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const resultado = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  console.log(resultado);
  const data = await resultado.json();

  if (data.length === 0) {
    console.log('Nenhuma cidade encontrada');
    window.alert('Nenhuma cidade encontrada');
  }
  console.log(data);
  // console.log(data[0].url);
  // const resultadoTempo = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${data[0].url}`);
  // const dataTempo = await resultadoTempo.json();
  // console.log(dataTempo);
  // console.log(`temp: ${dataTempo.current.temp_c}`);
  // return {
  //   "temp": dataTempo.current.temp_c,
  //   "condition": dataTempo.current.condition,
  //   "icon": dataTempo.current.condition.icon,
  //   "country": dataTempo.location.country,
  //   "name": dataTempo.location.name,
  //   "url": cityURL
  // }

  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const resultadoTempo = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const dataTempo = await resultadoTempo.json();
  console.log(dataTempo);
  return {
    name: dataTempo.location.name,
    country: dataTempo.location.country,
    temp: dataTempo.current.temp_c,
    condition: dataTempo.current.condition.text,
    icon: dataTempo.current.condition.icon,
    url: cityURL,
  };
};
