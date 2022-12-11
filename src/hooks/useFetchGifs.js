import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setisLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
