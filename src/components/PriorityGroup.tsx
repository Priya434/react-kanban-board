import PrioritySection from "./PrioritySection.tsx"
import "../styles/Module.PriorityGroup.css"

const priorities = [0, 1, 2, 3, 4];

const PriorityGroup = () => {

    return (
        <div className="priority-group">
            {priorities.map(priority => (
                <PrioritySection priority={priority} />
            ))}
        </div>
    );
}

export default PriorityGroup;