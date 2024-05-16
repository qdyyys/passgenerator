import { FC, ReactNode } from "react";
interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { children, onClick, className } = props;
  const defaultStyles = `
  w-9
  h-9
  flex
  items-center
  justify-center
  rounded-lg
  hover:bg-gray-500
  transition-all
  `;
  return (
    <button onClick={onClick} className={`${className} ${defaultStyles}`}>
      {children}
    </button>
  );
};
export default IconButton;
