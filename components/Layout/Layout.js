<<<<<<< HEAD
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

export const Layout = ({ children, className = "" }) => {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
            <Header />
            {children}
            <Footer />
        </main>
    );
};
=======
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

export const Layout = ({ children, className = "" }) => {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
            <Header />
            {children}
            <Footer />
        </main>
    );
};
>>>>>>> 4f286a490c31a472c67cf1490009d6b01016f100
