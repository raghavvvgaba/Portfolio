import { Navbar } from "./components/Navbar";
import { ProfileCard } from "./components/ProfileCard";
import { MainContent } from "./components/MainContent";

export default function App() {
  return (
    <div className="h-full bg-background">

      <div className="bg-background z-20 fixed p-2 h-20 w-screen flex justify-center">
        <Navbar />
      </div>

      <div className="border-1 h-screen flex">

        <div className=" h-screen w-2/5 flex justify-center items-center">
          <div className="-translate-y-16">
            <ProfileCard />
          </div>
        </div>

        <MainContent />

      </div>

    </div>

  );
}