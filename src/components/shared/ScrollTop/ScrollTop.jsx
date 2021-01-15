import React, {useState, useRef, useEffect} from 'react';
import css from "./ScrollTop.module.scss";


export function ScrollTop() {

    const [value, setValue] = useState("0");

    useEffect(() => {
        window.addEventListener("scroll", throttle(scrollToTopShow, 100));
        return () => window.removeEventListener("scroll", throttle(scrollToTopShow, 100));
    }, []);

    const scrollToTopShow = () => {
        setValue("1");
    };

    const scrollToTopTrigger = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    function throttle(callback, limit) {
        let waiting = false;                      // Initially, we're not waiting
        return function () {                      // We return a throttled function
            if (!waiting) {
                callback.apply(this, arguments);  // Execute users function
                waiting = true;                   // Prevent future invocations
                setTimeout((e) => {          // After a period of time
                    waiting = false;              // And allow future invocations
                }, limit);
            }
        }
    }

    return <div className={css.ScrollTop} style={{opacity: `${value}`}}>
        <button className={css.ScrollTop__btn} onClick={scrollToTopTrigger}>
            &uarr;
        </button>
    </div>
}
