import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import style from "../FriendListItem/FriendLists.module.css";
export default function FriendsList({ friends }) {
  return (
    <ul className={style.ulFriends}>
      {friends.map((friend) => (
        <li className={style.liFriend} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
