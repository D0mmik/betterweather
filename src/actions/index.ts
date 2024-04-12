import axios, {AxiosResponse} from 'axios';

const API_KEY = '79e9110f4e47d681b1dedd4758c448f4';
export async function getWeatherData(city: string): Promise<WeatherResponse> {

  const currentUrl : string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  try {
    const currentResponse : AxiosResponse = await axios.get(currentUrl);
    const coordinates : Coords = currentResponse.data.coord;

    const forecastUrl: string = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude={current, minutely, alerts}&appid=${API_KEY}&units=metric&lang=cz`

    const forecastResponse : AxiosResponse = await axios.get(forecastUrl);

    return {
      current: currentResponse.data.main,
      hourly: forecastResponse.data.hourly,
      daily: forecastResponse.data.daily
    }

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
