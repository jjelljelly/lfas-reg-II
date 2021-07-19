const NumberInput = (props) => {

    //if name is comprised of multiple words separated by underscores, label formatted for reading
    const splits = props.name.split('_').join(' ');

    return (
        <div>
            <label>
                {splits[0].toUpperCase() + splits.slice(1).toLowerCase()}:
                <input
                    id={props.id || ''}
                    type="number"
                    name={props.name} 
                    value={props.value || ''}
                    onChange={(e) => props.updateField(props.name, e.target.value)}
                    required
                    />
            </label>
        </div>
    )
}

export default NumberInput