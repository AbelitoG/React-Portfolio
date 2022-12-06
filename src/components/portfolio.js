import { Project } from "./subcomponents/projectcard"
import keepup from "../img/keepup.png"

const Portfolio = () => {
    return (
        <div className="hero min-h-screen bg-transparent">
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* project card */}
                    <div class="grid lg:grid-cols-3">
                        <Project 
                        title={"keepup"}
                        image={keepup}
                        description={"socialapp"}
                        deploylink={"https://keep-up-project-3.herokuapp.com/"}
                        repolink={"https://github.com/Sebascrab/Group-Project-3"}
                        />
                        <Project 
                        title={"keepup"}
                        image={""}
                        description={"socialapp"}
                        deploylink={""}
                        repolink={""}
                        />
                        <Project 
                        title={"keepup"}
                        image={""}
                        description={"socialapp"}
                        deploylink={""}
                        repolink={""}
                        />
                        <Project 
                        title={"keepup"}
                        image={""}
                        description={"socialapp"}
                        deploylink={""}
                        repolink={""}
                        />
                        <Project 
                        title={"keepup"}
                        image={""}
                        description={"socialapp"}
                        deploylink={""}
                        repolink={""}
                        />
                        <Project 
                        title={"keepup"}
                        image={""}
                        description={"socialapp"}
                        deploylink={""}
                        repolink={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio