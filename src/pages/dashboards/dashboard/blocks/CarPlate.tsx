export interface CarPlateProps {
  plate: string;
}

export const CarPlate = ({ plate }: CarPlateProps) => {
  return (
    <div className="flex font-medium">
      <div className="rounded-s-lg py-2 px-2 bg-[#5271FF] text-white">TR</div>
      <div className="rounded-e-lg py-2 px-6 text-gray-700 font-semibold border-e border-t border-b border-[#F1F1F4] bg-white">
        {plate}
      </div>
    </div>
  );
};
