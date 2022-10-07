import html from "../images/knowledge-html.PNG"
import css from "../images/knowledge-css.PNG"
import javascript from "../images/knowledge-javascript.PNG"
import portuguese from "../images/knowledge-brazil-flag.PNG"
import d3 from "../images/knowledge-d3.PNG"
import postgresql from "../images/knowledge-postgresql.PNG"
import react from "../images/knowledge-react.PNG"
import spanish from "../images/knowledge-spain-flag.PNG"
import tailwind from "../images/knowledge-tailwind.PNG"
import english from "../images/knowledge-usa-flag.PNG"

export const Knowledge = () => (
    <section className="w-full flex flex-col justify-between items-center bg-blue-300 py-4">
        <h2 className="text-2xl text-center pb-5">What do <span className="text-sm">(I think)</span> I know</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 justify-center items-center gap-10 px-2 lg:px-5">
            {/* <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={html} alt="HTML logo" />
                <p>HTML</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={css} alt="CSS logo" />
                <p>CSS</p>
            </div> */}

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={javascript} alt="Javascript logo" />
                <p>Javascript</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={react} alt="React logo" />
                <p>React.js</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={tailwind} alt="Tailwind logo" />
                <p>TailwindCss</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={d3} alt="D3 logo" />
                <p>D3.js</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={postgresql} alt="PostgreSQL logo" />
                <p>PostgreSQL</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={portuguese} alt="brazilian flag" />
                <p>Portuguese</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={english} alt="american flag" />
                <p>English</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-3/5" src={spanish} alt="spanish flag" />
                <p>Spanish</p>
            </div>
        </div>
    </section>
)
