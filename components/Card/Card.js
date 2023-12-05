<<<<<<< HEAD
import { SectionContainer } from "@components/Section";
import Link from "next/link";
import clsx from "clsx";

const CardType = {
    default: "",
    bordered: "border-[1px] border-neutral-200 text-primary-500 p-8"
};

export const Card = ({
    link = "",
    className = "",
    children,
    target = "",
    type = "default"
}) => {
    const Element = link ? Link : "div";
    const href =
        typeof link === "string" ? link : link?.href != null ? link.href : "";
    return (
        <SectionContainer
            className={clsx(
                "card rounded-lg overflow-hidden",
                {
                    [CardType.default]: type === "default",
                    [CardType.bordered]: type === "bordered"
                },
                className
            )}
        >
            <Element
                href={href}
                target={link ? target : "_self"}
                className="card--container"
            >
                {children}
            </Element>
        </SectionContainer>
    );
};
=======
import { SectionContainer } from "@components/Section";
import Link from "next/link";
import clsx from "clsx";

const CardType = {
    default: "",
    bordered: "border-[1px] border-neutral-200 text-primary-500 p-8"
};

export const Card = ({
    link = "",
    className = "",
    children,
    target = "",
    type = "default"
}) => {
    const Element = link ? Link : "div";
    const href =
        typeof link === "string" ? link : link?.href != null ? link.href : "";
    return (
        <SectionContainer
            className={clsx(
                "card rounded-lg overflow-hidden",
                {
                    [CardType.default]: type === "default",
                    [CardType.bordered]: type === "bordered"
                },
                className
            )}
        >
            <Element
                href={href}
                target={link ? target : "_self"}
                className="card--container"
            >
                {children}
            </Element>
        </SectionContainer>
    );
};
>>>>>>> 4f286a490c31a472c67cf1490009d6b01016f100
