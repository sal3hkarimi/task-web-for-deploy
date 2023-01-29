import React from 'react'
import { useState } from 'react'

type BgModalsProps = {
    children: React.ReactNode
    display: string
}

export default function BgModals(props: BgModalsProps) {
    const [display, setDisplay] = useState(props.display)

    return (
        <div className='bg-modal'
            onClick={() => setDisplay('none')}
            style={{ display: display }}
        >{props.children}</div>
    )
}
