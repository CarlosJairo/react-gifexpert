import { GifItem } from "./index";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
  const { images, isLoading } = useFetchGifs(category) 

  return ( 
    <>
      {isLoading && <p>Cargando</p>}
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((gif) => (
          <GifItem key={gif.id} {...gif}/>
        ))}
      </div>
    </>
   );
}
