import { FaUser, FaPhone } from "react-icons/fa";
import s from '../ContactList/List.module.css'


const Contact = ({ id, name, number, deleteContact }) => {
    return (
      <div className={s.containerItem}>
        <div className={s.contact}>
          <p className={s.p}><FaUser /> {name}</p>
          <p className={s.p}><FaPhone /> {number}</p>
        </div>
        <button className={s.btn} type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    );
  };
  
  export default Contact;