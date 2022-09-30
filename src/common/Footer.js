import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import instagram from "../images/instagram-logo.png";

export default function Footer () {
    return (
        <>
            <div className="row pt-4">
                    <p className="col text-center mb-0">Connect With Me!</p>
            </div>
            <div className="d-flex justify-content-center pb-4">
               <a 
                href="https://www.linkedin.com/in/denasia-furniss/" 
                target="blank"
                className="px-2">
                    <img 
                        src={linkedin} 
                        style={{width: 20}}>
                    </img>
                </a> 

               <a 
                href="https://github.com/djfurniss" 
                target="blank"
                className="px-2">
                    <img 
                        src={github} 
                        style={{width: 20}}>
                    </img>
                </a> 

               <a 
                href="https://instagram.com/djaliece?igshid=ODBkMDk1MTU=" 
                target="blank"
                className="px-2">
                    <img 
                        src={instagram} 
                        style={{width: 20}}>
                    </img>
                </a>
            </div>
        </>
    )
};