import { RiUserHeartFill } from "react-icons/ri";
import { HiPhoneOutgoing } from "react-icons/hi";
import style from "./Contact.module.css";

export default function Contact({ data, deleteContact }) {
  return (
    <div className={style.wrap}>
      <div className={style.wrapPage}>
        <p className={style.Pname}>
          <RiUserHeartFill className={style.icon} />
          {data.name}
        </p>
        <p className={style.Pnumber}>
          <HiPhoneOutgoing className={style.icon} />
          {data.number}
        </p>
      </div>
      <div>
        <button
          className={style.DelButton}
          onClick={() => deleteContact(data.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
