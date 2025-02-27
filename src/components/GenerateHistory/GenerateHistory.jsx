import { GENERATE_DATA } from "../../constants";
import s from "./GenerateHistory.module.css";
import { QRCodeSVG } from "qrcode.react";

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  return (
    <div className={s.generateHistory}>
      {data.map((el) => (
        <div key={el}>
          <div className={s.qrWrapper}>
            <QRCodeSVG value={el} className={s.result} size={100} />
          </div>
          <p>{el}</p>
        </div>
      ))}
    </div>
  );
};

export default GenerateHistory;
