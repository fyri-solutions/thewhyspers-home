<<<<<<< HEAD
import { getTextAlign } from "@utils/helper";
import { SectionContainer } from "@components/Section";

export const ButtonGroup = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <SectionContainer className="btn-group">
            <div
                className={`btn-group--container ${className && className} ${
                    alignClass && alignClass
                }`}
            >
                {children}
            </div>
        </SectionContainer>
    );
};
=======
import { getTextAlign } from "@utils/helper";
import { SectionContainer } from "@components/Section";

export const ButtonGroup = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <SectionContainer className="btn-group">
            <div
                className={`btn-group--container ${className && className} ${
                    alignClass && alignClass
                }`}
            >
                {children}
            </div>
        </SectionContainer>
    );
};
>>>>>>> 4f286a490c31a472c67cf1490009d6b01016f100
