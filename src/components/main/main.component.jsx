import Posts from "./posts/post.component";
import SideContent from "./side-content/side-content.component";
import "./main.styles.css";

const Main = () => {
    return (
        <main>
            {/* Gönderiler */}
            <section id="posts">
                <Posts />
            </section>
            {/* Yan İçerik */}
            <section id="sideContent">
                <SideContent />
            </section>
        </main>
    );
}

export default Main;