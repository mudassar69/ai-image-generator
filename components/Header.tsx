import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header className="flex p-5 sticky top-0 bg-white z-50 shadow-md">
            <div className="flex space-x-2 items-center">
            <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />
                <div>
                    <h1 className="font-bold">
                        AI Image Generator
                    </h1>
                    <h2 className="text-xs">
                        Powered by Dalle 2 and Chat GPT
                    </h2>
                </div>
            </div>
        </header>
    )
}

export default Header
