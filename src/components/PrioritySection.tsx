import "../styles/Module.Section.css"

import { useEffect, useState } from 'react';
import Ticket from "./Ticket.tsx";

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

type arg = {
    priority: number;
};

const Section = ({ priority }: arg) => {

    const apiUrl = "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers";

    const [apiData, setapiData] = useState<ApiDataType>();

    async function fetchApiData() {

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setapiData(data)
            })
    }

    useEffect(() => {
        fetchApiData();
    }, [])


    return (
        <div>
            <header>
                <div>
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path></svg>

                    &nbsp;Priority&nbsp;

                    <span>{apiData?.tickets.filter(ticket => ticket.priority === priority).length}</span>
                </div>

                <div className="icons">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                    &nbsp;
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                </div>

            </header>


            <section>
                <div className="tickets">
                    {apiData ? apiData.tickets.map((data) => (

                        (data.priority === priority) ?
                            <Ticket key={data.id} {...data} /> : null
                    )) : null}
                </div>
            </section>
        </div>
    );
}

export default Section;