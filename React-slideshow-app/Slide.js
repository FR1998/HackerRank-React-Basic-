import React, {useState} from 'react';

function Slides({slides}) {
  const [step,setStep] = useState(0);

  let EverySlides = slides;

  const reset = () => {
    setStep(0);
  }

   const previous = () => {
    let step1 = step;
    setStep(--step1)
  }

  const next = () => {
    let step1 = step;
    setStep(++step1)
  }

  const contentofSlides = () =>{
    let SlideContent = EverySlides[step];
    return <div id="slide" className="card text-center">
                <h1 data-testid="title">{SlideContent.title}</h1>
                <p data-testid="text">{SlideContent.text}</p>
            </div>
  }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={()=>reset()} data-testid="button-restart" className="small outlined" disabled={step===0}>Restart</button>
                <button onClick={()=>previous()} data-testid="button-prev" className="small" disabled={step===0}>Prev</button>
                <button onClick={()=>next()} data-testid="button-next" className="small" disabled={step===EverySlides.length-1}>Next</button>
            </div>
           {contentofSlides()}
        </div>
    );

}

export default Slides;
