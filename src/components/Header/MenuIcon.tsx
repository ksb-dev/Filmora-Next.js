// react-icons
import { AiOutlineMenu } from "react-icons/ai";

interface Prop {
  showNav: () => void;
}

const MenuIcon: React.FC<Prop> = ({ showNav }): JSX.Element => {
  return (
    <p
      className={
        "cursor-pointer md:hidden flex flex-col items-center justify-center"
      }
      onClick={() => showNav()}
    >
      <span className="inline-block mb-[0.25rem]">
        <AiOutlineMenu />
      </span>
      <span className="text-[0.75rem] font-bold uppercase">Menu</span>
    </p>
  );
};

export default MenuIcon;
