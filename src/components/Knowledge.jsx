export const Knowledge = () => (
    <section className="w-full flex flex-col justify-between items-center bg-blue-300 text-black py-6">
        {/* <h2 className="text-2xl text-center pb-5">Skills</h2> */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 justify-center items-center gap-10 px-2 lg:px-5">

            <div className="flex flex-col justify-center items-center gap-1 gap-1">
                <img className="rounded-full w-3/5" src="https://joaopedro-portfolio-website.s3.sa-east-1.amazonaws.com/knowledge-react.PNG" alt="React logo" />
                <p>React</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
                <img className="rounded-full w-3/5" src="https://joaopedro-portfolio-website.s3.sa-east-1.amazonaws.com/knowledge-node.PNG" alt="Node logo" />
                <p>Node</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
                <img className="rounded-full w-3/5" src="https://joaopedro-portfolio-website.s3.sa-east-1.amazonaws.com/knowledge-tailwind.PNG" alt="TailwindCss logo" />
                <p>TailwindCss</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
                <img className="rounded-full w-3/5" src="https://joaopedro-portfolio-website.s3.sa-east-1.amazonaws.com/knowledge-d3.PNG" alt="D3 logo" />
                <p>D3</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
                <img className="rounded-full w-3/5" src="https://joaopedro-portfolio-website.s3.sa-east-1.amazonaws.com/knowledge-postgresql.PNG" alt="PostgreSQL logo" />
                <p>PostgreSQL</p>
            </div>            

            <div className="flex flex-col justify-center items-center gap-1">
                <img className="rounded-full w-3/5" src="https://joaopedro-portfolio-website.s3.sa-east-1.amazonaws.com/knowledge-usa-flag.PNG" alt="american flag" />
                <p>English</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
                <img className="rounded-full w-3/5" src="https://joaopedro-portfolio-website.s3.sa-east-1.amazonaws.com/knowledge-spain-flag.PNG" alt="spanish flag" />
                <p>Spanish</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
                <img className="rounded-full w-3/5" src="https://joaopedro-portfolio-website.s3.sa-east-1.amazonaws.com/knowledge-brazil-flag.PNG" alt="brazilian flag" />
                <p>Portuguese</p>
            </div>
            
        </div>
    </section>
)
