import style from './Radio.module.css'

const Radio = (props) => {
    return (
        <div className={style.radioContainer}>
            <label style={{fontSize: '14px', textAlign: 'left', margin: 'auto'}}>
                <div className={style.radioLabel}>{props.label}</div>
                {
                    props.description && <div className={style.radioDescription}>{props.description}</div>
                }
            <div className={style.checkboxContainer}>
                {
                    props.options.map((option, i) => {
                        return <div 
                            key={'abdoment_questions' + i}
                            className={style.radioInput}
                            >
                            <input
                                type="radio"
                                name={props.name}
                                value={props.value}
                                style={{width: '40px'}}
                                onChange={e => props.updateField(props.name, option)}
                                checked={props.fields[props.name] === option ? true : false}
                                required={props.required}
                            />
                            <div className={style.checkboxAlignment}>{option}</div>
                        </div>
                    })
                }
            </div>
            </label>
        </div>
    )
}

export default Radio