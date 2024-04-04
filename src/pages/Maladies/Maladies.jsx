import React from 'react'
import { Card } from "../../components/Card";

const Maladie = () => {
    return (
        <div className="">
            <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
                <Card title="Total get free campaigns" number="17" color="#83E8E1" />
                <Card title="Needs approval" number="4" color="#83E8E1" />
                <Card title="Disputes" number="5" color="#FFBA79" />
                <Card title="Messages" number="8" color="#FFB2D3" />
            </div>
            <div className='pt-12 grid gap-4 md:gap-8 grid-cols-1'>
                <div className="lg:w-full  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">Maladie</div>
            </div>
        </div>
    )
}

export default Maladie
