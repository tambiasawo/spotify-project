"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, IconButton } from "@mui/material";
import useLanguageChanger from "../utils/languageChanger";
//import handleChange from "../utils/languageChanger";

const languages = [
  { language: "English", nativeLanguage: "English", code: "en" },
  { language: "Spanish", nativeLanguage: "Espanol", code: "es" },
  { language: "Spanish (Mexico)", nativeLanguage: "Espanol", code: "es-MX" },
  { language: "French (Canada)", nativeLanguage: "Francais", code: "fr-CA" },
];
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const { handleChange } = useLanguageChanger();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="rounded-2xl flex gap-1"
        variant="outlined"
      >
        <LanguageIcon /> English
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <section className="flex justify-between w-full gap-5 items-start mb-4">
              <div className="space-y-2">
                <h1 className="font-bold text-2xl">Choose a Language</h1>
                <p>This updates what you read on open.spotify.com</p>
              </div>
              <IconButton className="p-1" size="large">
                <CloseIcon fontSize="small" />
              </IconButton>
            </section>
            <Divider flexItem aria-hidden="true" />

            <div className="flex justify-center gap-3 mt-5">
              {languages.map((item) => (
                <span
                  key={item.code}
                  className="hover:bg-hoverColor w-[200px] px-4 py-4  text-left cursor-pointer"
                  onClick={() => handleChange(item.code)}
                >
                  <p className="text-primaryText">{item.language}</p>
                  <p className="text-secondaryText">{item.nativeLanguage}</p>
                </span>
              ))}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
