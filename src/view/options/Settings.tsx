import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TabCleanerSettingForm from "./TabCleanerSettingForm";
import Footer from "./Footer";
import PopupSizeSettingForm from "./PopupSizeSettingForm";

const Settings = () => {
  return (
    <Stack spacing={2}>
      <TabCleanerSettingForm />
      <PopupSizeSettingForm />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Footer />
    </Stack>
  );
};

export default Settings;
