import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {img_300} from '../configs/configs';

export default function CarouselModal({productType, id}) {

    const handleDragStart = (e) => e.preventDefault();

const [actors, setActors] = useState(null);

const fetchActors = async () => {
    const result = await fetch(
        `https://api.themoviedb.org/3/${productType}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY_MOVIE}&language=en-US`
    );

    const resultJson = await result.json();
    setActors(resultJson.cast);
};

const items = actors?.map((e) => (
    <div style={{ width: '1em' }} className="carouselItem">
      <img style={{ width: '3em'}}
        src={e.profile_path ? `${img_300}/${e.profile_path}` : 'not available'}
        alt={e?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{e?.name}</b>
    </div>
  ));

useEffect(() => {
    fetchActors();
}, []);

const responsive = {
    0: {
        items: 1,
    },
    512: {
        items: 1,
    },
    1024: {
        items: 1,
    },
};

    return (
        <AliceCarousel mouseTracking items={items}
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
        />
    );
}