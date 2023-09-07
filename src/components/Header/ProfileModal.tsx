import { useRef, forwardRef, useImperativeHandle } from "react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// styles
import styles from "./header.module.css";

interface Props {
  showUserModal: () => void;
  hideUserModal: () => void;
}
type Ref = HTMLDivElement;

export default forwardRef<Ref, Props>(function ProfileModal(props, ref) {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const { data: session } = useSession();
  const profileModalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => profileModalRef.current as HTMLDivElement);

  return (
    <div
      onMouseOver={props.showUserModal}
      onMouseLeave={props.hideUserModal}
      ref={profileModalRef}
      className={
        " absolute p-[1rem] flex-col right-[0rem] shadow-[0_4px_15px_rgba(0,0,0,0.2)] min-w-[250px] bottom-[3.25rem] md:bottom-auto scale-0 duration-100 " +
        (mode ? "whiteBg1" : "blackBg1")
      }
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
          <Link
            href="/pages/account"
            className="mb-[0.5rem] hover:font-semibold w-min"
          >
            Account
          </Link>

          <Link
            href="/pages/wishlist"
            className="mb-[0.5rem] hover:font-semibold w-min"
          >
            Wishlist
          </Link>

          <span
            className="inline-block hover:font-semibold cursor-pointer w-min"
            onClick={() => signOut()}
          >
            Logout
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-evenly">
          <Link
            href="/pages/login"
            className="py-[0.5rem] bg-[var(--blue)] text-white mr-[1rem] w-[50%] text-center hover:brightness-90"
            onClick={props.hideUserModal}
          >
            Login
          </Link>

          <Link
            href="/pages/register"
            className="py-[0.5rem] bg-[var(--blue)] text-white w-[50%] text-center hover:brightness-90"
            onClick={props.hideUserModal}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
});
