import StepInfo from './StepInfo'

const Main = (props) =>
{
    
  return (
    <div className="main__container">
          <StepInfo{ ...props }/>
    </div>
  )
}

export default Main