import React, { useReducer } from "react";

const ReducerPractice = () => {

    const reducerFunction = (state, action) => {

        switch (action.type) {
            case "INCREMENT":
                { return { count: state.count + 1, showText: state.showText } }

            case "SHOWTEXT":

                { return { count: state.count, showText: !state.showText } }


            default: return state;
        }

    };

    const [state, dispatch] = useReducer(reducerFunction, { count: 0, showText: true, powerValue: 2 })


    return (
        <>
            <h1> {state.count}</h1>
            {state.showText && <p> Enable Display</p>}
            <button
                type="button"
                class="inline-block rounded bg-blue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "SHOWTEXT" });
                }}
            >
                Click Here
            </button >

        </>
    );

}

export default ReducerPractice;