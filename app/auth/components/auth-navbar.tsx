import Link from 'next/link';
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg"
        width={24} height={24}
        viewBox="0 0 0.79 0.79"
        xmlSpace="preserve"
        style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            //   imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
        }}
        {...props}
    >
        <g>
            <path
                fill="#C40C2A"
                d="M0.43 0c-0.02,0 -0.13,0.04 -0.15,0.05 -0.05,0.02 -0.1,0.04 -0.14,0.05 -0.04,0.01 -0.06,0.03 -0.07,0.06 -0.02,0.01 -0.02,0.03 -0.02,0.05l-0.05 0.25c0,0.04 0,0.06 0.01,0.09 0.02,0.02 0.03,0.03 0.05,0.05l0.07 0.05c0.04,0.03 0.08,0.07 0.12,0.1l0.03 0.02c0.02,0.02 0.05,0.03 0.08,0.02 0.02,0 0.13,-0.04 0.15,-0.05 0.05,-0.02 0.1,-0.03 0.15,-0.05 0.03,-0.01 0.06,-0.03 0.07,-0.07 0.01,-0.01 0.01,-0.03 0.01,-0.04l0.05 -0.25c0,-0.04 0,-0.06 -0.01,-0.08 -0.01,-0.03 -0.03,-0.04 -0.05,-0.05 -0.02,-0.02 -0.04,-0.03 -0.06,-0.05l-0.06 -0.05c-0.01,-0.01 -0.01,-0.01 -0.02,-0.01l-0.04 -0.04c-0.03,-0.03 -0.06,-0.06 -0.12,-0.05z"
            />
            <path
                fill="#FEFEFE"
                d="M0.36 0.3c-0.01,0.01 -0.03,0.01 -0.06,0.01 -0.05,0.02 -0.08,0.05 -0.09,0.11 0,0.01 0,0.03 0,0.04 0.01,0.09 0.11,0.12 0.15,0.16 0.02,0.02 0.05,0.02 0.07,0.01 0.03,-0.02 0.04,-0.04 0.06,-0.05 0.05,-0.04 0.1,-0.08 0.1,-0.15 0,-0.09 -0.06,-0.12 -0.15,-0.13 0,0 -0.01,0 -0.01,0 0,0 0.01,-0.01 0.01,-0.01 0.02,-0.03 0.03,-0.06 0.04,-0.09 0,0 0.01,-0.03 0,-0.03 0,-0.01 -0.01,-0.01 -0.01,0 0,0 -0.01,0.02 -0.01,0.03 -0.01,0.03 -0.02,0.05 -0.04,0.08l-0.02 0.02 0 -0.03c0,-0.02 0,-0.05 0.01,-0.07 0,-0.03 0.01,-0.06 0.02,-0.08 0.01,-0.01 0.02,-0.02 0.01,-0.03 -0.01,-0.01 -0.03,0.02 -0.03,0.03 0,0.01 -0.01,0.02 -0.01,0.02 0,0.01 -0.01,0.02 -0.01,0.03 0,0.03 -0.01,0.05 -0.01,0.08l0 0.04c-0.01,-0.01 -0.03,-0.06 -0.04,-0.07 -0.01,-0.02 -0.01,-0.03 -0.02,-0.05 0,-0.01 0,-0.02 -0.01,-0.02 0,0 -0.01,0 -0.01,0 -0.01,0.01 0,0.01 0,0.02 0,0.01 0,0.01 0,0.02 0.01,0.01 0.01,0.02 0.02,0.04 0.01,0.02 0.02,0.04 0.03,0.06 0,0 0.01,0.01 0.01,0.01z"
            />
        </g>
    </svg>
);
export default function AuthNavbar() {
    return (
        <nav className="w-full bg-background">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <HomeIcon className="w-8 h-8" />
                    </div>
                    <span className="text-2xl font-bold">
                        <span className="text-foreground">CoachMe</span>
                        <span className="text-primary">Auth</span>
                    </span>
                </Link>

                {/* Register Button */}
                {/* <Link
                    href="/coachme/auth/register"
                    className="px-6 py-2 text-sm font-medium text-muted-foreground bg-background border-2 border-primary rounded-full hover:bg-muted/50 transition-colors"
                >
                    Register
                </Link> */}
            </div>
        </nav>
    );
}
