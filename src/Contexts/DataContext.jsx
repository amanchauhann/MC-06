import { createContext, useContext, useEffect, useReducer } from "react";
import { cuisineData, restaurantsData } from "../Data/Data";

const DataContext = createContext()

const data_reducer = (state, { type, payload }) => {
    switch (type) {
        case ("INITIAL"):
            return {
                ...state,
                restaurants: payload
            }
        case ("CUISINES"):
            return {
                ...state,
                cuisines: payload
            }
        case ("SELECT_CUISINE"):
            return {
                ...state,
                selected_cuisine: payload
            }
    }
}

export const DataProvider = ({ children }) => {
    const initial_data = {
        restaurants: [],
        cuisines: [],
        selected_cuisine: null
    }

    const [restaurant_data, dispatch_restaurant] = useReducer(data_reducer, initial_data)

    useEffect(() => {
        dispatch_restaurant({ type: "INITIAL", payload: restaurantsData })
        dispatch_restaurant({ type: "CUISINES", payload: cuisineData })
    }, [])
    return (
        <DataContext.Provider value={{ restaurant_data, dispatch_restaurant }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)