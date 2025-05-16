import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    const apiKey = 'c80ffc9307b9c048229378c7eb703f33';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;

    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData({
          temp: data.main.temp,
          city: data.name,
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          description: data.weather[0].description,
        });
        setError('');
      } else {
        setError('City not found.');
        setWeatherData(null);
      }
    } catch (err) {
      setError('Failed to fetch weather data.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 px-4 py-6">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6 text-center">
        <h1 className="text-2xl font-bold mb-6 text-blue-800">🌦️ Weather App</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') fetchWeather();
            }}
            placeholder="Enter city"
            className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {weatherData && (
          <div className="mt-4">
            <img src={weatherData.icon} alt="Weather icon" className="mx-auto" />
            <h2 className="text-xl font-semibold">{weatherData.city}</h2>
            <p className="text-3xl font-bold text-blue-700">{weatherData.temp}°C</p>
            <p className="capitalize text-gray-700">{weatherData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
