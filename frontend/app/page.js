import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <div className="flex gap-4 p-4 flex-wrap absolute left-64 top-20">
        <Card />
        <Card />
      </div>
    </div>
  );
}
