import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";

const LanguageDropDown = ({
  selectedLanguage,
  setSelectedLanguage,
  languageList,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="simple-select-autowidth-label" sx={{ color: "#FFFFFF" }}>
        <TranslateIcon sx={{ color: "#FFFFFF", marginRight: 1 }} /> Language
      </InputLabel>
      <Select
        labelId="simple-select-autowidth-label"
        id="select-small"
        value={selectedLanguage}
        label="Language"
        onChange={(e) => setSelectedLanguage(e.target.value)}
        sx={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#333333",
            },
          },
        }}
      >
        {languageList.map((language) => (
          <MenuItem key={language} value={language} sx={{ color: "#FFFFFF" }}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageDropDown;
