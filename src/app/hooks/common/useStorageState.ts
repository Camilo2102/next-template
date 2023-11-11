import { useState } from "react";
import useStorage from "./useStorage";


export const useStorageState = (key: string) => {
    const {getValue, deleteValue, saveValue} = useStorage();
    const [value, setValue] = useState<any | undefined>(getValue(key) !== null ? JSON.parse(getValue(key) as string) : undefined);

    const setValueAndStore = (t: any) => {
        setValue(t);
        if(t === undefined) {
            return deleteValue(key);
        }

        saveValue(key, JSON.stringify(t));
    }


    return [value, setValueAndStore];
}