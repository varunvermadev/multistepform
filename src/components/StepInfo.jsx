/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import icons from '../assets/images/icons.svg';
import Thanks from "./Thanks";

const StepInfo = ({ currStep, isYearly, setIsYearly, plans, selectedPlan, setSelectedPlan, addons, setAddons, totalAddons,isRenderThanks }) => {
    const [totalItems, setTotalItems] = useState([]);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');

    



    useEffect(() =>
        {
        const updatedItems = [...addons].filter(item => item.type !== 'plan');

        // Add the selected plan item
        if (selectedPlan) {
            updatedItems.push(selectedPlan);
        }
        setTotalItems(updatedItems);
        
        
    }, [addons, selectedPlan]);

    const handleInputChangeName = (e) => {
        setUserName(e.target.value);
    };

    const handleInputChangeEmail = (e) => {
        setUserEmail(e.target.value);
    };

    const handleInputChangePhone = (e) => {
        setUserPhone(e.target.value);
    };

    if (isRenderThanks)
    {
        return <Thanks/>
    }

    if (currStep === 2) {
        return (
            <section id="step2" className="section plan-info">
                <header className="section__header">
                    <h1>Select your plan</h1>
                    <p>You have the option of monthly or yearly billing.</p>
                </header>

                <div className="plan-info__cards">
                    {plans.map((plan) => (
                        <div
                            role="button"
                            key={plan.name}
                            onClick={() =>
                            {
                                setSelectedPlan(plan);
                                
                            }}
                            className={(selectedPlan.name === plan.name ? "active " : "")+"plan__info__card"}
                        >
                            <div className="plan__info__card-img">
                                <svg>
                                    <use xlinkHref={`${icons}#icon-${plan.name.toLowerCase()}`}></use>
                                </svg>
                            </div>
                            <div className="plan__info__card-details">
                                <h3 className="card__name">{plan.name}</h3>
                                <span className="card__price">
                                    ${isYearly ? 12 * plan.price : plan.price}/{isYearly ? "yr" : "mo"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="plan__info__billing">
                    <span className={!isYearly ? "active permonth" : "permonth"}>Monthly</span>
                    <div className="switch">
                        <input
                            type="checkbox"
                            checked={isYearly}
                            onChange={(e) => setIsYearly(e.target.checked)}
                            id="rate__switcher"
                        />
                    </div>
                    <span className={isYearly ? "active peryear" : "peryear"}>Yearly</span>
                </div>
            </section>
        );
    }

    if (currStep === 3) {
        return (
            <section id="step3" className="section addons-info">
                <header className="section__header">
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                </header>

                <form className="addons-info__form">
                    {totalAddons.map((addon) =>
                    {
                        return (<div key={addon.name} className="addons-info__form__input-box">
                            <input
                                type="checkbox"
                                id={addon.name}
                                checked={addons.some((el) => el.name === addon.name)}
                                onChange={(e) =>
                                {

                                    const newAddons = e.target.checked
                                        ? [...addons, addon]
                                        : addons.filter((el) => el.name !== addon.name);
                                    setAddons(newAddons);
                                }}
                            />
                            <label htmlFor={addon.name}>
                                <h3>{addon.name}</h3>
                                <p>{addon.brief}</p>
                            </label>
                            <div className="addon-price">
                                <p>
                                    +${addon.price}/{isYearly ? "yr" : "mo"}
                                </p>
                            </div>
                        </div>
                    )})}
                </form>
            </section>
        );
    }

    if (currStep === 4) {
        return (
            <section id="step4" className="section finishing-info">
                <header className="section__header">
                    <h1>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>
                </header>

                <div className="finishing-info__details">
                    {totalItems.map((addon) => (
                        <div key={addon.name} className="finishing-info__details__items">
                            <div className="items-name">{addon.name}</div>
                            <div className="items-price">
                                ${isYearly ? addon.price * 12 : addon.price}/{isYearly ? "yr" : "mo"}
                            </div>
                        </div>
                    ))}

                    <div className="finishing-info__details__items finishing-info__details--sum">
                        <div className="totalsum">Total ({isYearly ? "Yearly" : "Monthly"})</div>
                        <div className="value">
                            $
                            {totalItems.reduce((totalSum, addon) => totalSum + addon.price, 0) +
                                "/" +
                                (isYearly ? "yr" : "mo")}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (currStep === 1) {
        return (
            <section id="step1" className="section personal-info">
                <header className="section__header">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                </header>

                <form className="personal-info__form">
                    <div className="personal-info__form__input-box">
                        <label htmlFor="user_name">Name</label>
                        <input placeholder="e.g. Jhon Doe" type="text" id="user_name" value={userName} onChange={handleInputChangeName} />
                    </div>
                    <div className="personal-info__form__input-box">
                        <label htmlFor="user_email">Email Address</label>
                        <input placeholder="e.g. jhondoe@xyzmail.com" type="email" id="user_email" value={userEmail} onChange={handleInputChangeEmail} />
                    </div>
                    <div className="personal-info__form__input-box">
                        <label htmlFor="user_phone">Phone Number</label>
                        <input placeholder="e.g. 2339843" type="tel" id="user_phone" value={userPhone} onChange={handleInputChangePhone} />
                    </div>
                </form>
            </section>
        );
    }

};

export default StepInfo;
