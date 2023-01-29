import React, { useState } from 'react'
import { CloseSquareIcon, TickSquareIcon } from '../assets/Icons'
import { faker } from '@faker-js/faker';

export default function ModalSelectRahbar() {

    const listRahbar = [
        { name: 'سارا احمدی', status: false },
        { name: 'محمد کریمی', status: false },
        { name: 'امیرحسین قیاسی', status: true },
        { name: 'علی کریمی', status: false },
        { name: 'زینب قاسمی', status: false },
        { name: 'زینب قاسمی', status: false },
        { name: 'زینب قاسمی', status: false },
        { name: 'زینب قاسمی', status: false },
        { name: 'زینب قاسمی', status: false },
    ]
    const [rahbars, setRahbars] = useState(listRahbar)

    const handleStatusRahbar = (rahbar) => {
        // setRahbars(rahbars.map(rhb => {
        //     if (rhb === rahbar) {
        //         rhb.status = !rahbar.status
        //     }
        // }))
    }

    return (
        <div className="parent">
            <div className="modal-select-rahbar">
                <div className="head">
                    <p>راهبر مورد نظر خود را انتخاب کنید</p>
                    <div className="box-icon">
                        <CloseSquareIcon />
                    </div>
                </div>
                <div className="body">
                    {rahbars.map((rahbar) => (<div key={rahbar.name} className="rahbar">
                        <div className="box-icon" onClick={() => handleStatusRahbar(rahbar)}>
                            <TickSquareIcon active={rahbar.status} />
                        </div>
                        <div className="box-img">
                            <img src={faker.image.avatar()} alt="" />
                        </div>
                        {rahbar.name}
                    </div>))}
                </div>
                <div className="footer">
                    <button>تایید</button>
                </div>
            </div>
        </div>
    )
}
