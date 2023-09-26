import Best from "pages/_com/best/Best";
import News from "pages/_com/news/News";
import "./main.scss";
import Notice from "pages/board/_com/notice/Notice";

const Main = () => {
  return (
    <div className="main-page">
      <article>
        <Best />
        <News />
      </article>
      <article>
        <News />
        <Notice />
      </article>
    </div>
  );
};

export default Main;
