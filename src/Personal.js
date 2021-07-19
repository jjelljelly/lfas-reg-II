import React from 'react';
import TextInput from './components/form_components/TextInput';
import SelectInput from './components/form_components/SelectInput';
import DateInput from './components/form_components/DateInput';
import TelephoneInput from './components/form_components/TelephoneInput';
import EmailInput from './components/form_components/EmailInput';
import Radio from './components/form_components/Radio';
import AutoComplete from 'places-autocomplete-react';
import { validate } from './functions/customValidation';
import './App.css';

let Personal = ({
  reRender,
  fields,
  updateFields
}) => {

  //data validation function and render phase of application
  let onClick = (e) => {
    e.preventDefault()
    const checked = validate(['title', 'method_of_payment'], fields);
    console.log(checked)
    if (Object.values(checked).filter(val => val === false).length === 0) {
      reRender('medical')
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    console.log(Object.keys(checked)
      .filter(val => checked[val] === false)
      .map(item => {
        return document.getElementById(item).style.border = '1px solid red'
      }))
  }

  //handle address select
  const addressSelection = (location, addressObject) => {
    //console.log(addressObject)
    const typedAddress = Object.keys(addressObject)
      .reduce((total, cur) => {
        if (cur !== 'formattedAddress') {
          total.push(addressObject[cur])
          return total
        }
        return total;
      }, []).join(', ')
    if (addressObject) {
      if (location === 'home' && fields.homeAddress !== typedAddress) {
        updateFields('homeAddress', typedAddress)
      }
      if (location === 'gp' && fields.gpAddress !== typedAddress) {
        updateFields('gpAddress', typedAddress)
      }
      if (location === 'home' && fields.formattedAddress !== addressObject.formattedAddress) {
        updateFields('formattedAddress', addressObject.formattedAddress)
      }
      if (location === 'gp' && fields.gpFormatted !== addressObject.formattedAddress) {
        updateFields('gpFormatted', addressObject.formattedAddress)
      }
    }
  }

  return (
    <div>
      <div className="reg-border">
        <h1>Registration Form</h1>
        <h2>London Foot & Ankle Surgery</h2>
        <div>If any fields are not relevant, please use 'N/A'</div>
        <hr />
        <form className="reg-form" onSubmit={(e) => onClick(e)}>
          <SelectInput
            name="title"
            value={fields.title}
            updateField={(name, value) => updateFields(name, value)}
            options={[
              'Mr',
              'Ms',
              'Mrs',
              'Miss',
              'Master',
              'Dr',
              'Lord',
              'Sir'
            ]}
          />

          <TextInput
            name="first_name"
            value={fields.first_name || ''}
            setValue={(name, value) => updateFields(name, value)}
          />

          <TextInput
            name="last_name"
            value={fields.last_name || ''}
            setValue={(name, value) => updateFields(name, value)}
          />

          <DateInput
            name="date_of_birth"
            value={fields.date_of_birth}
            updateField={(name, value) => updateFields(name, value)}
          />

          <label>
            <hr />
            Your Home Address: <br /><br />
            <AutoComplete
              placesKey="AIzaSyAkuPHNHz8Ki1KV6n6iI1-EFVIC3ZAm0QY"
              inputId="address"
              setAddress={(addressObject) => addressSelection('home', addressObject)}
              required={true}
            />
            <hr />
          </label>

          <TelephoneInput
            name="telephone"
            value={fields.telephone}
            updateField={(name, value) => updateFields(name, value)}
          />

          <EmailInput
            name="email"
            value={fields.email}
            setValue={(name, value) => updateFields(name, value)}
          />

          <Radio
            description="Would you like us to send reports to your GP?"
            name="gp_details"
            value={fields.gp_details}
            fields={fields}
            updateField={(name, value) => updateFields(name, value)}
            options={['Yes', 'No']}
            required={true}
          />

          {
            <label style={fields.gp_details === 'Yes' ? {display: 'block'} : {display: 'none'}}>
              <hr />
              Your GP's Address: <br /><br />
              <AutoComplete
                placesKey="AIzaSyAkuPHNHz8Ki1KV6n6iI1-EFVIC3ZAm0QY"
                inputId="gpAddress"
                setAddress={(addressObject) => addressSelection('gp', addressObject)}
                required={fields.gp_details === 'Yes'}
              />
              <hr />
            </label>
          }

          <SelectInput
            name="method_of_payment"
            value={fields.method_of_payment}
            updateField={(name, value) => updateFields(name, value)}
            options={[
              'Self-funding',
              'aetna',
              'allianz',
              'aviva',
              'axa-ppp',
              'axa-ppp international',
              'bupa',
              'cigna',
              'cigna-international',
              'exeter-friendly',
              'healix',
              'simply-health',
              'vitality',
              'wpa'
            ]}
          />

          {
            fields.method_of_payment !== 'Self-funding' &&
            fields.method_of_payment && <>
              <TextInput
                name="membership"
                value={fields.membership || ""}
                setValue={(name, value) => updateFields(name, value)}
              />
              <TextInput
                name="authorisation"
                value={fields.authorisation || ""}
                setValue={(name, value) => updateFields(name, value)}
              />
            </>
          }
          <hr />
          <input type="submit" value="Next" />
        </form>

      </div>
    </div>
  );
}

export default Personal;
