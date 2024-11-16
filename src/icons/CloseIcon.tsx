import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number; // خاصية للتحكم بحجم الأيقونة
}

const CloseIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={size}
            height={size}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
};

export default CloseIcon;
