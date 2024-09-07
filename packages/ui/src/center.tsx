import React from "react";

export function Center({children} : 
    {
        children: React.ReactNode
    }
) : JSX.Element{

    return <div className="flex justify-center items-center h-full">
        {children}
    </div>
}