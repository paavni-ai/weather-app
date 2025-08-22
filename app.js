var App = (() => {
  // app.jsx
  var { useState, useEffect } = React;
  var { Cloud, Sun, CloudRain, Wind, Droplets, Eye, Thermometer, MapPin, Heart, MessageCircle, Camera, Shirt, Users, Trophy, Settings, Home, Map, Calendar, Share, Star, Zap, Leaf, Shield, Smile, Frown, Meh, ThermometerSun, Umbrella, Navigation, TrendingUp } = lucide;
  var mockWeatherData = {
    current: { temperature: 24, feelsLike: 27, condition: "Partly Cloudy", humidity: 65, windSpeed: 15, windDirection: "NW", visibility: 10, uvIndex: 6, airQuality: 85, pressure: 1013, sunrise: "6:32 AM", sunset: "7:45 PM" },
    hourly: [
      { time: "2PM", temp: 24, condition: "sunny", icon: Sun },
      { time: "3PM", temp: 26, condition: "sunny", icon: Sun },
      { time: "4PM", temp: 25, condition: "cloudy", icon: Cloud },
      { time: "5PM", temp: 23, condition: "rainy", icon: CloudRain },
      { time: "6PM", temp: 21, condition: "rainy", icon: CloudRain },
      { time: "7PM", temp: 20, condition: "cloudy", icon: Cloud }
    ],
    weekly: [
      { day: "Today", high: 24, low: 18, condition: "Partly Cloudy", icon: Cloud, rain: 30 },
      { day: "Fri", high: 26, low: 20, condition: "Sunny", icon: Sun, rain: 10 },
      { day: "Sat", high: 23, low: 17, condition: "Cloudy", icon: Cloud, rain: 60 },
      { day: "Sun", high: 21, low: 15, condition: "Rainy", icon: CloudRain, rain: 80 },
      { day: "Mon", high: 19, low: 13, condition: "Rainy", icon: CloudRain, rain: 90 },
      { day: "Tue", high: 22, low: 16, condition: "Cloudy", icon: Cloud, rain: 40 },
      { day: "Wed", high: 25, low: 19, condition: "Sunny", icon: Sun, rain: 20 }
    ]
  };
  var aiInsights = [
    "Perfect picnic weather today! UV is moderate, don't forget sunscreen \u{1F31E}",
    "Rain expected at 6PM - great time to water your plants naturally \u{1F331}",
    "Breezy conditions perfect for air-drying clothes and saving energy \u26A1",
    "Cool evening ahead - perfect for a sunset walk \u{1F305}",
    "High humidity today - stay hydrated and wear breathable fabrics \u{1F4A7}"
  ];
  var WeatherApp = () => {
    const [currentView, setCurrentView] = useState("home");
    const [userPoints, setUserPoints] = useState(1250);
    const [currentInsight, setCurrentInsight] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentInsight((prev) => (prev + 1) % aiInsights.length);
      }, 8e3);
      return () => clearInterval(interval);
    }, []);
    return /* @__PURE__ */ React.createElement("div", { className: "max-w-md mx-auto min-h-screen bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "px-4 py-3 border-b border-gray-200 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(MapPin, { size: 18, className: "text-blue-600" }), /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-gray-800" }, "Adelaide, SA")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(Trophy, { size: 16, className: "text-yellow-500" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, userPoints, " pts"))), /* @__PURE__ */ React.createElement("div", { className: "p-4 space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white" }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement(Cloud, { size: 56, className: "mx-auto mb-3 opacity-90" }), /* @__PURE__ */ React.createElement("div", { className: "text-3xl font-light mb-1" }, mockWeatherData.current.temperature, "\xB0C"), /* @__PURE__ */ React.createElement("div", { className: "text-base opacity-90 mb-1" }, mockWeatherData.current.condition), /* @__PURE__ */ React.createElement("div", { className: "text-xs opacity-75" }, "Feels like ", mockWeatherData.current.feelsLike, "\xB0C"))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-xl p-4 border border-gray-100" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement(Wind, { className: "text-blue-600", size: 18 }), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-500" }, "Wind"), /* @__PURE__ */ React.createElement("div", { className: "font-semibold text-gray-800" }, mockWeatherData.current.windSpeed, " km/h ", mockWeatherData.current.windDirection)))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-xl p-4 border border-gray-100" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-800 mb-3" }, "Today's Hourly"), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4 overflow-x-auto" }, mockWeatherData.hourly.map(({ time, temp, icon: Icon }, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex-shrink-0 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs text-gray-500 mb-2" }, time), /* @__PURE__ */ React.createElement(Icon, { className: "text-blue-600 mx-auto mb-2", size: 22 }), /* @__PURE__ */ React.createElement("div", { className: "text-sm font-medium" }, temp, "\xB0")))))), /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-around" }, [
      { id: "home", icon: Home, label: "Home" },
      { id: "forecast", icon: Calendar, label: "Forecast" },
      { id: "maps", icon: Map, label: "Maps" },
      { id: "wardrobe", icon: Shirt, label: "Wardrobe" },
      { id: "community", icon: Users, label: "Community" }
    ].map(({ id, icon: Icon, label }) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: id,
        onClick: () => setCurrentView(id),
        className: `flex flex-col items-center p-2 rounded-lg transition-colors ${currentView === id ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600"}`
      },
      /* @__PURE__ */ React.createElement(Icon, { size: 18 }),
      /* @__PURE__ */ React.createElement("span", { className: "text-xs mt-1" }, label)
    )))));
  };
  var rootElement = document.getElementById("root");
  var root = ReactDOM.createRoot(rootElement);
  root.render(/* @__PURE__ */ React.createElement(WeatherApp, null));
})();
