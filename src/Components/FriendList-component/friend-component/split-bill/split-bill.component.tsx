import { SetStateAction, useState } from 'react';
import friend from '../../../../Models/friend';
import Button from '../../../button/button.component';

type splitBillProps = {
  selectedFriend: friend;
  setFriends: React.Dispatch<SetStateAction<friend[]>>;
  setSelectedFriend: React.Dispatch<SetStateAction<friend | undefined>>;
};

export default function SplitBillForm({
  selectedFriend,
  setFriends,
  setSelectedFriend,
}: splitBillProps) {
  const [billTotal, setBillTotal] = useState<number>(0);
  const [yourExpense, setYourExpense] = useState<number>(0);
  const [whoPays, setWhoPays] = useState<string>('user');
  const friendExpense = billTotal ? billTotal - (yourExpense || 0) : '';

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!friendExpense) return;
    setFriends(oldFriends =>
      oldFriends.map(friend =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance:
                whoPays === 'user'
                  ? friend.balance + friendExpense
                  : friend.balance - (yourExpense || 0),
            }
          : friend
      )
    );

    setSelectedFriend(undefined);
  };
  return (
    <form className='form-split-bill' onSubmit={handleFormSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵Bill Total Value</label>
      <input
        type='text'
        value={billTotal || ''}
        onChange={e => setBillTotal(+e.target.value)}
      />

      <label>👲🏽Your Expense</label>
      <input
        type='text'
        value={yourExpense || ''}
        onChange={e =>
          setYourExpense(oldVal =>
            +e.target.value > billTotal ? oldVal : +e.target.value
          )
        }
      />

      <label>👬{selectedFriend.name}'s Expense</label>
      <input type='text' disabled value={friendExpense} />

      <label>💰Who is paying?</label>
      <select value={whoPays} onChange={e => setWhoPays(e.target.value)}>
        <option value='user'>👲🏽You</option>
        <option value='friend'>👬{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
