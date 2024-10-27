/* eslint-disable react/prop-types */

const SideBar = ({ currStep, setCurrStep, totalSteps }) =>
{

    let arr = [];
    let stepsName = ['your info', 'select plan', 'add ons', 'summary','thanking you'];
    for (let i = 1; i <= totalSteps; i++)
    {
        arr.push(
            <a onClick={() => setCurrStep(i)} key={stepsName[i - 1]} href={"#step" + i} className={currStep == i ? " active sidebar__list__item" : " sidebar__list__item"}>
                <div className="step__number-btn"><span>{i}</span></div>

                <li className="step">
                    <span className="step__number">Step {i}</span>
                    <span className='step__name'>{stepsName[i - 1]}</span>
                </li>
            </a>
        )
    }

    return (

        <header className="header">
            <nav className="sidebar">
                <ul className="sidebar__list">
                    {arr}
                </ul>
            </nav>
        </header>
    )
}

export default SideBar