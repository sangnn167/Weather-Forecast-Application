export const GetCurrentWeather = async ({ city, apiKey, temperatureUnit }) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${temperatureUnit}`
  )
    .then(async (response) => {
      if (!response.ok) {
        alert("Thành phố không tồn tại.");
        throw new Error(response.statusText);
      } else {
        const data = await response.json();
        return data;
      }
    })
    .catch((error) => {
      console.error("Error fetching current weather:", error);
    });
};


export const GetFiveDayForecast = async ({ city, apiKey, temperatureUnit }) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${temperatureUnit}`
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        const data = await response.json();
        return data;
      }
    })
    .catch((error) => {
      console.error("Error fetching 5-day forecast:", error);
    });
};