import React from 'react'

export const LargeScaleProjects = () => (
    <section className="flex justify-center items-center bg-blue-600 text-white py-6">

        <div className='h-full flex justify-center gap-10'>
            <iframe
                title="financas-e-fundamentos-iframe"
                className="hidden lg:flex w-full max-w-[610px] aspect-[4/5] rounded-lg"
                src="https://financasefundamentos.com.br/"
            />

            <div className="w-full lg:w-1/4 h-full flex flex-col justify-between gap-6 text-justify px-8 lg:px-0">
                <div className='flex flex-col justify-center items-center lg:mb-10'>
                    <h2 className="text-2xl text-center">Large Scale Project</h2>
                    <a href="https://github.com/JoaoPedrodaSilva/" target="_blank" rel="noreferrer">Click here to check the code</a>
                    <p className='block lg:hidden text-xs text-center pt-2 pb-6 text-yellow-400'>Please, note the iframe displaying this project will only appear at desktops. If you are using small screen devices, click the link below and visit the webpage itself.</p>
                </div>
                <p><a
                        href="https://financasefundamentos.com.br/"
                        target="_blank" rel="noreferrer"
                        className='underline cursor-pointer'
                    >Finanças e Fundamentos website
                    </a> is my largest project.</p>
                <p>It's about financial education, the brazilian stocks market and some of the most important brazilian macroeconomics metrics.</p>
                <p>I've built it using the PERN stack - Node.js and Express.js as backend, PostgreSQL as database, and React.js as frontend - I also used TailwindCss for styling and D3.js for data visualization. </p>
                <p>The plan for the future is to implement a user authentication method, maybe using passport.js. Hopefully, I will implement some quality assurance too, with automated tests and Typescript, for example.</p>
            </div>
        </div>
    </section>
)
