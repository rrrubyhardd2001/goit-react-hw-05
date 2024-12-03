import "./App.css";
import userData from "./userData/userData.json";
import Profile from "./components/Profile/Profile.jsx";

import friends from "./userData/friends.json";
import FriendList from "./components/FriendListItem/FriendList.jsx";

import transactions from "./userData/transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
