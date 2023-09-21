import React, { forwardRef, useEffect, useState } from 'react';
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./Team.module.scss"
import TeamMember from './TeamMembers';
import AddNewMember from './NewTeamMember';
import { useDispatch, useSelector } from 'react-redux';
import { getFaculty, postFaculty, updateFaculty } from '@/store/actions/manageFaculty';
import ValidationUtils from '@/Classes/ValidationUtils';
import { updateManagePopupData } from '@/store/actions/managePopups';
import useTemplateData from '@/CustomHooks/useTemplateData';

const dataList = [
    {
        id: "1",
        Name: ["James Anderson"],
        url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        Desination: "Tech. Lead",
        Testimonial: "A technical lead is a professional is oversees a team of technical..."
    },
    {
        id: "2",
        Name: ["Samsar Singh"],
        url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        Desination: "UI/UX Designer",
        Testimonial: "A technical lead is a professional is oversees a team of technical..."
    },
    {
        id: "3",
        Name: ["Scarlet Johnson"],
        url: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        Desination: "Developer",
        Testimonial: "A technical lead is a professional is oversees a team of technical..."
    },
    {
        id: "4",
        Name: ["James Surtan"],
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        Desination: "Tech. Lead",
        Testimonial: "A technical lead is a professional is oversees a team of technical..."
    },
    {
        id: "5",
        Name: ["Jimmy Moe"],
        url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        Desination: "UI/UX Designer",
        Testimonial: "A technical lead is a professional is oversees a team of technical..."
    },
    {
        id: "6",
        Name: ["Orthopedics"],
        url: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        Desination: "Developer",
        Testimonial: "A technical lead is a professional is oversees a team of technical"
    }
]

// eslint-disable-next-line react/display-name
const TeamPopup = forwardRef(({ children }) => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [
        mainContainerId,
        mainContainerIndex,
        mainContainerData,
        subcontainerId,
        subcontainerIndex,
        subcontainerData,
        sectionId,
        sectionIndex,
        sectionData,
        gridId,
        gridIndex,
        gridData,
        selectedElementId,
        selectedElementIndex,
        selectedElementData,
        pageId,
    ] = useTemplateData();

    const [addTestimonial, setaddTestimonial] = useState(false);
    const [payloadData, setPayloadData] = useState({});
    const [editData, setEditData] = useState("");
    const [count, setCount] = useState([]);
    const [nameErr, setNameErr] = useState(false);

    const HandleTestimonial = () => {
        setaddTestimonial(false);
        setEditData("");
    }

    const ModalClosehandle = () => {
        children.onclose();
        setaddTestimonial(false);
    }

    const handleOnChange = (data) => {
        setPayloadData(data);
        setNameErr(false);
    }

    const handleSaveBtn = () => {
        if (ValidationUtils.isNotEmpty(payloadData?.fullname)) {
            dispatch(postFaculty("Ecommerce", [payloadData]));
            setaddTestimonial(false);
        }
        else {
            setNameErr(true);
        }

    }

    const handleUpdateBtn = () => {
        if (ValidationUtils.isNotEmpty(payloadData?.fullname)) {
            dispatch(updateFaculty(editData?._id, "Ecommerce", payloadData));
            setaddTestimonial(false);
            setEditData("");
        }
        else {
            setNameErr(true);
        }
    }

    const handleAddTeam = () => {
        dispatch(
            updateManagePopupData({
                body: { data: count },
                pageId: pageId,
                grid: gridData?._id,
                indexesData: {
                    mainContainerIndex: mainContainerIndex,
                    subcontainerIndex: subcontainerIndex,
                    sectionIndex: sectionIndex,
                    gridIndex: gridIndex,
                },
            })
        );
        ModalClosehandle();
    }

    const handleSelectedCount = (val) => {
        setCount(val);
    }

    useEffect(() => {
        dispatch(getFaculty(user.user_business, "Ecommerce"));
    }, [dispatch, user.user_business])

    return (
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.Team_modal}>
            <ModalHeader title="Select Team Members" />
            <ModalBody className={styles.Team_Body}>
                {!addTestimonial ?
                    <TeamMember dataList={dataList} setaddTestimonial={setaddTestimonial}
                        setEditData={setEditData} onLoadSelectedCount={(val) => handleSelectedCount(val)} /> :
                    <AddNewMember onLoadDataChange={(data) => handleOnChange(data)} editData={editData} nameErr={nameErr} />}
            </ModalBody>

            <ModalsFooter className={styles.Team_Foot_Wrap}>
                <div className={styles.Team_Foot}>
                    {!addTestimonial ?
                        <p>{count?.length} Selected</p>
                        : ""}
                    <div className={styles.button_group}>
                        {!addTestimonial ?
                            <button className={`button btn-o-silver btn-xs btn-oval`} onClick={ModalClosehandle}>Cancel</button> :
                            <button className={`button btn-o-silver btn-xs btn-oval`} onClick={() => HandleTestimonial()}>Go back</button>
                        }
                        {!addTestimonial ?
                            <button className={`button  btn-xs btn-oval ${count?.length ? "button-primary" : "button-gray"}`} disabled={!count?.length}
                                onClick={handleAddTeam}>Add Team Members</button> :
                            <>
                                {editData ?
                                    <button className={`button button-primary btn-xs btn-oval`} onClick={() => handleUpdateBtn()} >Update</button>
                                    :
                                    <button className={`button button-primary btn-xs btn-oval`} onClick={() => handleSaveBtn()} >Save</button>}
                            </>
                        }
                    </div>
                </div>
            </ModalsFooter>
        </Modals >
    )
})



export default TeamPopup;