import { ReactElement } from 'react';
import { useMap } from 'react-leaflet';

export const SubControl = ({ children }: { children: ReactElement[] | ReactElement }) => {
  const map = useMap();

  return (
    <div
      className="leaflet-bottom leaflet-left flex items-stretch"
      onMouseOver={() => {
        map.doubleClickZoom.disable();
        map.dragging.disable();
        map.scrollWheelZoom.disable();
      }}
      onMouseOut={() => {
        map.doubleClickZoom.enable();
        map.dragging.enable();
        map.scrollWheelZoom.enable();
      }}
    >
      <div className="leaflet-control flex flex-col gap-[10px] !ml-[512px] !mb-6 font-sans">
        {children}
      </div>
    </div>
  );
};
