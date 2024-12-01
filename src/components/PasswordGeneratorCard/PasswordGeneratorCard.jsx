import { useState } from "react";
import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter";
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader";
import s from "./style.module.css";
import { generatePassword } from "../../lib/password";
export function PasswordGeneratorCard() {
  const [password, setPassword] = useState(
    generatePassword({
      size: 15,
      numbers: "on",
      uppercase: "on",
      lowercase: "on",
      specials: "on",
    })
  );
  return (
    <div className={s.root}>
      <div className={s.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody onSubmit={setPassword} />
      </div>
      <PasswordGeneratorFooter password={password} />
    </div>
  );
}
