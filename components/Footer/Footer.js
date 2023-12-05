import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Home",
        items: [            
            {
                label: "Welcome",
                href: "#welcome"
            },
            {
                label: "Features",
                href: "#features"
            },
            {
                label: "Pricing",
                href: "#pricing"
            },
            {
                label: "FAQ",
                href: "#faq"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                label: "About",
                href: "https://fyrisolutions.com",
                target: "_blank"
            },
            {
                label: "Twitter / X",
                href: "https://twitter.com/fyrisolutions",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://instagram.com/fyrisolutions/",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://facebook.com/fyrisolutions",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--logo grid gap-8">
                                <Link href="/">
                                    <Image
                                        src="/whysper_logo_black.svg"
                                        alt="logo"
                                        className="h-10 w-auto"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                </Link>
                                {/* Get Template button; remove if not used */}
                                <ButtonGroup alignment="left">
                                    <a
                                        role="button"
                                        href="https://whysper.lemonsqueezy.com/checkout/buy/49d0d67b-7dec-4385-882b-066aaf73f6fa?embed=1"
                                        className="btn btn--secondary lemonsqueezy-button"
                                    >
                                        Join Now!
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year} Whysper. All rights reserved{" - "}
                        <span className="font-normal">
                            A template redesigned by{" "}
                            <Link
                                className="transition-colors duration-300 hover:underline"
                                href="https://gamedesignguru.com"
                                target="_blank"
                            >
                                The Guru.
                            </Link>
                        </span>
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
