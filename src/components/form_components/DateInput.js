import style from './DateInput.module.css'

const DateInput = (props) => {
    //if name is comprised of multiple words separated by underscores, label formatted for reading
    const splits = props.name.split('_').join(' ');

    return (
        <label className={style.diContainer}>
            <div style={{textAlign: 'left', width: '100%'}}>{splits[0].toUpperCase() + splits.slice(1).toLowerCase()}: </div>
            <input 
                type="date" 
                className={style.diInput}
                name={props.name}
                value={props.value || ''}
                onChange={(e) => props.updateField(props.name, e.target.value)}
                required
                />
        </label>
    )
}

export default DateInput