import WhatsappIcon from '@/assets/WhatsappIcon'
import Link from 'next/link'
import React from 'react'

const WhatsApp = () => {
  return (
     <Link
          className="fixed bottom-4 right-4 flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white  shadow-lg p-2 rounded-full"
          href="https://wa.me/9746866962"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon/>
          Chat
        </Link>
  )
}

export default WhatsApp
