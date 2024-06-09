import { FotosContext } from '../Context/ContextFotos';
import { useContext } from 'react';
const Gallery = () => {
  const { fotos } = useContext(FotosContext);
  return (
    <div className="gallery grid-columns-5 p-3">
      {fotos.map((pic) => (
        <div key={pic.id}>
          <img src={pic.src.tiny}></img>
          <h2>{pic.alt}</h2>
          <button>&#10084;</button>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
