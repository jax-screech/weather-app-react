import React from 'react';
import photo from '../assets/search.jpeg';
import weather from '../assets/sun.jpeg';

const Weather = () => {
  return (
    <div
      className="weather"
      style={{fontFamily: 'Arial, sans-serif', padding: '20px', background: 'skyblue', margin: '50px auto', borderRadius: '10px',maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center',
      }}
    >
      <div
        className="searchbar"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
        }}
      >
        <input
          type="text"
          placeholder="Search for a city"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            flex: '1',
          }}
        />
        <img
          src={photo}
          alt="Search"
          style={{
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        />
      </div>
      <div
        className="weather-info"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <img src={weather} alt="Weather icon" style={{ width: '60px' }} />
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }} className='temprature'>16°C</p>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }} className='location'>London</p>
      </div>
    </div>
  );
};

export default Weather;

