import React, { useEffect, useState } from 'react'
import '../styles/Navbar.scss'
import { Link } from 'react-router-dom';


const Navbar = () => {
    // const [dark, setDark] = useState(false);
    // const [className, setClassName] = useState('dark');

    // const handleSubmit = ()=>{
    //     setDark(!dark)
    //     if(dark){
    //         setClassName('navbar')
    //     }else setClassName('dark')
    // }
   
  return (
    <nav className='navbar' >
        <div className='logo'>
            <Link to='/' onClick='window.location.href=#top' ><h3>PK</h3></Link>
        </div>
        <div className='navbar-items'>
            <ul>
                <li><Link to='/' onClick='window.location.href=#top'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                {/* <li onClick={()=>handleSubmit()}>
                    { dark ?
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8ElEQVR4nO2dW4hWVRTHf86oXURlpvBuTmX0UKASFVEUPXSxKZsmo6AagyLLijRfii5Y0VOB0T1zmEKCLKOLEpTlqGlF2Uyh9DZjNynLsjIbx2wmFuwPPjfrfDPifOucWvsH58FR/J/Z+5yz97puSCQSiUQikUgkEonEUNAANAKLgWXAemAr0A38CuwHeoFfgC6gM/yb54GFwEXA1CG5E6dMAlqANuAboH+Iru3AcuAaYFzev2TROQq4ClgNHBjCSci6/gE2ATcDo/L+5YvEyUAr8KfBJGRdvwHPAeNxzAxgZXhSBxowmax1wDPAncDFwKnA8UAdMCJcdWG9ORO4FlgCvAXsHOTEfIhDxgMrgL4KAyN/txm4HzgnDPbhMh1YAKwBeipMvBtqgduA3RUmois81SdW6R7GAI9XWKOexAkNwMcVJuIzoAmoqeI9XALsyNDvAOYCw3BAU7AVsibiQoPd29MZn8htYaKGeflELc0YCJmgW6v8RpTezM4MfVlPhuOEI4HXM96KV42MsvOBXYr+mmB4ukEWznZlIHqAW4zuQdaDfZG+/Hk+zpDJ2JKxe5ppdA83Kbuob4HTccZI4D1lMrYCk43uYZ5iaIr+FJxRm7FmrAtvjdVn6kCO+oViqTIZ7WFxt0BcJX9F+huBo3FIk7K17TR8MqcAPyr2jcs3o0Ex+mQBn2CkPzw4BMv1vwMm4pBaxR3SY7ibEh6J9PcCs3DK7cq6YWVnEAZ+f6Tvzs4od6HvVixwK0YAX0b6b+CYFYpvyDJGvUiJ+LlcN0qRvnhXJY5CK+oVH5XExd2yUtliVttrW85jkf7nxvqFYrpiDV9gqH8MsCfSl/i6W1qjwfjUWP/BSF/SeNwySnk6xUrH0AjcEelfjmNuUCxyy9Dn3Ei/OxinbvkgGhDJDrFkdaR/D46ZFMUZ+qqYqqMxOooA9oUkObe0RE+nJLFZcnWkLz4017RFAyIZhXnu7u7DOV9HA3K2sX53pC8BKbc0KPmvEj/HMADVX3b97n13dakSp7akUQnNumZxNCCSlmnJ3ZG+JEu7Zlk0IFKfYcmLybN7MOtzduatjfRn45yt0YBI5ZIlX+WsX/gt7zRj/Z2Rvus6QELtd/mASMTOkj2RvrhRXNMbDYilDSL8Hem7qenIIk1IwUifrIKRFvWCkba9BTcMrQ2ztckwLLbrZD7OiZ2L0m8kT+fiEzinUamMylN/I87JO0A1OQWoBt76SoceS7pSCLdyksMDxhPSmpIcDub6aEA+yjkN6BOcM1FJlJNMeCtGR03HRP8EnPN+9JRKJrolb0f69+KcedGAdBkXyjQrLV9dpwNp5QhX5FyO0IxzlivlbJYsyXlz8Z8oaZM23lbUA39E+tKizzWvRAOyxfhb/qjSV8Vt0adwitKTSvoXWlGnlEVblmUXkpcU/5Jl4f5CRd9VH8WYcUoXoNdybq3xJs5ZEA2I9adjptJ8xvWnqyZsO8sHpMe4PdLDkb50lTsNx0xT0oS6jRuYbYj0v/e+nsxRmtF8AYw1DGD9oGzFrfQLSdwQxroJ5hlKE8xNnk/OqQm7LG1SxhrdQ7PiRdjg+U2ROPu7OTdSblGM1m0eGymXGBMcjv3KQj/L6B5uzGg1Lp81t5OyTpmUfYYuliszmvG7tVOOyFhT+oFVRlVQ5wE/K/rvGH5CC0Vt2H1pB7rsDudR1RrklHVk6N/htfhnjmI8lvdLnG1w5NFTGQ+GFJRe5uXIo9ii35wxKSVDrrnKcY3ZwYrX9Ds9HQpWoiZ0vs46IKy0G3sIOInqpRMtrXBsnrxJLl33bQMcLFlKhpMY+rlhk3C4yCSngyUrIA0AXh7kQcR7Q+GQnFd7V4ijzwjJcvXBKB0ZoonSae4s4LqQOyb5XD8NQsPt0avak/uCkmJkeaXDiQc4vjuuTa/GlY7vPgQmhNOeW0OG4lBNwvbwNkry9rGHckOJgzkubFsXhXWkPcTUu4KN0xtcI7vCzzpCW9tnQ02kHO86Nfo/E4lEIpFIJBKJRIL/I/8CJgfOpPAyfCwAAAAASUVORK5CYII="></img>:
                        <img src="data:image/png;base64,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"></img>
                    }
                </li> */}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;