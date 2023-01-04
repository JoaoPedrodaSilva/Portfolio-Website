import { FaGithub, FaLinkedin, FaWhatsapp, FaMailBulk } from "react-icons/fa"

export const Contact = () => (
    <section className="w-full flex flex-col justify-between items-center gap-4 bg-blue-600 text-white pt-6">
        <h2 className="text-2xl text-center">Contact</h2>

        <div className="flex justify-center items-center gap-8 text-2xl">
            <a href="https://github.com/JoaoPedrodaSilva" target='_blank' rel="noreferrer">
                <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/joão-pedro-da-silva-7247291b0" target='_blank' rel="noreferrer">
                <FaLinkedin />
            </a>

            <a href="https://wa.me/5513997250599" target='_blank' rel="noreferrer">
                <FaWhatsapp />
            </a>

            <a href="mailto:joao.pedro.da.silva@hotmail.com" target='_blank' rel="noreferrer">
                <FaMailBulk />
            </a>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
            <a href="mailto:joao.pedro.da.silva@hotmail.com" target='_blank' rel="noreferrer">joao.pedro.da.silva@hotmail.com</a>
            <a href="https://wa.me/5513997250599" target='_blank' rel="noreferrer">+55 (13) 997250599</a>
        </div>

        <footer className="w-full flex flex-col justify-between items-center py-1">
            <p>&copy;Copyright. João Pedro da Silva - {new Date().getFullYear()}</p>
        </footer>
    </section>
)
