import { useRef } from "react";

// react-icons
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

// components
import ProfileModal from "./ProfileModal";

// styles
import styles from "../header.module.css";

const ProfileIcon: React.FC = (): JSX.Element => {
  const profileRef = useRef<HTMLDivElement>(null);
  const profileModalRef = useRef<HTMLDivElement>(null);
  const downIconRef = useRef<HTMLSpanElement>(null);

  const showUserModal = () => {
    downIconRef.current!.style.transform = "rotate(180deg)";
    profileModalRef.current!.style.transform = "scale(1)";
    profileModalRef.current!.style.opacity = "1";
  };

  const hideUserModal = () => {
    downIconRef.current!.style.transform = "rotate(0deg)";
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
          <FaRegUserCircle />
        </span>
        <span className={styles.profile_text}>Profile</span>
        <span
          ref={downIconRef}
          className="inline-block ml-[0.25rem]"
          style={{ transition: "var(--transition)" }}
        >
          <AiFillCaretDown />
        </span>
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
