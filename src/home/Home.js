import Footer from "../common/Footer";
import head from "../images/head.png";
import standing from "../images/standing.png";
import ProjectsList from "./ProjectsList";
import home from "./home.css"

export default function Home(){
    return(
        <>
            <div className="row">
                <div className="my-3 text-center col-md-7 col-12">
                    <div className="d-flex align-items-stretch">
                        <div className="col-8 d-flex flex-column justify-content-evenly">
                            <h1 className="fw-bold" style={{color: "#FF7B9C"}}>Denasia Furniss</h1>
                            <h2 className="fs-5 fw-normal">Full Stack Software Engineer</h2>
                            <p className="text-secondary text-opacity-75 fw-light">Charlotte, NC</p>
                        </div>
                        <div className="col-3">
                            <img
                                src={standing}
                                style={{width: 70, paddingTop: 0}}>
                            </img>
                        </div>
                    </div>

                    <p className="p-md-2 p-4" style={{fontFamily: "Nunito, sans-serif"}}>
                        Thanks for stumbling on my page! My name is Denasia. I am 22 years young. I love everything Star Wars and Japan. Making the career switch from ASL interpreter to software engineer has been the best decision I've made in a long time! Currently, I'm enrolled in Thinkful's immersion boot camp. Tech has always had a special place in my heart and brain but it wasn't the career choice I initially followed, unfortunately. But now I'm here and ready to take it head-on! I'm always up for a challenge to pick at my brain and make me think. I am super excited to build and connect with colleagues and mentors and develop new skills to put to the test!
                    </p>
                </div>

                <div className="col px-5">
                    
                    <ProjectsList/>
                    <Footer/>
                </div>
            </div>
        </>
    )
};