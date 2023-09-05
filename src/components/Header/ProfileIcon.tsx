import { useRef } from "react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// react-icons
import { SlUser } from "react-icons/sl";

// styles
import styles from "./header.module.css";

const ProfileIcon: React.FC = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const { data: session } = useSession();
  const profileRef = useRef<HTMLDivElement>(null);
  const profileModalRef = useRef<HTMLDivElement>(null);

  const showUserModal = () => {
    profileRef.current!.style.borderBottom = "4px solid var(--blue)";
    profileRef.current!.style.padding = "20px 0 17px 0";
    profileModalRef.current!.style.display = "flex";
  };

  const hideUserModal = () => {
    profileRef.current!.style.padding = "20px 0";
    profileRef.current!.style.borderBottom = "none";
    profileModalRef.current!.style.display = "none";
  };

  return (
    <div className="relative">
      <p
        ref={profileRef}
        onMouseOver={showUserModal}
        onMouseLeave={hideUserModal}
        className="ml-[1rem] cursor-pointer flex flex-col items-center justify-center py-[20px]"
      >
        <span className="inline-block mb-[0.25rem]">
          <SlUser />
        </span>
        <span className="text-[0.75rem] font-bold uppercase">Profile</span>
      </p>

      <div
        onMouseOver={showUserModal}
        onMouseLeave={hideUserModal}
        ref={profileModalRef}
        className={
          styles.border_top +
          " absolute p-[1rem] flex-col right-[0rem] shadow-[0_4px_15px_rgba(0,0,0,0.2)] hidden min-w-[250px] bottom-[4.25rem] md:bottom-auto " +
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
            <Link href="#" className="mb-[0.5rem] hover:font-semibold w-min">
              Account
            </Link>

            <Link href="#" className="mb-[0.5rem] hover:font-semibold w-min">
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
              onClick={hideUserModal}
            >
              Login
            </Link>

            <Link
              href="/pages/register"
              className="py-[0.5rem] bg-[var(--blue)] text-white w-[50%] text-center hover:brightness-90"
              onClick={hideUserModal}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;
