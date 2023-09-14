import { useRef } from "react";

// react-icons
import { SlUser } from "react-icons/sl";
import { PiUserCircleFill } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";

// components
import ProfileModal from "./ProfileModal";

// styles
import styles from "./header.module.css";

const ProfileIcon: React.FC = (): JSX.Element => {
  const profileRef = useRef<HTMLDivElement>(null);
  const profileModalRef = useRef<HTMLDivElement>(null);

  const showUserModal = () => {
    profileRef.current!.style.borderBottom = "4px solid var(--blue)";
    profileModalRef.current!.style.transform = "scale(1)";
    profileModalRef.current!.style.opacity = "1";
  };

  const hideUserModal = () => {
    profileRef.current!.style.borderBottom = "4px solid transparent";
    profileModalRef.current!.style.transform = "scale(0)";
    profileModalRef.current!.style.opacity = "0";
  };

  return (
    <div className="relative">
      <p
        ref={profileRef}
        onMouseOver={showUserModal}
        onMouseLeave={hideUserModal}
        className={styles.profile}
      >
        <span className={styles.profile_icon}>
          <SlUser />
        </span>
        <span className={styles.profile_text}>Profile</span>
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
