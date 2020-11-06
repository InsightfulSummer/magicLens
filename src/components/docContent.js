import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBTooltip
} from 'mdbreact'

const DocContent = ({ activeTranslation, targetLan }) => {
    const [txt, setTxt] = useState("The work has as basis the fact that the nervous system behaves adap- tively and the hypothesis that it is essentially mechanistic; it proceeds on the assumption that these two data are not irrecon- cilable. It attempts to deduce from the observed facts what sort of a mechanism it must be that behaves so differently from any machine made so far. Other proposed solutions have usually left open the question whether some different theory might not fit the facts equally well: I have attempted to deduce what is necessary, what properties the nervous system must have if it is to behave at once mechanistically and adaptively. For the deduction to be rigorous, an adequately developed logic of mechanism is essential. Until recently, discussions of mechan- ism were carried on almost entirely in terms of some particular embodiment—the mechanical, the electronic, the neuronic, and so on. Those days are past. There now exists a well developed logic of pure mechanism, rigorous as geometry, and likely to play the same fundamental part, in our understanding of the complex systems of biology, that geometry does in astronomy. Only by the development of this basic logic has the work in this book been made possible. The conclusions reached are summarised at the end of Chapter 18, but they are likely to be unintelligible or misleading if taken by themselves; for they are intended only to make prominent the key points along a road that the reader has already traversed. ")
    const [currentWord, setCurrentWord] = useState("")
    const [translatedWord, setTranslatedWord] = useState("")
    const [position, setPosition] = useState([0, 0])


    const getSection = (e) => {
        // we can use different regular expressions to select different segments
        if (activeTranslation) {
            setPosition([e.clientX, e.clientY])
            e.target.innerHTML = e.target.innerText.replace(/([\w]+)/g, '<span>$1</span>');
            if (e.target.innerText.length < 50 && e.target.innerText != currentWord) {
                setCurrentWord(e.target.innerText)
                translate(e.target.innerText)
            }
        }
    }

    const translate = (currentWord) => {
        Axios.get("https://api.mymemory.translated.net/get?q=" + currentWord + "&langpair=en|" + targetLan)
            .then(res => {
                console.log(res)
                setTranslatedWord(res.data.responseData.translatedText)
            })
    }

    const clear = () => {
        setCurrentWord("")
        setTranslatedWord("")
    }

    return (
        <MDBContainer>
            <p id="fullTxt" onMouseOver={getSection} onMouseLeave={clear}>
                {txt}
            </p>
            {
                (currentWord != "" && translatedWord != "") ? (
                    <div className="translationLens" style={{ top: position[1] + 10, left: position[0] + 10 }}>
                        <p>currentWord: {currentWord}</p>
                        <p>translation: {translatedWord}</p>
                    </div>
                ) : null
            }
        </MDBContainer>
    )
}

export default DocContent