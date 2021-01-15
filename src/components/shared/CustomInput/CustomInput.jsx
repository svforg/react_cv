import React from 'react';
import css from "./CustomInput.module.scss";


export const CustomInput = (
    {
        labelTitle,
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps
    }
) => {

    const onChangeCallback = (e) => {
        onChange // если есть пропс onChange
        && onChange(e); // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter" // если нажата кнопка Enter
        && onEnter // и есть пропс onEnter
        && onEnter(e.currentTarget.value); // то вызвать его
    };
    const finalSpanClassName = `${css.error} ${spanClassName ? spanClassName : ""}`;
    const finalInputClassName = error ? `${css.inputField_invalid} ${css.inputField}` : css.inputField;

    return (
        <label className={css.label}>
            <span className={css.labelTitle}>
                {labelTitle}
            </span>
            <input
                type={type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error && <label className={finalSpanClassName}>{error}</label>}
        </label>
    );
};


