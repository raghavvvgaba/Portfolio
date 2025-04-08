import { TechStackBox } from "./TechStackBox";

export function MainContent() {
    return <div className="bg-background h-screen w-3/5 overflow-y-scroll snap-y">
        {/*Introduction div */}
        <div className=" border-black h-[950px] snap-start flex items-center pl-8 pr-8">


            <div className="border-2 border-accent  bg-secondary opacity-65 h-[450px] w-full rounded-2xl">

            </div>


        </div>
        {/*Tech Stack div */}
        <div className=" border-black h-[950px] snap-start flex items-center pl-8 pr-8">


            <div className="border-2 border-accent bg-black h-[450px] w-full rounded-2xl">

                <div className="border border-accent font-semibold flex justify-center text-text text-5xl ">
                <h1>Tech Stack</h1>
                </div>

                <div className="border h-96 bg-black opacity-65 ">
                    <TechStackBox/>
                </div>
            </div>


        </div>

    </div>
}