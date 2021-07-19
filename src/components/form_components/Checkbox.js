import style from './Checkbox.module.css'

const Checkbox = ({
    value,
    name,
    setValue,
    description, 
    id
}) => {
    return (
        <label className={style.checker}>
            { description && <p style={{color: 'var(--drama-pink)', width: '90%'}}>{description}</p> } 
            <input 
                type="checkbox"
                id={id ? id : ''}
                style={{width: '40px', margin: 'auto'}}
                checked={value || ""}
                onChange={(e) => setValue(name, !value)}
                required={name === 'oh_no_honey' ? false : true}
                />
        </label>
    )
}

export default Checkbox