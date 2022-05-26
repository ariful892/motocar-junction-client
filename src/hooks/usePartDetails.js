import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading";

const usePartDetails = partId => {

    const [isLoading, setIsLoding] = useState(true);
    const [part, setPart] = useState({});

    useEffect(() => {
        fetch(`https://frozen-gorge-46569.herokuapp.com/part/${partId}`)
            .then(res => res.json())
            .then(data => {
                setPart(data);
                setIsLoding(false);
            })
    }, [partId]);

    if (isLoading) {
        return <Loading></Loading>
    }

    return [part, setPart];

}

export default usePartDetails;