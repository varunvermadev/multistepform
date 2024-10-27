
const Footer = ({currStep,setCurrStep,totalSteps,setRenderThanks,isRenderThanks}) =>
{

    console.log(!isRenderThanks,currStep)
    
    const handleClick = function ()
    {

        setCurrStep((prev) =>
        {
            prev++;
            if (prev > totalSteps)
            {
                setRenderThanks(true);
                prev = totalSteps;

            }
            return prev;
        })


        
    }

    let displayGoBack = {
        display: 'block'
    }
    if ((currStep > 1) && (!isRenderThanks))
    {
        displayGoBack.display = 'block'
    }
    else
    {
        displayGoBack.display = 'none'
    }

    let displayGoNext = {
        display: 'block'
    }

    if ((currStep <= totalSteps ) && !isRenderThanks)
    {
        displayGoNext.display = 'block';
    }
    else
    {
        displayGoNext.display = 'none';
    }



    return (
        <footer style={isRenderThanks ? { display: 'none' } : {display :'block'}} className="footer">
          <div className="footer__btn">
              
              <button
                  onClick={() =>
              {
                  setCurrStep((prev) =>
                  {
                      prev--;
                      if (prev <= 1) prev = 1; 
                      return prev;
                  })
              }} style={displayGoBack} className="btn btn__back">Go Back</button>
              <button style={displayGoNext} onClick={handleClick} type="submit"className="btn btn__next">{(currStep == totalSteps) ? "Confirm" : "Next Step"}</button>
      </div>
    </footer>
  )
}

export default Footer