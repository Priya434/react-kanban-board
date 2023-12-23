interface Card {
    id: string;
    title: string;
    tag: string[];
    userId: string;
    status: string;
    priority: number;
}

const Card = ({ id, title, tag, userId, priority }: Card) => {
    return (
        <div>
            <p>{id}</p>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{priority}</p>
            <p>{tag[0]}</p>
        </div>
    );
}

export default Card;