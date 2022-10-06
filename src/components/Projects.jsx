import { useState } from "react"

export const Projects = () => {
    const [pernProject, setPernProject] = useState()

    return (
        <section className="w-full flex flex-col justify-between items-center bg-blue-600 text-white py-4">

            <h2 className="text-2xl text-center">Projects</h2>
            <p>The projects are interactive, try them!</p>

            {/* javascript games */}
            <div className=" w-full sm:w-3/4 max-w-[30rem] flex flex-col justify-center items-center px-2">
                <h2 className="text-center mt-5">Javascript Games</h2>

                <select
                    className="w-full border border-gray-300 text-black rounded-lg p-1 my-2"
                    onChange={event => setPernProject(event.target.value)}
                >
                    <option value="https://joaopedro-javascript-space-invaders.netlify.app/">Space Invaders</option>
                    <option value="https://joaopedro-javascript-whack-a-mole.netlify.app/">Whack a Mole</option>
                    <option value="https://joaopedro-javascript-breakout.netlify.app/">Breakout</option>
                </select>

                <a className="text-sm mb-1" href="https://github.com/JoaoPedrodaSilva/" target="_blank" rel="noreferrer">Click here to check the code</a>
                <iframe title="javascript-games-iframe" className="w-full bg-white aspect-square rounded-lg" scrolling="no" src={pernProject} />

            </div>

        </section>
    )
}
