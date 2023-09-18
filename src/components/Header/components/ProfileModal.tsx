import {
  useRef,
  forwardRef,
  useImperativeHandle,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "../header.module.css";

interface Props {
  profileRef: RefObject<HTMLDivElement>;
  showUserModal: () => void;
  hideUserModal: () => void;
  setHoverState: Dispatch<SetStateAction<boolean>>;
}
type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function ProfileModal(props, ref) {
  const mode: boolean = useSelector((state: RootState) => state.mode.mode);
  const { profileRef, showUserModal, hideUserModal, setHoverState } = props;
  const { data: session } = useSession();
  const profileModalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => profileModalRef.current as HTMLDivElement);

  return (
    <div
      onMouseOver={() => {
        setHoverState(true);
        showUserModal();
      }}
      onMouseLeave={() => {
        !profileModalRef.current!.onmouseover &&
          !profileRef.current!.onmouseover &&
          hideUserModal();

        !profileModalRef.current!.onmouseover &&
          !profileRef.current!.onmouseover &&
          setHoverState(false);
      }}
      ref={profileModalRef}
      className={
        styles.modal +
        (mode ? " whiteBg2 blackColor1" : " blackBg2 whiteColor1")
      }
    >
      <p className="font-bold w-max">
        Welcome!{" "}
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
            className={styles.account_link + (mode ? " whiteBg2" : " blackBg2")}
            onClick={hideUserModal}
          >
            Account
          </Link>
          <span
            className={styles.logout + (mode ? " whiteBg2" : " blackBg2")}
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
            className={
              styles.login_link +
              (mode ? " whiteBg1 blackColor1" : " blackBg1 whiteColor1")
            }
            onClick={hideUserModal}
          >
            Login
          </Link>
          <Link
            href="/pages/register"
            className={
              styles.register_link +
              (mode ? " whiteBg1 blackColor1" : " blackBg1 whiteColor1")
            }
            onClick={hideUserModal}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
});
