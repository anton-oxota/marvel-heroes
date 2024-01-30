import React from 'react'

import './MarvelBanner.scss'

function MarvelBanner() {
    return (
        <div className="marvel-banner">
            <div className="container">
                <div className="marvel-banner__wrapper">
                    <img className='marvel-banner__img' src="https://s3-alpha-sig.figma.com/img/1521/18f2/9bcf361088bafb1971f4b91b2dea4b6f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R4IqytYoBmist9~HrFJOE5a0uKUeTKtwaAJxVjoSFkfZfV39oSypnH8DJTl9jqK9ctH4TKJOuPeom0Jvf3TLVvEJhLBK~aYXyis3m-B4XDnVF4QeZ2dl9fSDHo9RSOehYMMu1FwwxqIZovPwN9oVycLVNwSoSnWekwvRCbVqxI1IbkTiMGWpvy6fHAIXmon~vgJ4bG6XXOFyGgNDnSoTV9TSMGSgSGkYtMcRnHq4yxS95uT4UAE7crH5ICRMtcVaHzWGWVyoYs2Fy8o9BV9HF222WgPln92u-zijin8sSq6I4StxjpYkIWqezm496a9-caD2Kv9nrxJLYSOd-t4ZgA__" alt="Mavel Banner" />
                    <div className="marvel-banner__text">New comics every week! <br /> Stay tuned!</div>
                    <img className='marvel-banner__logo-img' src="https://s3-alpha-sig.figma.com/img/890b/e48b/8130971a3b939fb561f01d386fc42078?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdmdO-qCO53bqDyJZlyGKmApp4mO42TjSMzKo6QeClJIJW-AxOZZwMAE8xyrtIfJ37xPnQlEWpUJdv9kHzrOxc9MJqqEPU-4zQnwubD~KhIiJRcjvAzh82M3rxP-8v6Kh1cDoZFk6iyKioxXL2xk2hEoDWluUhD7jG0Hp2T0NRj5AiefpyJsj~VFxGa1VMTAuflGf-bUa~fXtiBSMIrLxownHREquUAtlkdS9-SosRKMPKedmBS9NnjAPEAxidNRO2lcX-JcAV7bL7bCb1IaMXsh81b68p3xeKnWOCAzC15yi7MN306mBszBojbj6tfVXiJtt3HhyMau6xNqhIZ~Xg__" alt="Marvel Avengers Logo" />
                </div>
            </div>
        </div>
    )
}

export default MarvelBanner