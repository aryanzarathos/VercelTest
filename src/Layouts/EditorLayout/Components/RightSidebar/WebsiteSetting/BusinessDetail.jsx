import React from 'react'
import styled from 'styled-components';
import FormInput from '../../../../../CommonComponents/Form/FormInput';
import FormTextArea from '../../../../../CommonComponents/Form/FormTextArea';

const BusinessDetailContainer = styled.div`
    position:relative;
`
const ClearButton = styled.button`
    position:absolute;
    top: 4px;
    right: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1;
`
const FormFieldwrap = styled.div`
    padding-bottom:16px;
    .StylesFontLabel{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
    }
    .TextControl{
        height:129px;
    }
`

const BusinessDetail = () => {
    return (
        <BusinessDetailContainer>
            <ClearButton className={`text-3xs w-400 primary`}>Clear All</ClearButton>
            <div className={`styles.socialMediaWrapper`}>
                <FormFieldwrap className={``}>
                    <FormInput
                        label='Company name'
                        labelPosition='top'
                        placeholder="Enter Company Name"
                        name='Company name'
                        className="mt-10"
                        LabelClassName={`StylesFontLabel`}
                    />
                </FormFieldwrap>

                <FormFieldwrap className="">
                    <FormTextArea
                        label='Company Address'
                        labelPosition='top'
                        placeholder="Enter Company Address"
                        name='Company Address'
                        className="TextControl mt-10"
                        LabelClassName={`StylesFontLabel`}
                        TextareaBtmTxt="160"
                    />
                </FormFieldwrap>

                <FormFieldwrap className="">
                    <FormInput
                        label='Zip code'
                        labelPosition='top'
                        placeholder="Enter Zip code"
                        name='Zip code'
                        className="mt-10"
                        LabelClassName={`StylesFontLabel`}
                    />
                </FormFieldwrap>
                <FormFieldwrap className="">
                    <FormInput
                        label='City'
                        labelPosition='top'
                        placeholder="Enter City Name"
                        name='City'
                        className="mt-10"
                        LabelClassName={`StylesFontLabel`}
                    />
                </FormFieldwrap>

                <FormFieldwrap className="">
                    <FormInput
                        label='Country'
                        labelPosition='top'
                        placeholder="Enter Country Name"
                        name='Country'
                        className="mt-10"
                        LabelClassName={`StylesFontLabel`}
                    />
                </FormFieldwrap>
            </div>
        </BusinessDetailContainer>
    )
}

export default BusinessDetail