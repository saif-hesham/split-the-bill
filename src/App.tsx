import { useState } from 'react';
import FriendsList from './Components/FriendList-component/FriendsList.component';
import SplitBillForm from './Components/FriendList-component/friend-component/split-bill/split-bill.component';
import AddFriendForm from './Components/add-friend/add-friend.component';
import Button from './Components/button/button.component';
import friend from './Models/friend';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [friends, setFriends] = useState<friend[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<friend>();

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          newFriends={friends}
          onSelectFriend={(friend: friend | undefined) => {
            setSelectedFriend(friend);
            setAddFriend(false);
          }}
          selectedFriend={selectedFriend}
        />
        {addFriend && (
          <AddFriendForm
            onAddFriend={(friend: friend) => {
              setFriends(oldFriends => [...oldFriends, friend]);
              setAddFriend(false);
            }}
          />
        )}
        <Button onClick={() => setAddFriend(oldVal => !oldVal)}>
          {addFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          setFriends={setFriends}
          setSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}
