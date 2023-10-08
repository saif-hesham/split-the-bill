import { useState } from 'react';
import friend from '../../Models/friend';
import Button from '../button/button.component';

type addFriendFormProps = {
  onAddFriend: (friend: friend) => void;
};
export default function AddFriendForm({ onAddFriend }: addFriendFormProps) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=');

  const id = Math.round(Math.random() * 999999);

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !image.trim()) return;
    onAddFriend({
      id,
      name,
      image: image + id,
      balance: 0,
    });
    setName('');
    setImage('https://i.pravatar.cc/48?u=');
  };
  return (
    <form className='form-add-friend' onSubmit={handleFormSubmission}>
      <label>Friend Name</label>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />

      <label>📷 Image URL</label>
      <input
        type='text'
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
