<<<<<<< HEAD
import { SectionContainer } from "@components/Section";

export const CardGroup = ({ children, className = "" }) => {
    return (
        <SectionContainer className="card-group">
            <div className={`card-group--container ${className && className}`}>
                {children}
            </div>
        </SectionContainer>
    );
};
=======
import { SectionContainer } from "@components/Section";

export const CardGroup = ({ children, className = "" }) => {
    return (
        <SectionContainer className="card-group">
            <div className={`card-group--container ${className && className}`}>
                {children}
            </div>
        </SectionContainer>
    );
};
>>>>>>> 4f286a490c31a472c67cf1490009d6b01016f100
