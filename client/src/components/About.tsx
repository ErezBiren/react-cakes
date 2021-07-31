import "./About.css";
import myImgSrc from "../assets/me.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-right">
          <h1 className="section-title">השפית שלנו</h1>
          <img src={myImgSrc} className="my-image"></img>
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
}
