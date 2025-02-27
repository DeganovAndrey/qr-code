import { SCAN_DATA } from "./../../constants";
import s from "./ScanHistory.module.css";
import { QRCodeSVG } from "qrcode.react";

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
  return (
    <div className={s.scanHistory}>
      {data.map((el) => (
        <div key={el}>
          <p>{el}</p>

          <QRCodeSVG value={el} className={s.result} size={100} />
        </div>
      ))}
    </div>
  );
};

export default ScanHistory;
