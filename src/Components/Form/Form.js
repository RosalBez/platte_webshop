import React from 'react';

function Form(props) {
    return (
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="firstname-field">Voornaam</label>
                <input
                    name="firstname"
                    id="firstname-field"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="lastname-field">Achternaam</label>
                <input
                    name="lastname"
                    id="lastname-field"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="age-field">Leeftijd</label>
                <input
                    name="age"
                    id="age-field"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="zipcode-field">Postcode</label>
                <input
                    name="zipcode"
                    id="zipcode-field"
                    type="text"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="delivery-field">Bezorgfrequentie</label>
            </section>
            <section>
                <select
                    name="delivery"
                    id="delivery-field"
                    value={deliveryFrequency}
                    onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                >
                    <option value="week">Iedere week</option>
                    <option value="two-week">Om de week</option>
                    <option value="month">Iedere maand</option>
                </select>
            </section>
            <section>
                <input
                    type="radio"
                    value="daytime"
                    name="timeslot"
                    id="timeslot-field-daytime"
                    checked={deliveryTimeslot === 'daytime'}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                />
                <label htmlFor="timeslot-field-daytime">Overdag</label>
                <input
                    type="radio"
                    value="evening"
                    checked={deliveryTimeslot === 'evening'}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                    name="timeslot"
                    id="timeslot-field-evening"
                />
                <label htmlFor="timeslot-field-evening">'s Avonds</label>
            </section>
            <section>
                <label htmlFor="remark-field">Opmerking</label>
                <textarea
                    name="remark"
                    id="remark-field"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    rows={6}
                    cols={40}
                />
            </section>
            <section>
                <input
                    type="checkbox"
                    name="agree"
                    id="agree-field"
                    value={agreeTerms}
                    onChange={(e) => toggleAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
            </section>

            <button type="submit">Verzend</button>
        </form>

)
    ;
}

export default Form;