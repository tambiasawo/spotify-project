"use client";
import IconButton from "@mui/material/IconButton";
import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Link from "next/link";
import LanguageSelector from "../ui_kit/LanguageSelector";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="h-full w-[25%] bg-paper rounded-lg p-2 ">
      <section className="flex flex-row justify-between w-full h-[76px] shadow-paper">
        <div className="text-secondaryText hover:text-primaryText font-bold">
          <IconButton>
            <AutoStoriesIcon />
          </IconButton>
          {t("greeting")}
        </div>
        <div>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </section>

      <section>
        <div className="bg-smallPaper rounded-md p-4 mt-6 flex flex-col gap-4">
          <div>
            <h6 className="font-bold space-x-1">Create your first playlist</h6>
            <p>It's easy we will help you</p>
          </div>
          <div>
            <Button
              variant="contained"
              className="font-bold rounded-2xl capitalize"
            >
              Create playlist
            </Button>
          </div>
        </div>
        <div className="bg-smallPaper rounded-md p-4 mt-6 flex flex-col gap-4">
          <div>
            <h6 className="font-bold space-x-1">
              Let's find some podcasts to follow
            </h6>
            <p>We'll keep you updated on new episodes</p>
          </div>
          <div>
            <Button
              variant="contained"
              className="font-bold rounded-2xl capitalize"
            >
              Browse podcasts
            </Button>
          </div>
        </div>
      </section>
      <footer className=" mt-10 w-full h-[40%]">
        <section className="flex flex-wrap gap-2">
          <Link href="/" className="text-xs text-secondaryText">
            Legal
          </Link>
          <Link href="/" className="text-xs text-secondaryText">
            Safety & Privacy Center
          </Link>
          <Link href="/" className="text-xs text-secondaryText">
            Privacy Policy
          </Link>{" "}
          <Link href="/" className="text-xs text-secondaryText">
            Cookies
          </Link>{" "}
          <Link href="/" className="text-xs text-secondaryText">
            About Ads
          </Link>{" "}
          <Link href="/" className="text-xs text-secondaryText">
            Accessibility
          </Link>{" "}
        </section>
        <section className="mt-5">
          <LanguageSelector />
        </section>
      </footer>
    </aside>
  );
};

export default Sidebar;
