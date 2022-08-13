import { useEffect, useState } from "react";

export const useLocal = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value,key]);
    
    return [value, setValue];
}