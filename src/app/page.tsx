import ChoroplethMap from "./components/ChoroplethMap";

const sampleData = {
  USA: 75,
  RUS: 50,
  DEU: 25,
  BRA: 10,
};

export default function Home() {
  return (
    <div className="w-full h-screen">
      <ChoroplethMap data={sampleData} minValue={0} maxValue={100} />
    </div>
  );
}
