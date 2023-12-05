import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';
import { Icon } from "@iconify/react";

const names = [
    {
        heading: "Basic",
        price: 27.99,
        user: 'per user, per year',
        button: "Start my 15-day Trial!",
        buttonlink: "https://whysper.lemonsqueezy.com/checkout/buy/b15ac3ff-8ba7-459d-814e-c4dec3b3a0eb?embed=1",
        profiles: '10 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "800+ Templated",
        view: "Calendar View",
        support: '24/7 Support',
        category: 'yearly'
    },
    {
        heading: "Premium",
        price: 95.99,
        user: 'per user, per year',
        button: "Start my 15-day Trial!",
        buttonlink: "https://whysper.lemonsqueezy.com/checkout/buy/d52400a2-13b0-4d77-9095-aeff17ff6bc8?embed=1",
        profiles: '20 Social Profiles',
        posts: '10 Scheduled Posts Per Profile',
        templates: "400+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'yearly'
    },
    {
        heading: "Enterprise",
        price: 459.99,
        user: 'per user, per year',
        button: "Start my 15-day Trial!",
        buttonlink: "https://whysper.lemonsqueezy.com/checkout/buy/ff867f1f-8abb-409d-a773-79cc6304ea95?embed=1",
        profiles: '50 Social Profiles',
        posts: '30 Scheduled Posts Per Profile',
        templates: "600+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'yearly'
    },
    {
        heading: "Basic",
        price: 2.99,
        user: 'per user, per month',
        button: "Start my 15-day Trial!",
        buttonlink: "https://whysper.lemonsqueezy.com/checkout/buy/1c9d6857-71f5-4c79-a6ec-b16c4d40c605?embed=1",
        profiles: '10 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "800+ Templated",
        view: "Calendar View",
        support: '24/7 Support',
        category: 'monthly'
    },
    {
        heading: "Premium",
        price: 8.99,
        user: 'per user, per month',
        button: "Start my 15-day Trial!",
        buttonlink: "https://whysper.lemonsqueezy.com/checkout/buy/ffd3e465-4680-4615-9467-daa66d2e3866?embed=1",
        profiles: '20 Social Profiles',
        posts: '10 Scheduled Posts Per Profile',
        templates: "400+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'monthly'
    },
    {
        heading: "Enterprise",
        price: 49.99,
        user: 'per user, per month',
        button: "Start my 15-day Trial!",
        buttonlink: "https://whysper.lemonsqueezy.com/checkout/buy/bdb50a04-4946-43ea-bb67-da40d16569b2?embed=1",
        profiles: '50 Social Profiles',
        posts: '30 Scheduled Posts Per Profile',
        templates: "600+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'monthly'
    },


]

export const Pricing = () => {
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Manage All Your Social Media <br /> Profiles From One Place.</h3>


                <div className='mt-6 relative'>   
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>Billed Monthly</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`bg-black relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>Billed Yearly</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-5 gap-14 pricing'>
                    {filteredData.map((items, i) => (
                        <div className='pricingTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>${items.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <a  role="button" 
                                href={items.buttonlink} 
                                className="btn btn--secondary bg-sky-400 lemonsqueezy-button ml-4 text-sm font-bold border-2 border-blue rounded-full mb-6"
                            >
                                {items.button}
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            {/*<h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>*/}
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
