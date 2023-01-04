import { Intro } from "./components/Intro"
import { Knowledge } from "./components/Knowledge"
import { MinorProjects } from "./components/MinorProjects"
import { Contact } from "./components/Contact"
import { LargeScaleProjects } from "./components/LargeScaleProjects"

export const App = () => (
    <>
        <Intro />
        <Knowledge />
        <LargeScaleProjects />
        <MinorProjects />
        <Contact />
    </>
)

