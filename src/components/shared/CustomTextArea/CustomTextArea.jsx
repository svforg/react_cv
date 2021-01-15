import React from 'react';
import css from "./CustomTextArea.module.scss";

const CustomTextAreaMemo = (
    {
        label,
        ...restProps
    }
) => {
    return <label className={css.label}>

        <span className={css.labelTitle}>{label}</span>

        <textarea className={css.inputField} {...restProps} />
    </label>
};

export const CustomTextArea = React.memo(CustomTextAreaMemo);