import React from 'react';
import css from "./CustomButton.module.scss";

const CustomButtonMemo = (
    {
        inverse,
        ...restProps
    }
) => {

    const btnInverse = inverse ?  css.button_inverse : "";

    return (
        <button className={`${css.button} ${btnInverse}`} {...restProps} />
    );
};

export const CustomButton = React.memo(CustomButtonMemo);
