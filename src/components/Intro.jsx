import img from "../images/intro-img-sm.png"

export const Intro = () => (
    <section className="w-full flex flex-col sm:flex-row justify-between items-center bg-blue-700 text-white">
        <div className="w-full flex flex-col gap-2 sm:gap-5 pt-2 pb-4">
            <h1 className="text-4xl lg:text-6xl text-center">João Pedro</h1>
            <h2 className="text-2xl lg:text-4xl text-center">Software Developer Student</h2>
        </div>
        <img className="w-full sm:w-1/2" src={img} alt="Joao Pedro smiling in a window" />
    </section>
)
