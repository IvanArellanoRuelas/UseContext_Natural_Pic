/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const FotosContext = createContext();

const FotoProvider = ({ children }) => {
  const [fotos, setFotos] = useState([]);
  async function Recolectar() {
    const url = '/photos.json';
    const response = await fetch(url);
    const data = await response.json();
    await setFotos(data.photos);
  }
  useEffect(() => {
    Recolectar();
  }, []);

  return (
    <FotosContext.Provider value={{ fotos, setFotos }}>
      {children}
    </FotosContext.Provider>
  );
};

export default FotoProvider;
