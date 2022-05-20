import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

const useKeyPress = (keys: string[], callback: (input: any) => any, node = null) => {
    // implement the callback ref pattern
    const callbackRef = useRef(callback);
    useLayoutEffect(() => {
        callbackRef.current = callback;
    });

    // handle what happens on key press
    const handleKeyPress = useCallback(
        (event: any) => {
            // if user of hook doesn't pass array of keys to check, just accept everything bc they'll be filtering it at the useEffect lvl at component.
            if (keys.length === 0) {
                callbackRef.current(event);
            } // else, if keys specified, check if the typed key is part of the keys we want
            else if (keys.some((key: string) => event.key === key)) {
                callbackRef.current(event);
            }
        },
        [keys]
    );

    useEffect(() => {
        // target is either the provided node or the document
        const targetNode = node ?? document;
        // attach the event listener
        targetNode && targetNode.addEventListener("keydown", handleKeyPress);

        // remove the event listener
        return () => targetNode && targetNode.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress, node]);
};

export default useKeyPress;
