// import './App.css'
import "./styles/Module.Home.css"
import Ticket from './components/Ticket.tsx'
import { useEffect, useState } from 'react';

export interface TicketDetailsType {
    id: string;
    title: string;
    tag: string[];
    userId: string;
    status: string;
    priority: number;
}

export interface UserDetailsType {
    id: string;
    name: string;
    available: boolean;
}

export interface ApiDataType {
    tickets: TicketDetailsType[];
    users: UserDetailsType[];
}

function Home() {

    const apiUrl = "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers";

    const [apiData, setapiData] = useState<ApiDataType>();

    async function fetchApiData() {
        // fetch(apiUrl)
        //   .then(response => response.json())
        //   .then(data => setapiData(data))
        //   .catch(error => console.error('Error:', error));

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Process data from the first API
                // console.log('Data from API:', data);
                setapiData(data)

                // Fetch data from the second API endpoint
                // return fetch(apiUrl2);
            })
    }

    useEffect(() => {
        fetchApiData();
    }, [])

    return (
        <div className="body">
            {apiData ? apiData.tickets.map((data) => (
                <Ticket key={data.id} {...data} />
            )) : null}
        </div>
    )
}

export default Home
