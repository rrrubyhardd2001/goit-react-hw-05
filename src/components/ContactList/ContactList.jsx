import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <ul className={style.ListContact}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              key={contact.id}
              data={contact}
              deleteContact={deleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
