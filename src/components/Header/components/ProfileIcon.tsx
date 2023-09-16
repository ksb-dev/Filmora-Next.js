"use client";

import { useRef, useState } from "react";

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

  const [hoverState, setHoverState] = useState<boolean>(false);

  const showUserModal = () => {
    downIconRef.current!.style.transform = "rotate(180deg)";
    profileModalRef.current!.style.transform = "scale(1)";
  };

  const hideUserModal = () => {
    downIconRef.current!.style.transform = "rotate(0deg)";
    profileModalRef.current!.style.transform = "scale(0)";
  };

  return (
    <div className="relative">
      <p
        ref={profileRef}
        onClick={() => {
          !hoverState && setHoverState(true);
          !hoverState && showUserModal();
          hoverState && setHoverState(false);
          hoverState && hideUserModal();
        }}
        onMouseOver={() => {
          hoverState && showUserModal();
          hoverState && setHoverState(true);
        }}
        onMouseLeave={() => {
          !profileModalRef.current!.onmouseover &&
            !profileRef.current!.onmouseover &&
            hideUserModal();

          !profileModalRef.current!.onmouseover &&
            !profileRef.current!.onmouseover &&
            setHoverState(false);
        }}
        className={styles.profile}
      >
        <span className={styles.profile_icon}>
          <FaRegUserCircle />
        </span>
        <span className={styles.profile_text}>Profile</span>
        <span ref={downIconRef} className={styles.down_icon}>
          <AiFillCaretDown />
        </span>
      </p>

      <ProfileModal
        profileRef={profileRef}
        ref={profileModalRef}
        showUserModal={showUserModal}
        hideUserModal={hideUserModal}
        setHoverState={setHoverState}
      />
    </div>
  );
};

export default ProfileIcon;
