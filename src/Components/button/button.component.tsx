type buttonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};
export default function Button({ onClick, children }: buttonProps) {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
}
