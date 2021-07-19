const TelephoneInput = (props) => {

    //if name is comprised of multiple words separated by underscores, label formatted for reading
    const splits = props.name.split('_').join(' ');

    //encircle with red if invalid
    const border = props.isValid && props.isValid.indexOf(props.name) >= 0 ? '1px solid red' : '1px solid black';

    return (
        <label style={{width: '100%', position: 'relative'}}>
            <div style={{textAlign: 'left', width: '100%'}}>{splits[0].toUpperCase() + splits.slice(1).toLowerCase()}: </div>
            <p
                className="tiDescription"
                >{props.description}</p>
            <input
                id={props.id || ''}
                type="tel"
                style={{
                    width: '100%',
                    padding: '10px 5px',
                    marginBottom: '30px',
                    borderRadius: '0',
                    outline: 'none',
                    boxSizing: 'border-box',
                    border: border
                }}
                name={props.name} 
                value={props.value || ''}
                onChange={(e) => props.updateField(props.name, e.target.value)}
                required
                />
        </label>
    )
}

export default TelephoneInput