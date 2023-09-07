// react-icons
import { AiOutlineMenu } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <span className="inline-block">
        <GiHamburgerMenu />
      </span>
      <span className="text-[0.75rem] font-bold uppercase">Menu</span>
    </p>
  );
};

export default MenuIcon;
