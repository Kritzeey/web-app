import Card from "./components/Card";

export default function Home() {
  return (
    <div className="overflow-scroll h-screen">
      <div className="flex gap-4 flex-wrap pl-68 pt-24 pr-4 pb-4">
        <Card task="Test" />
      </div>
    </div>
  );
}
