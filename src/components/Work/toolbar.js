import React, { useState, useEffect, useRef } from 'react';
import PageAppBar from './PageToolBar';

const DetailComponent = ({ name, updateAppBar }) => {
  const detailRef = useRef(null);

  const handleScroll = () => {
    const rect = detailRef.current.getBoundingClientRect();
    const isScrolledFully = rect.bottom <= window.innerHeight;

    if (isScrolledFully) {
      updateAppBar(name);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={detailRef} style={{ height: '100vh' }}>
      <h2>{name}</h2>
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  const updateAppBar = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div>
      <DetailComponent name="item" updateAppBar={updateAppBar} />
      <DetailComponent name="job" updateAppBar={updateAppBar} />
      <DetailComponent name="seller" updateAppBar={updateAppBar} />
      <DetailComponent name="buyer" updateAppBar={updateAppBar} />

      <PageAppBar activeSection={activeSection} />
    </div>
  );
};

export default App;

