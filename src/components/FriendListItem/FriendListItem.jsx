import style from "./FriendLists.module.css";
export default function FriendsList({ avatar, name, isOnline }) {
  return (
    <div className={style.containerFriend}>
      <img
        className={style.imgFriend}
        src={avatar}
        alt="Avatar"
        width="48"
        height="48"
      />
      <p className={style.nameFriend}>{name}</p>
      <p className={style.statusFriend}>
        {isOnline ? (
          <p className={style.OnFriend}>online</p>
        ) : (
          <p className={style.OfFriend}>offline</p>
        )}
      </p>
    </div>
  );
}
