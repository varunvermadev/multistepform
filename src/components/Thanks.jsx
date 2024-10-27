
import icons from '../assets/images/icons.svg';
const Thanks = () =>
{
    return (
        <section className="section thanking">
            <div className="thanking__image">
                <svg>
                    <use xlinkHref={`${icons}#icon-thank-you`}></use>
                </svg>
            </div>
            <header className="section__header">
                <h1>Thank you!</h1>
                <p>   Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.</p>
            </header>
        </section>
    )
}

export default Thanks