import { useEffect, useState } from "react";
import ImageWrapper from "../../components/imageWrapper";
import { fetchData } from "../../utilities";

export default function Page() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = "src/assets/image.json";
        const data = await fetchData(url);
        setImages(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="section gallery">
      <div className="con">
        <div className="text-center">
          <h1 className="font-agbalumo text-primary mt-20 mb-24">Gallery</h1>
          <div className="grid grid-cols-3 auto-rows-[300px] gap-7">
            {images.map((image, index) => (
              <ImageWrapper key={index}>
                <img src={image.url} alt={`Image ${index + 1}`} />
              </ImageWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}