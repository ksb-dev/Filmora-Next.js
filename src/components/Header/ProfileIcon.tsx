import { useRef } from "react";

// react-icons
import { SlUser } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";

// components
import ProfileModal from "./ProfileModal";

const ProfileIcon: React.FC = (): JSX.Element => {
  const profileRef = useRef<HTMLDivElement>(null);
  const profileModalRef = useRef<HTMLDivElement>(null);

  const showUserModal = () => {
    // profileRef.current!.style.borderBottom = "4px solid var(--blue)";
    // profileRef.current!.style.padding = "20px 0 17px 0";
    profileModalRef.current!.style.display = "flex";
  };

  const hideUserModal = () => {
    // profileRef.current!.style.padding = "20px 0";
    // profileRef.current!.style.borderBottom = "none";
    profileModalRef.current!.style.display = "none";
  };

  return (
    <div className="relative">
      <p
        ref={profileRef}
        onMouseOver={showUserModal}
        onMouseLeave={hideUserModal}
        className="ml-[2rem] cursor-pointer flex items-center justify-center py-[20px]"
      >
        <span className="inline-block mr-[0.5rem] text-[1.1rem]">
          <FaRegUserCircle />
        </span>
        <span className="text-[0.75rem] font-bold uppercase">Profile</span>
      </p>

      <ProfileModal
        ref={profileModalRef}
        showUserModal={showUserModal}
        hideUserModal={hideUserModal}
      />
    </div>
  );
};

export default ProfileIcon;
