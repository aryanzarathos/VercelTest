import { useSelector, useDispatch } from "react-redux";
import { findState } from "../../store/actions/countries";
import { string, func, bool } from "prop-types";
import { useEffect, useState } from "react";

function CountrySelect({ name, value, id, onSelect, onEvent, autoevent, label, className, ...props }) {
    const countryList = useSelector(state => state.countries.list);
    const dispatch = useDispatch()
    const [fired, setfired] = useState(false);
    const [selected, setselected] = useState("")
    const handleCountryChange = e => {
        setselected(e.target.value)
        onSelect(e.target.value)
        onEvent(e)
        dispatch(findState(e.target.value))
    }

    useEffect(() => {
        if (autoevent && !fired) {
            setselected(value)
            setfired(value)
            value && dispatch(findState(value))
        }

    }, [autoevent, dispatch, fired, selected, value])

    const [focusLabel, setFocusLabel] = useState(false)


    return <>

        <div className="cstmSelectWrap">
            <div className={`form-group ${(focusLabel || value) && "caretup"}`}>
                <select
                    className={`select-control ${className}`}
                    value={selected}
                    onChange={handleCountryChange}
                    name={name}
                    onBlur={() => setFocusLabel(false)}
                    id={id}
                    onFocus={() => setFocusLabel(true)}
                    {...props}
                >
                    <option value="">* Select Country</option>
                    {countryList.map(country => <option key={country.country} value={country.country}>{country.country}</option>)}
                </select>
                <label className={`animLabel ${(label && value) || (focusLabel) ? "show" : "hide"}`} htmlFor={id}>
                    {label}
                </label>
            </div>
        </div>
    </>
}

CountrySelect.defaultProps = {
    autoevent: false,
    name: "country",
    value: "",
    onSelect: () => { },
    onEvent: () => { }
}

CountrySelect.propTypes = {
    autoevent: bool,
    name: string.isRequired,
    value: string,
    onSelect: func.isRequired,
    onEvent: func
}

export default CountrySelect