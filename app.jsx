import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const mockWeatherData = {
  current: { temperature: 24, feelsLike: 27, condition: 'Partly Cloudy', humidity: 65, windSpeed: 15, windDirection: 'NW', visibility: 10, uvIndex: 6, airQuality: 85, pressure: 1013, sunrise: '6:32 AM', sunset: '7:45 PM' },
  hourly: [
    { time: '2PM', temp: 24, icon: '☀️' },
    { time: '3PM', temp: 26, icon: '☀️' },
    { time: '4PM', temp: 25, icon: '☁️' },
    { time: '5PM', temp: 23, icon: '🌧️' },
    { time: '6PM', temp: 21, icon: '🌧️' },
    { time: '7PM', temp: 20, icon: '☁️' }
  ],
  weekly: [
    { day: 'Today', high: 24, low: 18, condition: 'Partly Cloudy', icon: '⛅', rain: 30 },
    { day: 'Fri', high: 26, low: 20, condition: 'Sunny', icon: '☀️', rain: 10 },
    { day: 'Sat', high: 23, low: 17, condition: 'Cloudy', icon: '☁️', rain: 60 },
    { day: 'Sun', high: 21, low: 15, condition: 'Rainy', icon: '🌧️', rain: 80 },
    { day: 'Mon', high: 19, low: 13, condition: 'Rainy', icon: '🌧️', rain: 90 },
    { day: 'Tue', high: 22, low: 16, condition: 'Cloudy', icon: '☁️', rain: 40 },
    { day: 'Wed', high: 25, low: 19, condition: 'Sunny', icon: '☀️', rain: 20 }
  ]
};

const aiInsights = [
  "Perfect picnic weather today! UV is moderate, don't forget sunscreen 🌞",
  "Rain expected at 6PM - great time to water your plants naturally 🌱",
  "Breezy conditions perfect for air-drying clothes and saving energy ⚡",
  "Cool evening ahead - perfect for a sunset walk 🌅",
  "High humidity today - stay hydrated and wear breathable fabrics 💧"
];

const NavIcon = ({ label, emoji }) => (
  <div className="flex flex-col items-center p-2">
    <span className="text-lg" aria-hidden>{emoji}</span>
    <span className="text-xs mt-1">{label}</span>
  </div>
);

const WeatherApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [userPoints, setUserPoints] = useState(1250);
  const [currentInsight, setCurrentInsight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight(prev => (prev + 1) % aiInsights.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-blue-600">📍</span>
          <span className="font-semibold text-gray-800">Adelaide, SA</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">🏆</span>
          <span className="text-sm font-medium text-gray-700">{userPoints} pts</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white">
          <div className="text-center">
            <div className="text-4xl mb-2">⛅</div>
            <div className="text-3xl font-light mb-1">{mockWeatherData.current.temperature}°C</div>
            <div className="text-base opacity-90 mb-1">{mockWeatherData.current.condition}</div>
            <div className="text-xs opacity-75">Feels like {mockWeatherData.current.feelsLike}°C</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-blue-600">💨</div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Wind</div>
              <div className="font-semibold text-gray-800">{mockWeatherData.current.windSpeed} km/h {mockWeatherData.current.windDirection}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">Today's Hourly</h3>
          <div className="flex space-x-4 overflow-x-auto">
            {mockWeatherData.hourly.map(({ time, temp, icon }, i) => (
              <div key={i} className="flex-shrink-0 text-center">
                <div className="text-xs text-gray-500 mb-2">{time}</div>
                <div className="text-xl mb-2">{icon}</div>
                <div className="text-sm font-medium">{temp}°</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <div className="text-purple-500 mt-1">⚡</div>
            <div>
              <h3 className="font-medium text-purple-800 mb-2">AI Weather Insight</h3>
              <p className="text-purple-700 text-sm leading-relaxed">{aiInsights[currentInsight]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {[
            { id: 'home', emoji: '🏠', label: 'Home' },
            { id: 'forecast', emoji: '📅', label: 'Forecast' },
            { id: 'maps', emoji: '🗺️', label: 'Maps' },
            { id: 'wardrobe', emoji: '👕', label: 'Wardrobe' },
            { id: 'community', emoji: '👥', label: 'Community' }
          ].map(({ id, emoji, label }) => (
            <button
              key={id}
              onClick={() => setCurrentView(id)}
              className={`rounded-lg transition-colors ${
                currentView === id ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <NavIcon label={label} emoji={emoji} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<WeatherApp />);