import BottonSection from "./components/BottonSection";
import TopSection from "./components/TopSection";
import { getNotes } from "./services/note.service";

function App() {
  /* getNotes().then(data => console.log(data)) */

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="h-[45%] w-full flex flex-col items-center 
        justify-center sticky top-0 left-0 border-b border-green-800 bg-black">
        <TopSection />
      </div>
      <div className="h-[55%] w-full  flex 
        flex-col items-center justify-center text-white">
        <BottonSection />
      </div>
    </main>
  );
}

export default App;
