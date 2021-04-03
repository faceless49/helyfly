import { YMaps, Map, Placemark } from "react-yandex-maps";
import s from "./MapBlock.module.scss";
export const MapBlock = (props) => {
  return (
    <section className={s.map}>
      <YMaps>
        <Map
          className={s.mapBlock}
          defaultState={{ center: [55.754766, 37.611565], zoom: 16 }}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[55.754766, 37.611565]}
            properties={{
              balloonContent: "Встречаемся тут!",
            }}
            iconOffset={{
              left: "25",
              top: "50",
            }}
          />
        </Map>
      </YMaps>
    </section>
  );
};
