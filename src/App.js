import React from 'react';
import './App.css';
// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
    const [strawberryCounter, setStrawberryCounter] = React.useState(0);
    const [banaanCounter, setBanaanCounter] = React.useState(0);
    const [appelCounter, setAppelCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);
    const [resetButton, setResetButton] = React.useState(false);

    function resetAll() {
        setStrawberryCounter(0);
        setBanaanCounter(0);
        setAppelCounter(0);
        setKiwiCounter(0);
    }

    {/*// function fruitOrder() {*/
    }
    {/*//     console.log(`Your order is: strawberries: "${strawberryCounter}", bananen: "${banaanCounter}", appels: "${appelCounter}", kiwi's: "${kiwiCounter}".`)*/
    }
    {/*//  setResetButton(true);*/
    }
    {/*// }*/
    }

    {/*// function resetButton(e){*/
    }
    {/*//     e.target.reset();*/
    }
    {/*// }*/
    }

        const {handleSubmit, errors, register, watch} = useForm({mode: 'onBlur'});


        function onFormSubmit(e) {
            e.preventDefault();
            console.log('Submitted!');
        }

        function onFormSubmit(data) {
            console.log(data);
        }

        return (
            <>
                <div className="container">
                    <h1>Fruitmand bezorgservice</h1>

                    <div className="fruits">Aardbei
                        <button
                            type="button"
                            name="aardbei-min"
                            onClick={() => setStrawberryCounter(strawberryCounter - 1)}
                        >-1
                        </button>
                        <p>{strawberryCounter}</p>
                        <button
                            type="button"
                            name="aardbei-plus"
                            onClick={() => setStrawberryCounter(strawberryCounter + 1)}
                        >+1
                        </button>
                    </div>
                    <div className="fruits">Banaan
                        <button
                            type="button"
                            name="aardbei-min"
                            onClick={() => setBanaanCounter(banaanCounter - 1)}
                        >-1
                        </button>
                        <p>{banaanCounter}</p>
                        <button
                            type="button"
                            name="aardbei-plus"
                            onClick={() => setBanaanCounter(banaanCounter + 1)}
                        >+1
                        </button>
                    </div>
                    <div className="fruits">Appel
                        <button
                            type="button"
                            name="aardbei-min"
                            onClick={() => setAppelCounter(appelCounter - 1)}
                        >-1
                        </button>
                        <p>{appelCounter}</p>
                        <button
                            type="button"
                            name="aardbei-plus"
                            onClick={() => setAppelCounter(appelCounter + 1)}
                        >+1
                        </button>
                    </div>

                    <div className="fruits">Kiwi
                        <button
                            type="button"
                            name="aardbei-min"
                            onClick={() => setKiwiCounter(kiwiCounter - 1)}
                        >-1
                        </button>
                        <p>{kiwiCounter}</p>
                        <button
                            type="button"
                            name="aardbei-plus"
                            onClick={() => setKiwiCounter(kiwiCounter + 1)}
                        >+1
                        </button>
                    </div>
                </div>

                <button
                    type="reset"
                    name="reset-button"
                    onClick={resetButton}
                >
                    Reset
                </button>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="firstname" className="labels"
                    >Firstname:
                        <input
                            type="text"
                            id="firstname"
                            name="name"
                            // className={firstnameValue.length > 20 ? 'input-error' : ''}
                            // value={firstnameValue}
                            placeholder="Type here your firstname"
                            ref={register({required: true})}

                        />
                        {errors.firstname && <p>{errors.firstname.message}</p>}
                    </label>

                    <label htmlFor="lastname" className="labels">Lastname:
                        <input
                            type="text"
                            id="lastname"
                            name="name"
                            // className={lastnameValue.length > 20 ? 'input-error' : ''}
                            // value={lastnameValue}
                            placeholder="Type here your lastname"
                            ref={register({required: true})}
                        />
                        {errors.lastname && <p>{errors.lastname.message}</p>}
                    </label>

                    <label htmlFor="form-age" className="labels">Leeftijd:
                        <input
                            type="number"
                            id="form-age"
                            name="age"
                            // className={ageValue = 0 ? 'input-error' : ''}
                            // value={ageValue}
                            placeholder="0"
                            ref={register}

                        />
                    </label>

                    <label htmlFor="form-postcode" className="labels">Postcode:
                        <input
                            type="number"
                            id="form-postcode"
                            name="postcode"
                            // className={postcodeValue = 0 ? 'input-error' : ''}
                            // value={postcodeValue}
                            placeholder="0"
                            ref={register}
                        />
                    </label>

                </form>

                <h2>Bezorgfrequentie</h2>
                <form>
                    <label htmlFor="everyWeek">
                        <input
                            type="radio"
                            name="order"
                            id="everyWeek"
                            ref={register}
                        />
                        Iedere Week
                    </label>
                    <label htmlFor="secondWeek">
                        <input
                            type="radio"
                            name="order"
                            id="secondWeek"
                            ref={register}
                        />
                        Om de week
                    </label>
                    <label htmlFor="eachMonth">
                        <input
                            type="radio"
                            name="order"
                            id="eachMonth"
                            ref={register}
                        />
                        Iedere maand
                    </label>
                    <label htmlFor="other">
                        <input
                            type="radio"
                            name="order"
                            id="other"
                            ref={register}
                        />
                        Anders
                    </label>

                    <label htmlFor="label-opmerkingen" className="labels">Opmerking
                        <input
                            type="text"
                            id="form-opmerkingen"
                            name="opmerkingen"
                            // className={opmerkingValue.length > 200 ? 'input-error' : ''}
                            // value={opmerkingValue}
                            placeholder="Please let us know what was your experience"
                            ref={register(
                                {
                                    required: true,
                                    maxLength: 50,
                                }
                            )}

                        />
                    </label>

                    <label htmlFor="termsAndConditions">
                        <input
                            type="checkbox"
                            id="termsAndConditions"
                            name="terms-and-conditions"
                            ref={register}
                        />
                        Ik ga akkoord met de algemene voorwaarden
                    </label>
                </form>

                <button
                    type="submit"
                    // disabled={!termsAndConditionsValue}
                    // onClick={sendForm}
                    ref={register}
                >
                    Verstuur
                </button>
            </>
        );

}

export default App;



