import { div } from "framer-motion/client";
import Image from "next/image";        
        import React from 'react'
        
        const Footer = () => {
          return (
                <div className="mt-auto p-8 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href=""
                rel="noopener noreferrer"
                >
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                © 2025, Flunky Ventures, all rights reserved
                </a>
            </div>
          )
        }
        
        export default Footer