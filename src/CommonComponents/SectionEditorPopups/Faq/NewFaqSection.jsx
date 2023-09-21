import React, { useEffect, useState } from 'react'
import styles from "./Faq.module.scss"
import FormTextArea from '../../../CommonComponents/Form/FormTextArea'
import { useSelector } from 'react-redux';
import ValidationFile from '@/Classes/ValidationFile';
import FormError from '@/CommonComponents/Form/FormError';


const NewFaqSection = ({ onLoadDataChange, editData, nameErr }) => {

    const user = useSelector((state) => state.user);

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleOnChange = (e, type) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        if (type === "question") {
            setQuestion(value);
        }
        else {
            setAnswer(value);
        }
    }

    useEffect(() => {
        onLoadDataChange({
            title: question,
            description: answer,
            business: user.user_business,
            industry: "Ecommerce"
        })
    }, [question, answer, user])

    useEffect(() => {
        if (editData) {
            setQuestion(editData?.title);
            setAnswer(editData?.description);
        }
    }, [editData])

    return (
        <div className={styles.addNewFaq_container}>
            <h2 className={styles.Header_txt}>Add new FAQ</h2>
            <div className={styles.Line} />
            <div className={styles.input_wrap}>
                <FormTextArea
                    rows={3}
                    type="text"
                    label={"Question"}
                    value={question}
                    labelPosition={"top"}
                    placeholder={"Write your question here"}
                    onChange={(e) => handleOnChange(e, "question")}
                />
            </div>
            <FormError
                show={nameErr && !question}
                error={"Please enter question."}
            />
            <FormTextArea
                rows={10}
                type="text"
                label={"Answer"}
                value={answer}
                labelPosition={"top"}
                placeholder={"Write the answer to your question here"}
                onChange={(e) => handleOnChange(e, "answer")}
            />

        </div>
    )
}

export default NewFaqSection