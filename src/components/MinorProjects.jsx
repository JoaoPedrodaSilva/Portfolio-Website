import { useState } from "react"

export const MinorProjects = () => {
    const [pernProject, setPernProject] = useState("https://joaopedro-pern-milkshakes.netlify.app/")
    const [d3Project, setD3Project] = useState("https://joaopedro-d3-bar-chart.netlify.app/")
    const [jsProject, setJsProject] = useState("https://joaopedro-javascript-space-invaders.netlify.app/")


    return (
        <section className="w-full flex flex-col justify-center items-center bg-blue-300 text-black py-6">

            <h2 className="text-2xl text-center">Minor Projects</h2>
            <p>The projects are interactive, try them!</p>
            <a href="https://github.com/JoaoPedrodaSilva/" target="_blank" rel="noreferrer">Click here to check the codes</a>


            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center lg:px-28 xl:px-72">

                {/* pern stack + tailwind */}
                <article className="w-full max-w-[500px] mx-auto flex flex-col justify-center items-center p-2">
                    <h2 className="text-center mt-5">PERN Stack + TailwindCss</h2>

                    <select
                        className="w-full border border-gray-300 text-black rounded-lg p-1 my-2"
                        onChange={event => setPernProject(event.target.value)}
                    >
                        <option value="https://joaopedro-pern-milkshakes.netlify.app/">Milkshakes</option>
                        <option value="https://joaopedro-pern-income-line-chart.netlify.app/">Income Line Chart</option>                        
                        <option value="https://joaopedro-pern-grocery-list.netlify.app/">Grocery List</option>
                    </select>

                    <iframe title="pern-iframe" className="w-full bg-white aspect-[4/5] rounded-lg" scrolling="no" src={pernProject} />
                </article>


                {/* d3 data visualization */}
                <article className="w-full max-w-[500px] mx-auto flex flex-col justify-center items-center p-2">
                    <h2 className="text-center mt-5">D3 - Data Visualization</h2>

                    <select
                        className="w-full border border-gray-300 text-black rounded-lg p-1 my-2"
                        onChange={event => setD3Project(event.target.value)}
                    >
                        <option value="https://joaopedro-d3-bar-chart.netlify.app/">Bar Chart</option>
                        <option value="https://joaopedro-d3-scatterplot-graph.netlify.app/">ScatterPlot Graph</option>
                        <option value="https://joaopedro-d3-line-chart.netlify.app/">Line Chart</option>
                    </select>

                    <iframe title="d3-iframe" className="w-full bg-white aspect-[4/5] rounded-lg" scrolling="no" src={d3Project} />
                </article>


                {/* javascript games */}
                <article className=" w-full max-w-[500px] mx-auto flex flex-col justify-center items-center p-2">
                    <h2 className="text-center mt-5">Javascript Games</h2>

                    <select
                        className="w-full border border-gray-300 text-black rounded-lg p-1 my-2"
                        onChange={event => setJsProject(event.target.value)}
                    >
                        <option value="https://joaopedro-javascript-space-invaders.netlify.app/">Space Invaders</option>
                        <option value="https://joaopedro-javascript-whack-a-mole.netlify.app/">Whack a Mole</option>
                        <option value="https://joaopedro-javascript-memory-game.netlify.app/">Memory Game</option>
                    </select>

                    <iframe title="javascript-games-iframe" className="w-full bg-white aspect-[4/5] rounded-lg" scrolling="no" src={jsProject} />
                </article>

            </div>
        </section>
    )
}
