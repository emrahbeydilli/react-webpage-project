import banner from "../../assests/img/banner.jpg";
import styles from "./header.styles.module.css";

const Header = () => {
    return (
        <header>
            <div className={styles.centered}>
                <h1>Websitemize Hoşgeldiniz</h1>
                <p>HTML,CSS ve JS dersleri</p>
                <button>İncele</button>
            </div>
            <img src={banner} alt="banner" />
        </header>
    );
}

export default Header;