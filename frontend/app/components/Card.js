"use client";
import { useState } from "react";

export default function Card(props) {
    const [status, setStatus] = useState(false);

    return (
            <div className="flex w-full gap-2">
                <div onClick={() => setStatus(!status)} className="bg-[#313244] h-12 flex-col duration-300 cursor-pointer  hover:-translate-y-1 relative flex items-center justify-center max-w-220 p-4 rounded-md w-full text-center font-medium">
                    {props.task}
                    <span className="absolute right-4">
                        &#8744;
                    </span>
                </div>
                <button className="cursor-pointer flex items-center justify-center size-12 bg-[#313244] rounded-sm">
                    ✏️
                </button>
                <button className="cursor-pointer flex items-center justify-center size-12 bg-[#313244] rounded-sm">
                    🗑️
                </button>
            </div>
    );
}