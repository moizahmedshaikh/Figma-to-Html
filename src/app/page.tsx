import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Recent from "./components/Recent";

export default function Home() {
  return (
    <div>
      <Hero />
      <Recent />
      <Featured />
    </div>
  );
}
