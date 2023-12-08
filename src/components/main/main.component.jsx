import Posts from "./posts/posts.component";
import SideContent from "./side-content/side-content.component";
import styles from "./main.styles.module.css";

const Main = () => {
    return (
        <main>
            {/* Gönderiler */}
            <section id={styles["posts"]}>
                <Posts />
            </section>
            {/* Yan İçerik */}
            <section id={styles["sideContent"]}>
                <SideContent />
            </section>
        </main>
    );
}

export default Main;