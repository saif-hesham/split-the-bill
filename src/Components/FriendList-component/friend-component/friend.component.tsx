import friend from '../../../Models/friend';
import Button from '../../button/button.component';
type friendProps = {
  friend: friend;
  onSelectFriend: (friend: friend | undefined) => void;
  selectedFriend: friend | undefined;
};
export default function Friend({
  friend,
  onSelectFriend,
  selectedFriend,
}: friendProps) {
  const handleSelection = () => {
    if (friend !== selectedFriend) onSelectFriend(friend);
    else onSelectFriend(undefined);
  };
  return (
    <li className={friend === selectedFriend ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          Your friend {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even </p>}
      <Button onClick={() => handleSelection()}>
        {friend === selectedFriend ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
