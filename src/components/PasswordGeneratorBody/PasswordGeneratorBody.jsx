import s from "./style.module.css";
import { generatePassword } from "../../lib/password";
export function PasswordGeneratorBody({ onSubmit }) {
  const submit = (e) => {
    e.preventDefault();

    const formData = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      formData[key] = value;
    });
    let password = generatePassword(formData);
    onSubmit(password);
  };
  return (
    <form onSubmit={submit}>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          <select name="size" defaultValue={15}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input name="uppercase" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Numbers
          <input name="numbers" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Specials
          <input name="specials" type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={s.btn_container}>
        <button type="submit" className={s.btn_generate}>
          Generate
        </button>
      </div>
    </form>
  );
}
