import React, { useState } from 'react'
import styled from 'styled-components'
import ValidationFile from '@/Classes/ValidationFile';
import FormInput from '../../CommonComponents/Form/FormInput'
import FormError from '../../CommonComponents/Form/FormError';



const FormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-bottom: 70px;
    overflow-y: auto;
    @media screen and (max-width:767px ){
        grid-template-columns: 1fr;
        padding-bottom: 40px;
    }
    input{
        margin-bottom: 8px;
    }
    input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const Button = styled.button`
border-radius: 6px;
background: rgba(55, 88, 249, 0.30);
color: #FFF;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
height: 46px;
width: 100%;
border: none;
`
const BottonFooter = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
padding: 20px;
background-color: #fff;
.buttonActive{
border-radius: 6px;
background: #3758F9;
}
`
const FormPayment = ({ addressTab, setAddressTabData }) => {

    const HandleCard = () => {
        const valid = checkValidation()
        if (valid) {
            setAddressTabData({
                "billing_address": {
                    "firstname": firstnName,
                    "lastname": lastnName,
                    "street": addLine1nName,
                    "street2": addLine2Name,
                    "city": cityName,
                    "state": stateName,
                    "postalcode": zipCodeName,
                    "country": countryName
                },
            })
            addressTab(false)
        } else {
            setFirstNameError(true)
            setlastNameError(true)
            setaddLine1NameError(true)
            setcityNameError(true)
            setstateameError(true)
            setzipCodeameError(true)
            setcountryameError(true)
        }
    }
    const [firstnName, setFirstName] = useState("")
    const [firstnNameError, setFirstNameError] = useState(false)

    const [lastnName, setlastName] = useState("")
    const [lastnNameError, setlastNameError] = useState(false)

    const [addLine1nName, setaddLine1Name] = useState("")
    const [addLine1nNameError, setaddLine1NameError] = useState(false)

    const [addLine2Name, setaddLine2ame] = useState("")
    const [cityName, setcityName] = useState("")
    const [cityNameError, setcityNameError] = useState(false)

    const [stateName, setstateame] = useState("")
    const [stateNameError, setstateameError] = useState("")

    const [zipCodeName, setzipCodeame] = useState("")
    const [zipCodeNameError, setzipCodeameError] = useState("")

    const [countryName, setcountryame] = useState("")
    const [countryNameError, setcountryameError] = useState("")

    function checkValidation() {
        if (ValidationFile.isNotEmpty(firstnName) && ValidationFile.isNotEmpty(lastnName) && ValidationFile.isNotEmpty(addLine1nName) && ValidationFile.isNotEmpty(cityName) && ValidationFile.isNotEmpty(stateName) && ValidationFile.isNotEmpty(zipCodeName) && ValidationFile.isNotEmpty(countryName)) {
            return true
        } else {
            return false
        }
    }
    function handleOnChange(type, value) {
        switch (type) {
            case "FN":
                setFirstName(value)
                setFirstNameError(false)
                break;
            case "LN":
                setlastName(value)
                setlastNameError(false)
                break;
            case "AD1":
                setaddLine1Name(value)
                setaddLine1NameError(false)
                break;
            case "CI":
                setcityName(value)
                setcityNameError(false)
                break;
            case "ST":
                setstateame(value)
                setstateameError(false)
                break;
            case "ZIP":
                setzipCodeame(value)
                setzipCodeameError(false)
                break;
            case "COUNTRY":
                setcountryame(value)
                setcountryameError(false)
                break;
        }
    }
    return (
        <>
            <FormContainer>
                <div>
                    <FormInput
                        type={"text"}
                        placeholder={"eg. JOHN"}
                        label={"FIrst Name"}
                        labelPosition={"top"}
                        name={"input1"}
                        value={firstnName}
                        onChange={(e) => {
                            handleOnChange("FN", e.target.value);
                        }}
                    />
                    <FormError error="First Name Can't be Empty" show={firstnNameError && !firstnName} />
                </div>
                <div>
                    <FormInput
                        type={"text"}
                        placeholder={"eg. Doe"}
                        label={"Last Name"}
                        labelPosition={"top"}
                        name={"input2"}
                        value={lastnName}
                        onChange={(e) => {
                            handleOnChange("LN", e.target.value);
                        }}
                    />
                    <FormError error="Last Name Can't be Empty" show={lastnNameError && !lastnName} />
                </div>
                <div>
                    <FormInput
                        type={"text"}
                        placeholder={"Enter your Street Address"}
                        label={"Address Line 1"}
                        labelPosition={"top"}
                        name={"input3"}
                        value={addLine1nName}
                        onChange={(e) => {
                            handleOnChange("AD1", e.target.value);
                        }}
                    />
                    <FormError error="Address Can't be Empty Can't be Empty" show={addLine1nNameError && !addLine1nName} />
                </div>
                <FormInput
                    type={"text"}
                    placeholder={"Optional"}
                    label={"Address Line 2"}
                    labelPosition={"top"}
                    name={"input4"}
                    value={addLine2Name}
                    onChange={(e) => {
                        setaddLine2ame(e.target.value);
                    }}

                />
                <div>
                    <FormInput
                        type={"text"}
                        placeholder={"Enter your City"}
                        label={"City"}
                        labelPosition={"top"}
                        name={"input5"}
                        value={cityName}
                        onChange={(e) => {
                            handleOnChange("CI", e.target.value);
                        }}
                    />
                    <FormError error="City Can't be Empty Can't be Empty" show={cityNameError && !cityName} />
                </div>
                <div>
                    <FormInput
                        type={"text"}
                        placeholder={"Enter your State"}
                        label={"State"}
                        labelPosition={"top"}
                        name={"input6"}
                        value={stateName}
                        onChange={(e) => {
                            handleOnChange("ST", e.target.value);
                        }}
                    />
                    <FormError error="State Can't be Empty Can't be Empty" show={stateNameError && !stateName} />
                </div>

                <div>
                    <FormInput
                        type={"number"}
                        placeholder={"Enter your Zipcode"}
                        label={"Zip Code"}
                        labelPosition={"top"}
                        name={"input7"}
                        value={zipCodeName}
                        onChange={(e) => {
                            handleOnChange("ZIP", e.target.value);
                        }}
                    />
                    <FormError error="ZipCode Can't be Empty Can't be Empty" show={zipCodeNameError && !zipCodeName} />
                </div>
                <div>
                    <FormInput
                        type={"text"}
                        placeholder={"Enter your Country"}
                        label={"Country"}
                        labelPosition={"top"}
                        name={"input8"}
                        value={countryName}
                        onChange={(e) => {
                            handleOnChange("COUNTRY", e.target.value);
                        }}
                    />
                    <FormError error="Country Can't be Empty Can't be Empty" show={countryNameError && !countryName} />
                </div>
            </FormContainer>
            <BottonFooter>
                <Button className={`buttonActive`} onClick={HandleCard}>Continue to Pay</Button>
            </BottonFooter>
        </>
    )
}

export default FormPayment