import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import './App.css';


function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    // const [firstnameValue, setFirstnameValue] = useState('');
    // const [lastnameValue, setLastnameValue] = useState('');
    // const [ageValue, setAgeValue] = useState('');
    // const [postcodeValue, setPostcodeValue] = useState('');
    // const [commentValue, setCommentValue] = useState('');
    // const [checkedTerms, toggleCheckedTerms] = React.useState(false);

    function resetAllFruitCounter() {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    // function sendOrderForm() {
    //     setFirstnameValue('')
    //     setLastnameValue('');
    //     setAgeValue(0);
    //     setPostcodeValue(0)
    //     setCommentValue('');
    // }

        const {handleSubmit, errors, register} = useForm({ mode: "onBlur", defaultValues: {
            age: 18,
            }});

        function onSubmit(data) {
            // errors.preventDefault();
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
                            name='firstname'
                            placeholder="Type here your firstname"
                            ref={register("firstname", {required: true, message: "Please fill in your firstname!"})}
                        />
                        {errors.firstname && <p>{errors.firstname.message}</p>}


                    <label htmlFor="lastname" className="labels">
                        Lastname
                    </label>
                    <input
                            type="text"
                            id="lastname"
                            name='lastname'
                            placeholder="Type here your lastname"
                            ref={register("lastname", {required: true, message: "Please fill in your lastname!"})}
                        />
                        {errors.lastname && <p>{errors.lastname.message}</p>}

                    <label htmlFor="form-age" className="labels">
                        Leeftijd
                    </label>
                        <input
                            type="number"
                            id="form-age"
                            name="age"
                            placeholder="18"
                            ref={register(
                                {
                                    required: true,
                                    validate: (value) => value >= 18,
                                    message: 'Minimum leeftijd is 18 jaar',
                                }
                            )}
                        />
                        {errors.age && <p>{errors.age.message}</p>}


                    <label htmlFor="form-postcode" className="labels">
                        Postcode
                    </label>
                        <input
                            type="text"
                            id="form-postcode"
                            name="postcode"
                            placeholder="1234 QZ"
                            ref={register("form-postcode", {required: {pattern: /[0-9]{4}[A-Z]{2}/, message: "INVALID FORM, TRY THIS: 1234 QZ"}}
                            )}
                        />
                        {errors.postcode && <p>{errors.postcode.message}</p>}


                    <fieldset>
                        <legend>Delivery frequency</legend>

                    <label htmlFor="everyWeek">Every Week
                    </label>
                        <input
                            type="radio"
                            name="order"
                            id="everyWeek"
                            value="everyWeek"
                            ref={register("everyWeek", {required: true})}
                        />

                    <label htmlFor="secondWeek">Every second week
                    </label>
                        <input
                            type="radio"
                            name="order"
                            id="secondWeek"
                            value="secondWeek"
                            ref={register("secondWeek", {required: true})}
                        />

                    <label htmlFor="eachMonth">Each month
                    </label>
                        <input
                            type="radio"
                            name="order"
                            id="eachMonth"
                            value="eachMonth"
                            ref={register("eachMonth", {required: true})}
                        />


                    <label htmlFor="other">Other</label>
                        <input
                            type="radio"
                            name="other"
                            id="other"
                            value="other"
                            ref={register("other", {required: true})}
                        />


                        {/*// dit werkt niet*/}
                        {/*{selectedOther === "other" && (*/}
                        {/*    <input*/}
                        {/*        name="otherFrequency"*/}
                        {/*        ref={register({required: true})}*/}
                        {/*        placeholder="Andere frequentie, nl:"*/}
                        {/*        />*/}
                        {/*)}*/}

                    <label htmlFor='comment'>Comment</label>
                        <input className="comment"
                            type="text"
                            id="comment"
                            name="comment"
                            // className={commentValue.length > 200 ? 'input-error' : ''}
                            // value='comment' // een input element heeft altijd een value attribute
                            placeholder="Please let us know what was your experience"
                            // onChange={(e) => setCommentValue(e.target.value)}
                            ref={register('comment', {required: true, maxLength: 200})}
                        />

                        <label htmlFor='terms-and-conditions'></label>
                        <input
                            type="checkbox"
                            id="terms-and-conditions"
                            name="terms-and-conditions"
                            value='checked'

                            ref={register('terms-and-conditions', {required: true})}
                        />
                        I agree with the terms and conditions

                    </fieldset>

                    <input
                       type="submit"
                   />
                </form>
            </div>
        </>
    )
};

export default App;



