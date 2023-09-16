import { useRef, forwardRef, useImperativeHandle } from "react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "../header.module.css";

interface Props {
  showUserModal: () => void;
  hideUserModal: () => void;
}
type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function ProfileModal(props, ref) {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const { showUserModal, hideUserModal } = props;
  const { data: session } = useSession();
  const profileModalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => profileModalRef.current as HTMLDivElement);

  return (
    <div
      onMouseOver={showUserModal}
      onMouseLeave={hideUserModal}
      ref={profileModalRef}
      className={
        styles.modal +
        (mode ? " whiteBg1 blackColor1" : " blackBg1 whiteColor1")
      }
    >
      <p className="font-semibold w-max">
        Welcome{" "}
        {session ? <span>{session.user?.name?.split(" ")[0]}!</span> : ""}
      </p>
      <p className="w-max">
        {session ? "" : <span>To access account and manage wishlist</span>}
      </p>
      <p className={styles.line}></p>

      {session ? (
        <div className={styles.account_logout_div}>
          <Link
            href="/pages/account"
            className={styles.account_link + (mode ? " whiteBg1" : " blackBg1")}
            onClick={hideUserModal}
          >
            Account
          </Link>
          <span
            className={styles.logout + (mode ? " whiteBg1" : " blackBg1")}
            onClick={() => {
              signOut();
              hideUserModal();
            }}
          >
            Logout
          </span>
        </div>
      ) : (
        <div className={styles.login_register_div}>
          <Link
            href="/pages/login"
            className={styles.login_link}
            onClick={hideUserModal}
          >
            Login
          </Link>
          <Link
            href="/pages/register"
            className={styles.register_link}
            onClick={hideUserModal}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
});
