import "../styles/Module.Ticket.css"
import { TicketDetailsType } from "../App.tsx";

const users = [
    { id: "usr-1", name: "Anoop sharma", available: false }, { id: "usr-2", name: "Yogesh", available: true }, { id: "usr-3", name: "Shankar Kumar", available: true }, { id: "usr-4", name: "Ramesh", available: true }, { id: "usr-5", name: "Suresh", available: true }]

const Ticket = ({ id, title, tag, userId, priority }: TicketDetailsType) => {

    const priorityClass = `card-priority-${priority}`;
    const user = users.find(user => user.id === userId);
    const userName = user?.name.split(" ")
    const userNameIcon = userName?.map(name => name[0].toUpperCase()).join('')

    return (
        <div className="card">

            <div className="card-header">
                <p className="card-id">{id}</p>
                <p className="card-userId">{userNameIcon}</p>
            </div>

            <p className="card-title">{title}</p>

            <div className="card-footer">
                <p className={`${priorityClass} card-priority`}>{priority}</p>
                <p className="card-tag">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "gray" }}><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
                    &nbsp;
                    {tag[0]}</p>
            </div>

        </div>
    );
}

export default Ticket;