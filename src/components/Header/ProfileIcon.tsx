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
    profileModalRef.current!.style.transform = "scale(1)";
  };

  const hideUserModal = () => {
    profileModalRef.current!.style.transform = "scale(0)";
  };

  return (
    <div className="relative">
      <p
        ref={profileRef}
        onMouseOver={showUserModal}
        onMouseLeave={hideUserModal}
        className="md:ml-[2rem] cursor-pointer flex flex-col md:flex-row items-center justify-center py-[12px] md:py-[20px]"
      >
        <span className="inline-block mr-0 md:mr-[0.5rem] text-[1.1rem]">
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
