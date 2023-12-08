import resim1 from "../../../../assests/img/resim1.jpg";

const Post = () => {
    return (
        <article className="card">
            <h2 className="cardHeading">fotoğrafçılığa giriş</h2>
            <div className="cardDate">17 Ekim 2022</div>
            <img src={resim1} alt="resim3" class="cardImage"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, id ullam facere inventore facilis dolores obcaecati tempora assumenda, ipsum nam soluta accusantium quidem officiis, corporis pariatur at dignissimos magnam ex!</p>
                <button class="cardBtn">İncele</button>
        </article>
    );
}

export default Post;