import { Project } from "./subcomponents/projectcard"
import keepup from "../img/keepup.png"
import showfinder from "../img/showfinder.png"
import calender from "../img/calender.png"
import crowd from "../img/crowd.png"
import weather from "../img/weather.png"

const Portfolio = () => {
    return (
        <div className="hero min-h-screen bg-transparent">
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-5xl font-bold">Projects</h1>
                    <p className="py-6">These are some projects and challenges I did while going throught the Coding Bootcamp</p>
                    {/* project card */}
                    <div class="grid lg:grid-cols-3">
                        <Project 
                        title={"keepup"}
                        image={keepup}
                        description={"Socialapp that you can connect with your friends"}
                        deploylink={"https://keep-up-project-3.herokuapp.com/"}
                        repolink={"https://github.com/Sebascrab/Group-Project-3"}
                        />
                        <Project 
                        title={"Show Finder"}
                        image={showfinder}
                        description={"An app that will find shows and streaming services they play on"}
                        deploylink={"http://localhost:52330/index.html"}
                        repolink={"https://github.com/srandall1213/Show-Finder"}
                        />
                        <Project 
                        title={"Crowd CNTRL"}
                        image={crowd}
                        description={"socialapp"}
                        deploylink={"https://crowdcntrl.herokuapp.com/"}
                        repolink={"https://github.com/Sebascrab/Crowd-Cntrl-Group-Project-2"}
                        />
                        <Project 
                        title={"Calender Project"}
                        image={calender}
                        description={"An calander to keep track of the day"}
                        deploylink={"http://localhost:52330/index.html"}
                        repolink={"https://github.com/AbelitoG/Calender-Project"}
                        />
                        <Project 
                        title={"Weather Generator"}
                        image={weather}
                        description={"A weather app that will give you todays weather and the 5 day forecast"}
                        deploylink={"http://localhost:52330/index.html"}
                        repolink={"https://github.com/AbelitoG/weather-generator"}
                        />
                        <Project 
                        title={"Employee Tracker"}
                        image={""}
                        description={"A place to track employee information"}
                        deploylink={"https://drive.google.com/file/d/1tyAzgLu9W2q5hWvKXY2n_6ZCqWNT6tKj/view"}
                        repolink={"https://github.com/AbelitoG/Team-Profile-Generator"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio