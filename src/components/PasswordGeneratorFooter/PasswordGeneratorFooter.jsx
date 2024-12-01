import s from "./style.module.css";
import copyIcon from "../../assets/copy-paste.svg";
export function PasswordGeneratorFooter({ password }) {
  const saveInClipboard = () => {
    console.log("***", password);
    navigator.clipboard.writeText(password);
  };
  return (
    <div onClick={saveInClipboard} className={s.root}>
      <div>{password}</div>
      <img className={s.icon} src={copyIcon} alt="Copy Icon" />
    </div>
  );
}
