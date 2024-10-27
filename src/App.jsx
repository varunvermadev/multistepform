import { useState } from 'react'
import Footer from './components/Footer'
import Attr from './components/Attr'
import SideBar from './components/SideBar'
import Main from './components/Main'

const App = () =>
{
  const [isRenderThanks, setRenderThanks] = useState(false);
  const totalAddons = [
    {
      name: "Online Service",
      brief : 'Access to multiplayer games',
      price: 1,
      type:'addon'
    },
    {
      name: "Larger storage",
      brief : 'Extra 1TB of cloud save',
      price : 2,
      type:'addon'
    },
    {
      name: "Customizable Profile",
      brief : 'Custom theme on your profile',
      price : 2,
      type:'addon'
    },
  ]
  const plans = [
    {
      name: "Arcade",
      price: 9,
      rate: "monthly",
      type:'plan'
    },
    {
      name: "Advanced",
      price: 12,
      rate: "monthly",
      type:'plan'
    },
    {
      name: "Pro",
      price: 15,
      rate: "monthly",
      type:'plan'
    },
  ]
  const totalSteps = 4;

  const [currStep, setCurrStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    name: 'Advanced',
    price: 12,
    rate: "Monthly",
    type:'plan'
  });
  const [addons, setAddons] = useState([plans[1]]);
  return (
    <>
      <SideBar currStep={currStep} setCurrStep={setCurrStep} totalSteps={totalSteps} />
      <div className="container">
        <Main totalAddons={totalAddons} addons={addons} setAddons = {setAddons} currStep={currStep} isYearly={isYearly} setCurrStep={setCurrStep} setIsYearly={setIsYearly} plans={plans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} isRenderThanks={isRenderThanks}  setRenderThanks={setRenderThanks} />
        <Footer  totalSteps={totalSteps} currStep={currStep} setCurrStep={setCurrStep} isRenderThanks={isRenderThanks} setRenderThanks={setRenderThanks} />
      </div>
      <Attr />

    </>
  )
}

export default App