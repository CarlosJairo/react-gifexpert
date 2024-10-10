import { useEffect, useState } from "react";
import { getGifs } from "../helpers/useGetGifs";

const useFetchGifs = ({category}) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect (() => {
    const getData = async () => {
      const response = await getGifs(category);
      setImages(response);
      setisLoading(false);
    }

    getData();
  }, []);
  
  return {images, isLoading};
}
 
export default useFetchGifs;