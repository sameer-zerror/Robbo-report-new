import Link from 'next/link';
import React from 'react';

export const BoxBorderBtn = ({ index, name, url }) => {
    return (
        <div className="border_btn">
            <Link href={url}>
                <button key={index} className="border_btn_button">
                    {name}
                </button>
            </Link>
        </div>
    );
};
