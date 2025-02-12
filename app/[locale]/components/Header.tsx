"use client";
import React from "react";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SearchIcon from "@mui/icons-material/Search";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import Link from "next/link";
import { Divider, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const divRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleOutsideSearchBoxClick = (e: { target: any }) => {
      if (divRef.current && !divRef.current.contains(e.target))
        setActive(false);
    };

    document.addEventListener("click", handleOutsideSearchBoxClick);

    return () =>
      document.removeEventListener("click", handleOutsideSearchBoxClick);
  }, []);

  /*  if (showMobileMenu) {
    return <div></div>;
  } */
  return (
    <div>
      <div className="flex flex-row justify-between w-full px-2 pb-2 text-sm">
        <div className="flex items-center gap-4 w-full lg:w-[50%]">
          <div className="flex items-center gap-6">
            <div className="w-[32px] h-[32px] ">
              <Link href="/">
                <Image
                  src="/images/logo_white.png"
                  alt="Spotify"
                  width="64"
                  height="64"
                />
              </Link>
            </div>
            {/*home button*/}
            <IconButton size="medium" className="bg-smallPaper hidden lg:block">
              <HomeIcon className="w-[32px] h-[32px]" />
            </IconButton>
          </div>
          {/*search bar*/}
          <div
            className={`rounded-3xl bg-[#1f1f1f] px-3 w-full flex items-center ${
              active ? "border border-white" : ""
            }`}
            onClick={() => setActive(true)}
            ref={divRef}
          >
            <SearchIcon className="mr-3" />
            <input
              type="search"
              id="searchbox"
              placeholder="What do you want to play?"
              className="bg-inherit outline-none w-[100%] text-md"
            />{" "}
            <Divider
              orientation="vertical"
              flexItem
              variant="middle"
              color="primary"
              aria-hidden="true"
            />
            <Tooltip title="Browse" placement="bottom">
              <IconButton>
                <FolderOpenIcon
                  className="cursor-pointer hover:text-primaryText"
                  color="secondary"
                />{" "}
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between gap-5">
          <div className="flex gap-2 items-center">
            <Link
              href="/"
              color="secondary"
              className="font-bold text-secondaryText hover:text-primaryText"
            >
              Premium
            </Link>
            <Link
              href="/"
              className="font-bold text-secondaryText hover:text-primaryText"
            >
              Support
            </Link>
            <Link
              href="/"
              className="font-bold text-secondaryText hover:text-primaryText"
            >
              Download
            </Link>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            color="primary"
            aria-hidden="true"
            sx={{ bgcolor: "primary.main" }}
            className="text-primaryText"
          />
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-primaryText">
              <span className="text-secondaryText hover:text-primaryText">
                <DownloadForOfflineOutlinedIcon />
                <span className="px-1  font-bold">Install App</span>
              </span>
            </Link>
            <Link href="/">
              <span className="px-1 text-secondaryText font-bold hover:text-primaryText">
                Sign up
              </span>{" "}
            </Link>
            <Button
              color="primary"
              variant="contained"
              className="rounded-3xl capitalize font-bold text-md py-2 px-8"
            >
              Log in
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-end lg:hidden w-[25%] ">
          {showMobileMenu ? (
            <IconButton
              className="p-1"
              size="large"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              className="p-1"
              size="large"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </div>
      </div>

      <div
        className={`w-[100%] absolute right-0 top-0 bg-paper h-full !text-lg py-3 ${
          showMobileMenu ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center p-2">
          <div className="">
            <Link href="/">
              <Image
                src="/images/logo_white.png"
                alt="Spotify"
                width="42"
                height="42"
              />
            </Link>
          </div>
          <Button
            color="primary"
            variant="contained"
            className="rounded-3xl capitalize font-bold text-lg py-2 px-8"
          >
            Log in
          </Button>
          <IconButton
            className="p-1"
            size="large"
            onClick={() => setShowMobileMenu(false)}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </div>

        <div className="flex flex-col gap-10 items-center mt-20">
          <Link
            href="/"
            color="secondary"
            className="font-bold text-secondaryText hover:text-primaryText"
          >
            Premium
          </Link>
          <Link
            href="/"
            className="font-bold text-secondaryText hover:text-primaryText"
          >
            Support
          </Link>
          <Link
            href="/"
            className="font-bold text-secondaryText hover:text-primaryText"
          >
            Download
          </Link>

          <Link href="/" className="hover:text-primaryText">
            <span className="text-secondaryText hover:text-primaryText">
              <DownloadForOfflineOutlinedIcon />
              <span className="px-1  font-bold">Install App</span>
            </span>
          </Link>
          <Link href="/">
            <span className="px-1 text-secondaryText font-bold hover:text-primaryText">
              Sign up
            </span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
