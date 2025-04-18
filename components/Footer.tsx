import Image from "next/image";        
        import React from 'react'
        
        const Footer = () => {
          return (
            <div className="mt-auto p-8 flex gap-[24px] flex-wrap items-center justify-center bg-neutral-100 dark:bg-neutral-900 dark:text-white">
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
                © 2025, Flunky Ventures, All Rights Reserved
                </a>
            </div>
          )
        }
        
        export default Footer