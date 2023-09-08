import { useRef, forwardRef, useImperativeHandle } from "react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "./profileModal.module.css";

interface Props {
  showUserModal: () => void;
  hideUserModal: () => void;
}
type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function ProfileModal(props, ref) {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const { showUserModal, hideUserModal } = props;
  const { data: session } = useSession();
  const profileModalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => profileModalRef.current as HTMLDivElement);

  return (
    <div
      onMouseOver={showUserModal}
      onMouseLeave={hideUserModal}
      ref={profileModalRef}
      className={styles.modal + (mode ? " whiteBg1" : " blackBg1")}
    >
      <p className="font-bold">
        Welcome {session ? <span>{session.user?.name}</span> : ""}
      </p>
      <p className="w-max">
        {session ? "" : <span>To access account and manage wishlist</span>}
      </p>
      <p
        className="pt-[1rem] mb-[1rem]"
        style={{ borderBottom: "1px solid #cdcdcd" }}
      ></p>

      {session ? (
        <div className="flex flex-col justify-center">
          <Link href="/pages/account" className={styles.account}>
            Account
          </Link>
          <Link href="/pages/wishlist" className={styles.wishlist}>
            Wishlist
          </Link>
          <span className={styles.logout} onClick={() => signOut()}>
            Logout
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-evenly">
          <Link
            href="/pages/login"
            className={styles.login}
            onClick={hideUserModal}
          >
            Login
          </Link>
          <Link
            href="/pages/register"
            className={styles.register}
            onClick={hideUserModal}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
});
