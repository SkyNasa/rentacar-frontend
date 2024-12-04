import { toAbsoluteUrl } from '@/utils';
import { useMap } from 'react-leaflet';

export const ZoomControl = () => {
  const map = useMap();

  return (
    <>
      <div
        className="bg-white rounded-lg size-[46px] flex justify-center items-center shadow-lg cursor-pointer"
        onClick={() => map.zoomIn()}
      >
        <img src={toAbsoluteUrl('/media/icons/plus.svg')} />
      </div>
      <div
        className="bg-white rounded-lg size-[46px] flex justify-center items-center shadow-lg cursor-pointer"
        onClick={() => map.zoomOut()}
      >
        <img src={toAbsoluteUrl('/media/icons/minus.svg')} />
      </div>
    </>
  );
};
