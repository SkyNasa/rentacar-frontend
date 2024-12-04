import { toAbsoluteUrl } from '@/utils';
import { useMap } from 'react-leaflet';

export const OtherControls = () => {
  const map = useMap();

  return (
    <div className="bg-white rounded-lg shadow-lg cursor-pointer">
      <div className="size-[46px] flex justify-center items-center" onClick={() => map.zoomIn()}>
        <img src={toAbsoluteUrl('/media/icons/marker-on-map.svg')} />
      </div>
      <div className="size-[46px] flex justify-center items-center" onClick={() => map.zoomIn()}>
        <img src={toAbsoluteUrl('/media/icons/satellite.svg')} />
      </div>
      <div className="size-[46px] flex justify-center items-center" onClick={() => map.zoomOut()}>
        <img src={toAbsoluteUrl('/media/icons/marker-pulse.svg')} />
      </div>
    </div>
  );
};
