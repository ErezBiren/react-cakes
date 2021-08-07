import styles from "./About.module.css";
import myImgSrc from "../assets/me.jpg";

const About = () => {
  return (
    <section id="about">
      <div className={`${styles.about} container`}>
        <div className={styles.col_right}>
          <h1 className={styles.section_title}>השפית שלנו</h1>
          <img src={myImgSrc} className={styles.my_image}></img>
          <h2>עדי גיבלי</h2>
          <p>
            בזמן הפנוי שלי אני מאוד אוהבת לאפות ולבשל, בשבילי זה תרפיה. אני מאוד
            אוהבת לארח ולעמוד במטבח. הבן שלי נדבק בחיידק המטבח ואוהב מאוד לבשל,
            להתנסות ולהמציא כל מיני מאכלים. בנוסף, אני לוקחת חלק בפרויקט בשם
            דינלה במסגרתו יצא לי לשמח שני חיילים בודדים בעוגות שהכנתי עבורם ליום
            הולדתם.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
