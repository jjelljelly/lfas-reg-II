import { useState } from 'react'
import style from './SelectInput.module.css'

const SelectInput = (props) => {
    //open select
    const [open, setOpen] = useState(false);

    //if name is comprised of multiple words separated by underscores, label formatted for reading
    const splits = props.name.split('_').join(' ');

    const select = (value) => {
        setOpen(!open)
        props.updateField(props.name, value)
    }

    const border = props.isValid && props.isValid.indexOf(props.name) >= 0 ? '1px solid red' : '';

    return (
        <>
            <label className={style.tiLabel} style={{ position: 'relative', textAlign: 'left' }}>
                <div style={{ textAlign: 'left', width: '100%' }}>{splits[0].toUpperCase() + splits.slice(1).toLowerCase()}: </div>
                {props.description && <p style={{ width: '100%', textAlign: 'left' }}>{props.description}</p>}
                <div id={props.name} className={style.tiInput} onClick={() => setOpen(!open)} style={open ? { marginBottom: 0, border: border } : {border: border}}>
                    <div> {props.value || '- Select -'} </div>
                    <div className={style.toggle}>{open ? <div className="fade-in">&#10005;</div> : <>&#8681;</>}</div>
                </div>
                {open &&
                    <div style={{ width: '100%', border: '1px dashed black', borderTop: 'none', marginBottom: '20px' }}>
                        {
                            props.options.map((option, i) => {
                                return <div
                                    key={'option' + i}
                                    className={style.drop + " fade-in"}
                                    onClick={() => select(option)}
                                >
                                    {option}
                                </div>
                            })
                        }
                    </div>
                }
            </label>
        </>
    )
}

export default SelectInput