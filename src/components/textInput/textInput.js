import React from 'react';

const TextInput = (props) => {
    return (
        <label>
          {props.label}: {props.required ? <><div className="required-label">*required</div> <br /> </>: <></>}
          <input type="text" name={props.name} value={props.value || ''}  onChange={e => props.update(e.target.value)} placeholder={props.placeholder} />
          <br />
        </label>
    )
}

export default TextInput