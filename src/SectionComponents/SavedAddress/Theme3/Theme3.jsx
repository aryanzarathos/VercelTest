import React, { useContext } from 'react'
import styled from 'styled-components';
import { useState } from "react";
import list from '../SavedData.json'
import Link from 'next/link';
import SavedAddressTheme2 from '../Theme2/Theme2';
import { Add, AddText, Address, AddressContainer, AddressItem, AddressLabel, BtnEdit, BtnEditRemove,
     BtnRemove, Default, Detail, HeaderItem, HeaderText, InputRadio, Main, Mobile, Name, NewAddressContainer,
      NewAddressInnerItem, SavedAddressThemeThirdContainer } from './SavedAddressTheme3.style';
import { MyProfile } from '../../MyProfile/Theme1/Theme1';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import FormInput from '../../../SectionCommon/Form/FormInput';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';


const SavedAddressTheme3 = () => {
    const data = useContext(MyProfile);
    const [activeTab, setActiveTab] = useState(false);
    const [activeTab1, setActiveTab1] = useState(false);


    const handleActive = (index) => {
        setActiveTab(!activeTab)
        setActiveTab1(index)

    }
    let styles = {
        SavedAddressThemeThirdContainer: data?.custom_section_editable[114]?.style,
        SavedAddressThemeThirdMain: data?.custom_section_editable[115]?.style,
        SavedAddressThemeThirdHeaderItem: data?.custom_section_editable[116]?.style,
        ThemeThirdHeaderText: data?.custom_section_editable[117]?.style,
        ThemeThirdAddressItem: data?.custom_section_editable[118]?.style,
        AddressLabel: data?.custom_section_editable[119]?.style,
        ThemeThirdAddressContainer: data?.custom_section_editable[120]?.style,
        ThemeThirdRadio: data?.custom_section_editable[121]?.style,
        ThemeThirdDefault: data?.custom_section_editable[122]?.style,
        ThemeThirdDetail: data?.custom_section_editable[123]?.style,
        ThemeThirdDetailName: data?.custom_section_editable[124]?.style,
        ThemeThirdDetailAddress: data?.custom_section_editable[125]?.style,
        ThemeThirdDetailNumber: data?.custom_section_editable[126]?.style,
        BtnEditRemove: data?.custom_section_editable[127]?.style,
        BtnEditRemoveEdit: data?.custom_section_editable[128]?.style,
        BtnEditRemoveRemove: data?.custom_section_editable[129]?.style,
        ThemeThirdNewAddressContainer: data?.custom_section_editable[130]?.style,
        ThemeThirdNewAddressInnerItem: data?.custom_section_editable[131]?.style,
        ThemeThirdNewAddressAdd: data?.custom_section_editable[132]?.style,
        ThemeThirdNewAddressAddText: data?.custom_section_editable[133]?.style,
        ThemeThirdAddressContainerActive: data?.custom_section_editable[134]?.style,
    }
    return (
        <SavedAddressThemeThirdContainer item={styles?.SavedAddressThemeThirdContainer}>

            {activeTab ? <SavedAddressTheme2 /> :
                <Main item={styles?.SavedAddressThemeThirdMain}>
                    <HeaderItem item={styles?.SavedAddressThemeThirdHeaderItem}>
                        <Text tagType={data?.custom_section_editable[117]?.tagType}
                            style={styles?.ThemeThirdHeaderText}
                            text={data?.custom_section_editable[117]?.text} />
                        {/* Change Delivery Address</Text> */}

                    </HeaderItem>

                    <AddressItem item={styles?.ThemeThirdAddressItem}>
                        {list.map((e, index) => {
                            return (
                                <AddressLabel htmlFor={e.id} key={index} item={styles?.AddressLabel} >
                                    <AddressContainer
                                        className={`${"AdressContainer"} ${activeTab1 === e.id && ('active')}`}
                                        item={styles?.ThemeThirdAddressContainer}
                                        itemActive={styles?.ThemeThirdAddressContainerActive}
                                        key={e.id} onClick={() => handleActive(e.id)}>
                                        {/* <InputRadio type="radio" name='radio' id={e.id} /> */}
                
                                        <InputRadio type='radio' item={styles?.ThemeThirdRadio} id={e.id} />
                                        {
                                            e?.default === true && <Text tagType={data?.custom_section_editable[122]?.tagType}
                                                style={styles?.ThemeThirdDefault}
                                                text={data?.custom_section_editable[122]?.text} />
                                        }
                                        <Detail item={styles?.ThemeThirdDetail}>
                                            <Text tagType={data?.custom_section_editable[124]?.tagType} style={styles?.ThemeThirdDetailName}
                                                text={e?.name} />
                                            <Text tagType={data?.custom_section_editable[125]?.tagType} style={styles?.ThemeThirdDetailAddress}
                                                text={e?.address} />

                                            <Text tagType={data?.custom_section_editable[126]?.tagType} style={styles?.ThemeThirdDetailNumber}
                                                text={`Mobile: ${e?.mobileNo}`} />
                                            <BtnEditRemove item={styles?.BtnEditRemove}>
                                                <Button style={styles?.BtnEditRemoveEdit}
                                                    text={data?.custom_section_editable[128]?.text} />
                                                <Button style={styles?.BtnEditRemoveRemove}
                                                    text={data?.custom_section_editable[129]?.text} />
                                                {/* <BtnEdit>EDIT</BtnEdit> */}
                                                {/* <BtnRemove>REMOVE</BtnRemove>  */}
                                            </BtnEditRemove>
                                        </Detail>
                                    </AddressContainer>
                                </AddressLabel>

                            )
                        })}
                        <NewAddressContainer item={styles?.ThemeThirdNewAddressContainer}>

                            <NewAddressInnerItem onClick={handleActive} item={styles?.ThemeThirdNewAddressInnerItem}>
                                <Add item={styles?.ThemeThirdNewAddressAdd}>+</Add>
                                <Text tagType={data?.custom_section_editable[133]?.tagType}
                                    style={styles?.ThemeThirdNewAddressAddText}
                                    text={data?.custom_section_editable[133]?.text} />
                            </NewAddressInnerItem>

                        </NewAddressContainer>
                    </AddressItem>
                </Main>}
        </SavedAddressThemeThirdContainer>
    )
}

export default SavedAddressTheme3;