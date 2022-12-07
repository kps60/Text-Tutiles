import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText,setbtnText]=useState("enable darkmode");
    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    
    //         setMyStyle({
    //         color: 'white',
    //         backgroundColor: 'black'
    //         })
    //         setbtnText("disable darkmode");

    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //             })
    //         setbtnText("enable darkmode");
    //     }
        
    
    return (
        <div className="container " >
            <div className={`accordion text-${props.mode==='light'?'black':'light'}`} id="accordionPanelsStayOpenExample">
                <h2>About Us</h2>
                <div className={`accordion-item bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className={`accordion-button bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >
                        <div className={`accordion-body bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className={`accordion-button bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" >
                        <div className={`accordion-body bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className={`collapsed accordion-button bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree" >
                        <div className={`accordion-body bg-${props.mode==='light'?'light':'black'} text-${props.mode==='light'?'black':'light'}`} >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
                </div> */}
            </div>
        </div>
    )
}
