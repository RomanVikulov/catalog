import logo from "../assets/svg/logo2.svg"
import madeBg from "../assets/svg/backgroundMade.svg"
import madeUA from "../assets/svg/madeInUkraine.svg"
import mastercard from "../assets/svg/mastercard.svg"
import visa from "../assets/svg/visa.svg"
import applepay from "../assets/svg/applepay.svg"
import gpay from "../assets/svg/gpay.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-left">
          <img src={logo} className="footer-logo" alt="logo" />

          <div className="footer-made">
            <img src={madeBg} className="made-bg" alt="" />
            <img src={madeUA} className="made-ua" alt="Made in Ukraine" />
          </div>

          <span className="footer-text">
            AQVEX © 2026 | Все права защищены
          </span>
        </div>

        <div className="footer-right">
          <img src={mastercard} alt="mastercard" />
          <img src={visa} alt="visa" />
          <img src={applepay} alt="applepay" />
          <img src={gpay} alt="gpay" />
        </div>

      </div>
    </footer>
  )
}