import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import './App.css';


function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    const [firstnameValue, setFirstnameValue] = useState('');
    const [lastnameValue, setLastnameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [postcodeValue, setPostcodeValue] = useState('');
    const [commentValue, setCommentValue] = useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);

    function resetAllFruitCounter() {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    function sendOrderForm() {
        setFirstnameValue('')
        setLastnameValue('');
        setAgeValue(0);
        setPostcodeValue(0)
        setCommentValue('');
    }

        const {handleSubmit, errors, register} = useForm();

        const onSubmit = data => {
            errors.preventDefault();
            console.log(data);
        }


    return (
            <>
                <div className="container">

                    <h1>Fruitmand bezorgservice</h1>

                    <div className="fruits">
                        <p className="fruit-text">🍓 Aardbei</p>
                        <button
                            type="button"
                            name="aardbei-min"
                            onClick={() => setStrawberryCounter(strawberryCounter - 1)}
                            disabled={strawberryCounter === 0}
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
                    <div className="fruits">
                        <p className="fruit-text"> 🍌 Banana</p>
                        <button
                            type="button"
                            name="banana-min"
                            onClick={() => setBananaCounter(bananaCounter - 1)}
                            disabled={bananaCounter === 0}
                        >-1
                        </button>
                        <p>{bananaCounter}</p>
                        <button
                            type="button"
                            name="banana-plus"
                            onClick={() => setBananaCounter(bananaCounter + 1)}
                        >+1
                        </button>

                    </div>
                    <div className="fruits">
                        <p className="fruit-text">🍏 Apple</p>
                        <button
                            type="button"
                            name="apple-min"
                            onClick={() => setAppleCounter(appleCounter - 1)}
                            disabled={appleCounter === 0}
                        >-1
                        </button>
                        <p>{appleCounter}</p>
                        <button
                            type="button"
                            name="apple-plus"
                            onClick={() => setAppleCounter(appleCounter + 1)}
                        >+1
                        </button>
                    </div>
                    <div className="fruits">
                        <p className="fruit-text">🥝 Kiwi</p>
                        <button
                            type="button"
                            name="kiwi-min"
                            onClick={() => setKiwiCounter(kiwiCounter - 1)}
                            disabled={kiwiCounter === 0}
                        >-1
                        </button>
                        <p>{kiwiCounter}</p>
                        <button
                            type="button"
                            name="kiwi-plus"
                            onClick={() => setKiwiCounter(kiwiCounter + 1)}
                        >+1
                        </button>
                    </div>

                <button className="buttons"
                    type="reset"
                    name="reset-button"
                    onClick={resetAllFruitCounter}
                >
                    Reset
                </button>
                </div>

                <div  className="order-container">

                <form className="contact-container"  onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="firstname" className="labels">
                        Firstname
                    </label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="Type here your firstname"
                            {...register("firstname", {required: true})}
                        />
                        {errors.firstname && <p>{errors.firstname}</p>}


                    <label htmlFor="lastname" className="labels">
                        Lastname
                    </label>
                    <input
                            type="text"
                            id="lastname"
                            placeholder="Type here your lastname"
                            {...register("lastname", {required: true})}
                        />
                        {errors.lastname && <p>{errors.lastname}</p>}

                    <label htmlFor="form-age" className="labels">
                        Leeftijd
                    </label>
                        <input
                            type="number"
                            id="form-age"
                            placeholder="0"
                            {...register("age", { required: "You have to be minimum 16!", min: 16, max: 99 })}
                        />
                        {errors.ageValue && <p>{errors.ageValue.message}</p>}


                    <label htmlFor="form-postcode" className="labels">
                        Postcode
                    </label>
                        <input
                            type="number"
                            id="form-postcode"
                            placeholder="1234 QZ"
                            {...register("form-postcode", { required: {value: 7, message: "INVALID FORM, TRY THIS: 1234 QZ"}}
                            )}
                        />
                        {errors.postcode && <p>{errors.postcode.message}</p>}


                    <fieldset>
                        <legend>Delivery frequency</legend>

                    <label htmlFor="everyWeek">
                        <input
                            type="radio"
                            name="order"
                            id="everyWeek"
                            {...register("everyWeek", {required: true})}
                        />
                        Every Week
                    </label>
                    <label htmlFor="secondWeek">
                        <input
                            type="radio"
                            name="order"
                            id="secondWeek"
                            {...register("secondWeek", {required: true})}
                        />
                        Every second week
                    </label>
                    <label htmlFor="eachMonth">
                        <input
                            type="radio"
                            name="order"
                            id="eachMonth"
                            {...register("eachMonth", {required: true})}
                        />
                        Each month
                    </label>
                    <label htmlFor="other">
                        <input
                            type="radio"
                            name="order"
                            id="other"
                            {...register("other", {required: true})}
                        />
                        Other
                    </label>


                    <label>Comment</label>
                        <input className="comment"
                            type="text"
                            id="comment"
                            name="comment"
                            // className={commentValue.length > 200 ? 'input-error' : ''}
                            // value={commentValue}
                            placeholder="Please let us know what was your experience"
                            {...register("comment", {required: true, maxLength: 150})}
                        />


                        <label htmlFor="form-terms-and-conditions">
                        <input
                            type="checkbox"
                            id="form-terms-and-conditions"
                            checked={checkedTerms}
                            onChange={() => toggleCheckedTerms(!checkedTerms)}
                        />
                        I agree with the terms and conditions
                    </label>
                    </fieldset>

                    <input
                            type="submit"
                            value="Submit"
                   />

                </form>


                </div>
        </>
    )
};

export default App;



