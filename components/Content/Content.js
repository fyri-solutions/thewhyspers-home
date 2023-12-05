<<<<<<< HEAD
import { getTextAlign } from "@utils/helper";

export const Content = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <div
            className={`content text-xl max-w-3xl text-black/60 ${
                className && className
            } ${alignClass && alignClass}`}
        >
            {children}
        </div>
    );
};
=======
import { getTextAlign } from "@utils/helper";

export const Content = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <div
            className={`content text-xl max-w-3xl text-black/60 ${
                className && className
            } ${alignClass && alignClass}`}
        >
            {children}
        </div>
    );
};
>>>>>>> 4f286a490c31a472c67cf1490009d6b01016f100
