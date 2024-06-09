import { FotosContext } from '../Context/ContextFotos';
import { useContext } from 'react';
const Favorites = () => {
  const { fotos } = useContext(FotosContext);
  const newFotos = fotos.filter((fav) => {
    return fav.liked != 'False';
  });
  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-5 p-3"></div>
      {newFotos.map((pic) => (
        <div key={pic.id}>
          <img src={pic.src.tiny}></img>
          <h2>{pic.alt}</h2>
        </div>
      ))}
    </div>
  );
};
export default Favorites;
