import Link from "next/link";
import { PiTelegramLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="footer w-full flex justify-between gap-6 items-center">
        <div
          className="p-5 bg-[rgba(177,129,37,0.20)] w-[45%] hidden md:flex"
          style={{ borderRadius: "0px 50px 0px 0px" }}
        >
        </div>
        <div className="flex items-center w-full md:w-[10%] justify-center gap-4 py-5 md:py-0">
          <Link 
            href="https://t.me/Duckchain_portal">
            <PiTelegramLogoBold color="#fff" />
          </Link>
          <Link
            href="https://x.com/0xDuckchainLabs?s=20" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                <path d="M18 2.14972C17.326 2.43419 16.611 2.62092 15.879 2.70369C16.6415 2.26829 17.227 1.5788 17.5027 0.757292C16.7778 1.1671 15.9847 1.45584 15.1577 1.61102C14.484 0.927301 13.5243 0.5 12.4621 0.5C10.4226 0.5 8.76909 2.07523 8.76909 4.01808C8.76909 4.29386 8.80179 4.56234 8.86472 4.8199C5.79558 4.67314 3.07448 3.27253 1.25304 1.144C0.935227 1.66361 0.753117 2.26802 0.753117 2.91269C0.753117 4.1333 1.40512 5.21009 2.39597 5.84103C1.80953 5.82353 1.23599 5.67264 0.723234 5.40094C0.723023 5.41567 0.723023 5.43041 0.723023 5.44521C0.723023 7.1498 1.99596 8.57177 3.68529 8.89497C3.14148 9.03587 2.57107 9.05649 2.01762 8.95526C2.48752 10.353 3.85137 11.3701 5.46729 11.3986C4.20342 12.3421 2.61105 12.9046 0.880945 12.9046C0.58282 12.9046 0.288914 12.8879 0 12.8554C1.63427 13.8536 3.57539 14.4361 5.66086 14.4361C12.4535 14.4361 16.1679 9.07516 16.1679 4.42609C16.1679 4.2735 16.1644 4.12178 16.1573 3.97093C16.8802 3.47301 17.5042 2.8563 18 2.14972Z" fill="white"/>
              </svg>
          </Link>
          <Link
            href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M3.63269 15.5V5.37953H0.202386V15.5H3.63269ZM1.91798 3.99692C3.11419 3.99692 3.85877 3.21978 3.85877 2.24862C3.83648 1.25556 3.11423 0.5 1.94068 0.5C0.767312 0.5 0 1.25558 0 2.24862C0 3.21983 0.744398 3.99692 1.89559 3.99692H1.91787H1.91798ZM5.53135 15.5H8.96165V9.84824C8.96165 9.54576 8.98394 9.2436 9.07452 9.02738C9.32251 8.42304 9.88693 7.79712 10.8345 7.79712C12.0758 7.79712 12.5724 8.7252 12.5724 10.0857V15.4999H16.0025V9.69695C16.0025 6.58834 14.3101 5.14193 12.0532 5.14193C10.2027 5.14193 9.39021 6.15626 8.93883 6.84712H8.96173V5.37932H5.53143C5.57644 6.32897 5.53143 15.4998 5.53143 15.4998L5.53135 15.5Z" fill="white"/>
              </svg>
          </Link>
        </div>
        <div
          className="p-5 bg-[rgba(177,129,37,0.20)] w-[45%] hidden md:flex"
          style={{ borderRadius: "50px 0px 0px 0px" }}
        ></div>
      </div>
    </>
  );
};
    /*<footer className="footer">
        <div className="f-left">

        </div>
        <div className="">
            social icons
          <div className="flex mt-4">
            <a
              href="#"
              className="f-icons"
            >
              <Facebook fill="#FFFFFF" size={20} />
            </a>
            <a
              href="#"
              className="f-icons"
            >
              <TwitterIcon fill="#FFFFFF" size={20} />
            </a>
            <a
              href="#"
              className="f-icons"
            >
              <LinkedinIcon fill="#FFFFFF" size={20} />
            </a>
          </div>
        </div>
        <div className="f-right">

        </div>
      </footer>
    */
export default Footer;