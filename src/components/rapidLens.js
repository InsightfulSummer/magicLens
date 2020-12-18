import React, {useEffect, useState, useRef} from 'react'
import {
    MDBIcon
} from 'mdbreact'
import paper1 from '../data/paper.json'
import paper3 from '../data/paper2.json'
import {animateScroll as scroll, Element} from 'react-scroll'


const RapidLens = ({ cursorPosition, activePaper }) => {

    const [elements, setElements] = useState([])
    const [rapidDuration, setDuration] = useState(10)
    const [supRate, setSupRate] = useState(0)

    const scroll_ = () => {
        scroll.scrollToBottom({
            containerId : "lensContainer",
            duration : rapidDuration*1000
        })
    }

    const scroll_top = () => {
        scroll.scrollToTop({
            containerId : "lensContainer",
        })
    }

    useEffect(() =>{
        console.log(activePaper)
        if (activePaper == 1) {
            setElements(paper1)
        } else if(activePaper == 2) {
            setElements([])
        } else if(activePaper == 3) {
            setElements(paper3)
        }
    } , [activePaper])

    return (
        <Element
            className="rapidLens"
            style={{ top: cursorPosition[1] + 10, left: cursorPosition[0] + 10 }}
            id="lensContainer"
        >
            <div className="topOfPaper" />
            {
                activePaper == -1 ? (
                    // icon
                    <MDBIcon icon="eye" className="eyeIcon" />
                ) : activePaper? (
                    <div>
                        <div className="my-5">
                            <label htmlFor="customRange1">Rapid View Duration : {rapidDuration} s</label>
                            <input type="range" className="custom-range" id="customRange1" max={40} min={10} step={10} defaultValue={rapidDuration} onChange={(val)=>{setDuration(val.target.value)}} />
                        </div>
                        <div className="my-5">
                            <label htmlFor="customRange1">Suppression Rate : {supRate}</label>
                            <input type="range" className="custom-range" id="customRange1" max={4} min={0} step={1} defaultValue={supRate} onChange={(val)=>{setSupRate(val.target.value)}} />
                        </div>
                        {
                            elements.map(element => (
                                <div className="elementContainer" key={element.id} style={element.importance > 5 - supRate ? {transform: 'scale(0.4)', filter : 'blur(2px)'} : {}}>
                                    {
                                        element.tag == "h2" ? (
                                            <h2 onClick={scroll_} style={{ textAlign: element.align, fontWeight: element.style }}>{element.content}</h2>
                                        ) : element.tag == "h4" ? (
                                            <h4 style={{ textAlign: element.align, fontWeight: element.style }}>{element.content}</h4>
                                        ) : element.tag == "p" ? (
                                            <p style={{ textAlign: element.align, fontWeight: element.style }}>{element.content}</p>
                                        ) : element.tag == "img" ? (
                                            <div style={{ textAlign: "center" }}>
                                                <img className="figImg" src={require("../data/figs/" + element.content).default}></img>
                                                <p className="figCaption">{element.caption}</p>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            ))
                        }
                        <div>
                            <MDBIcon onClick={scroll_top} className="backToTop" icon="chevron-circle-up" />
                        </div>
                    </div>
                ) : null
            }
        </Element>
    )
}

export default RapidLens