import friend from '../../Models/friend';
import Friend from './friend-component/friend.component';

type friendsListProps = {
  newFriends: friend[];
  onSelectFriend: (friend: friend | undefined) => void;
  selectedFriend: friend | undefined;
};
export default function FriendsList({
  newFriends,
  onSelectFriend,
  selectedFriend,
}: friendsListProps) {
  const friends = newFriends;
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
