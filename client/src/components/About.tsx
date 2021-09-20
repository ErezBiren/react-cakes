import Typography from "@material-ui/core/Typography";

import myImgSrc from "../assets/me.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <div className={`${styles.about} container`}>
        <div className={styles.colRight}>
          <h1 className={styles.sectionTitle}>השפית שלנו</h1>
          <img src={myImgSrc} className={styles.myImage}></img>
          {/* <Typography variant="h2" gutterBottom component="div">
          עדי גיבלי
            </Typography> */}
          <h2>עדי גיבלי</h2>
          <p>
            {/* <Typography variant="body1" gutterBottom> */}
            בזמן הפנוי שלי אני מאוד אוהבת לאפות ולבשל, בשבילי זה תרפיה. אני מאוד
            אוהבת לארח ולעמוד במטבח. הבן שלי נדבק בחיידק המטבח ואוהב מאוד לבשל,
            להתנסות ולהמציא כל מיני מאכלים. בנוסף, אני לוקחת חלק בפרויקט בשם
            דינלה במסגרתו יצא לי לשמח שני חיילים בודדים בעוגות שהכנתי עבורם ליום
            הולדתם.
          </p>
          {/* </Typography> */}
        </div>
      </div>
    </section>
  );
};

export default About;
