import React from "react";
import TextInput from './components/form_components/TextInput';
import Radio from './components/form_components/Radio';
import NumberInput from './components/form_components/NumberInput';

let Medical = ({
    reRender,
    fields,
    updateFields
}) => {

    let onClick = (e) => {
        console.log(e)
        e.preventDefault();
        reRender('submit')
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    console.log(fields)

    return (
        <>
        <div className="reg-border">
        <h1>Registration Form</h1>
        <h2>London Foot & Ankle Surgery</h2>
        <div style={{marginBottom: "30px"}}>If any fields are not relevant, please use 'N/A'</div>
        <hr />
        <form className="reg-form" onSubmit={(e) => onClick(e)}>
            <TextInput 
                description='Please list all medical conditions you are being treated for'
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="conditions"
                value={fields.conditions}
                placeholder='e.g. gout'
                />
            <TextInput 
                description='Please list all medicines you are currently taking'
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="medicines"
                value={fields.medicines}
                placeholder='e.g. painkillers'
                />
            <TextInput 
                description='Please list any previous operations you have had'
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="operations"
                value={fields.operations}
                placeholder='e.g. ACL Repair'
                />
            <TextInput 
                description='Please list any allergies.'
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="allergies"
                value={fields.allergies}
                placeholder='e.g. penicillin'
                />
            <Radio 
                description="Do You Smoke?"
                name="smoker"
                value={fields.smoker}
                fields={fields}
                updateField={(name, value) => updateFields(name, value)}
                options={['Yes', 'No']}
                required={true}
            />

            {fields.smoker === "Yes" ? //if client is smoker display how many smokes per day
                <>
                    <hr />
                    <NumberInput 
                        required={true}
                        updateField={(name, value) => updateFields(name, value)}
                        name="how_many_cigarettes_per_day"
                        value={fields.how_many_cigarettes_per_day}
                        placeholder='e.g. 4'
                        />
                    <hr />
                </>
                :
                <></>
            }

            <TextInput 
                description='How many units of alcohol do you consume per week?'
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="alcohol"
                value={fields.alcohol}
                placeholder='e.g. 4'
                />
            <TextInput 
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="occupation"
                value={fields.occupation}
                />
            <TextInput 
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="weight"
                value={fields.weight}
                placeholder='e.g. 80kg'
                />
            <TextInput 
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="height"
                value={fields.height}
                placeholder='e.g. 5ft 10in'
                />
            <TextInput 
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="shoeSize"
                value={fields.shoeSize}
                placeholder='e.g. 9 UK'
                />
            <TextInput 
                description='Please list all sports and recreational activities'
                required={true}
                setValue={(name, value) => updateFields(name, value)}
                name="sports"
                value={fields.sports}
                placeholder='e.g. badminton'
                />
            <hr />
            <input type="submit" value="Next" />
        </form>
        </div>
        </>
    )
}

export default Medical;