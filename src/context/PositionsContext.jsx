import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosConfig";
import { useLocation } from "react-router-dom";

export const PositionContext = createContext([]);

export const PositionProvider = ({ children }) => {
    const [positions, setPositions] = useState([]);
    const [details, setDetails] = useState([]);
    const [errorMessage, setErrorMessage] = useState({});

    useEffect(() => {
        const getPositionsAPI = async () => {
            try {
                const { data } = await axiosClient('/positions');
                if (positions.length != data.length) {
                    setPositions(data);
                }
            } catch (error) {
                return error;
            }
        }
        getPositionsAPI();
    }, [positions])

    const deletePositionHeader = async (unit) => {
        try {
            const { data } = await axiosClient.delete(`/unit/${unit}`);
            if (Boolean(data?.error)) {
                setPositions(positions.filter(oPosition => oPosition.unit != unit));
            }
        } catch (error) {

        }
    };

    const createPositionHeader = async (unit) => {
        try {
            setPositions([]);
            const { data } = await axiosClient.get(`/unit/${unit}`);
            setPositions([...positions, data.data]);
        } catch (error) {
            return error?.response?.data;
        }
    }
    //DETAILS SECITION.
    const getDetailsUnit = (unit) => {
        useEffect(() => {
            const getDetailData = async () => {
                try {
                    const { data } = await axiosClient.get(`/unit/detail/${unit}`);
                    setDetails(data);
                } catch (error) {
                    return error;
                }
            }
            getDetailData()
        }, [details]);
        let detailSum = 0;
        details?.map(element => {
            detailSum += element?.cantidad;
        });
        return detailSum;
    }

    const createDetailsUnit = async (unit, hu, cantidad) => {
        try {
            const { data } = await axiosClient.post(`/unit/detail/${unit}`, { unit, hu, cantidad });
            if (!Boolean(data?.error)) {
                setDetails([...details, { unit, hu, cantidad }]);
                return;
            }
            return data;
        } catch (error) {
            return error
        }
    }

    const deleteDetailItem = async (hu) => {
        try {
            const { data } = await axiosClient.delete(`/unit/detail/${hu}`);
            console.log(data)
        } catch (error) {
            return { error: true };
        }
    }

    return (
        <PositionContext.Provider value={{ positions, createPositionHeader, deletePositionHeader, getDetailsUnit, details, createDetailsUnit, deleteDetailItem }}>
            {children}
        </PositionContext.Provider>
    )
}

