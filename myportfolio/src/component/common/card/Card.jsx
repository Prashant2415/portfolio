import { redirectImage } from "../SVGImages";
import "./card.css"
import { SiJavascript, SiReact, SiRedux } from "react-icons/si"
import person from "/person.jpg"
export const Card = ({ data , onClickRedirect}) => {
    console.log(data)
    const redirectsvg = redirectImage;
    return (
        <div className="item-card">
            <img className='item-image' src={person} alt="person" />
            <div className="item-content">
                <div className="item-title-container">
                    <h4 className='item-title'>{data.name}</h4>
                    <button className="item-redirect-button" onClick={()=> {onClickRedirect(data)}}>{redirectsvg}</button>
                </div>
                <div className="item-tech">
                    {data.technologies.map((tech) => (
                        <div className={`tech ${tech === "JavaScript" ? "javascript" : tech === "React" ? "react" : tech === "React Native" ? "react-native" : tech === "Redux" ? "redux" : ""
                            }`} key={tech}>
                            {tech === "JavaScript" && (
                                <SiJavascript className="item-tech-image" size={20} color="#f7df1e" />
                            )}
                            {(tech === "React" || tech === "React Native") && (
                                <SiReact className="item-tech-image" size={20} color="#61DAFB" />
                            )}
                            {tech === "Redux" && (
                                <SiRedux className="item-tech-image" size={20} color="#764ABC" />
                            )}
                            <p className="item-tech-text">{tech}</p>
                        </div>
                    ))}
                </div>
                <p className='item-description'>{data.description}</p>
            </div>
        </div>
    )
}