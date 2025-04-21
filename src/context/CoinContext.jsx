import { createContext, useEffect, useState } from "react";

export const CoinContext=createContext()

const CoinContextProvider = (props)=>{
    const [allCoin, setAllCoin] = useState([])
    const [currency, setCurrency] = useState({
        name: "USD",
        symbol: "$"
    })
    const fetchAllCoin = async ()=>{
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-cg-demo-api-key': import.meta.env.VITE_CG_API_KEY
            }
        };

        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const maxRetries = 3;
        let retries = 0;
        
        while (retries < maxRetries) {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
                
                if (response.status === 429) {
                    // Rate limited, wait and retry
                    console.log('Rate limited, waiting before retry...');
                    await delay(2000); // Wait 2 seconds before retrying
                    retries++;
                    continue;
                }

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setAllCoin(data);
                break; // Success, exit the loop
            } catch (err) {
                console.error('Error fetching data:', err);
                if (retries === maxRetries - 1) {
                    // If this was the last retry, set some fallback data
                    setAllCoin([]);
                }
                retries++;
                await delay(2000); // Wait before retrying
            }
        }
    }
    useEffect(()=>{
        fetchAllCoin();
    },[currency])

    const contextValue={
        allCoin, currency, setCurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider