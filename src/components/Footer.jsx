import React from 'react';
const Footer = () => {


    const links = [
        [
            { label: "Company", key: "header-1" },
            { label: "About us", key: "item-1-1" },
            { label: "Blog", key: "item-1-2" },
            { label: "Contact us", key: "item-1-3" },
            { label: "Pricing", key: "item-1-4" },
            { label: "Testimonials", key: "item-1-5" },
        ],
        [
            { label: "Support", key: "header-2" },
            { label: "Help center", key: "item-2-1" },
            { label: "Terms of service", key: "item-2-2" },
            { label: "Legal", key: "item-2-3" },
            { label: "Privacy policy", key: "item-2-4" },
            { label: "Status", key: "item-2-5" },
        ],
    ];

    return (
        <div className="app  flex items-end justify-center font-poppins">
            <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-green-800 text-white w-full p-4 relative">
                <div className=" flex flex-col justify-center ">
                    <div className="footer-img flex items-center">

                        <span className="text-3xl mb-4 font-bold pl-2 text-white">
                            AGRIDIGITAL
                        </span>
                    </div>
                    <div className="infos text-gray-400 mb-4">
                        <span>Copyright © 2020 Nexcent ltd.</span>
                        <span>All rights reserved</span>
                    </div>

                </div>
                <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
                    { links.map((col, index) => {
                        return (
                            <ul className={ `col col-${index + 1}` } key={ `col-${index}` }>
                                { col.map((link, index) => {
                                    return (
                                        <li
                                            key={ `link-${col}-${index}` }
                                            className={ `text-gray-400 cursor-pointer ${link.key === "header-1" || link.key === "header-2"
                                                ? "text-2xl text-white"
                                                : ""
                                                }` }
                                        >
                                            { link.label }
                                        </li>
                                    );
                                }) }
                            </ul>
                        );
                    }) }
                </div>
                <div className="footer-form flex flex-col  ">
                    <label className="text-lg font-semibold text-white">
                        Stay up to date
                    </label>
                    <input
                        type="email"
                        placeholder="Subscribe to our email"
                        className="mt-2 w-full border-none rounded-lg py-3 px-6"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;