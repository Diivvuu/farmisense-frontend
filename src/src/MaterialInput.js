import { TextField } from "@mui/material";

export default function MaterialInput({
  value,
  onChange,
  onNewValue,
  label,
  disableUnderline,
  fontSize,
  multiline,
  maxRows,
  onEnter,
  fontWeight,
  rows,
  type,
  autoFocus = false,
  onlyYear,
  variant = "filled",
  placeholder,
}) {
  if (!fontSize) fontSize = "var(--fontSize1)";

  variant = "filled";

  return (
    <TextField
      autoFocus={autoFocus}
      type={type}
      InputLabelProps={{
        style: {
          fontSize: fontSize,
          opacity: "0.8",
          // border: "1px solid var(--translucentHard)",
        },
      }}
      InputProps={{
        disableUnderline: true,

        style: {
          fontSize: fontSize,
          fontWeight: fontWeight,
          borderRadius: "10px",
          // color: "#ffffff",
          backgroundColor: "var(--translucentInteractionLight)",
          border: "1px solid var(--translucentHard)",
          overflow: "hidden",
        },
      }}
      // sx={{ input: { color: "#ffffff" } }}
      fullWidth
      multiline={multiline}
      maxRows={maxRows}
      placeholder={placeholder}
      onKeyDown={(ev) => {
        console.log(`Pressed keyCode ${ev.key}`);
        if (ev.key === "Enter") {
          if (onEnter) {
            onEnter(ev);
          }

          ev.preventDefault();
        }
      }}
      rows={rows}
      value={value}
      onChange={(e) => {
        if (onChange) onChange(e);
        if (onNewValue) {
          onNewValue(e.target.value);
        }
      }}
      label={label}
      variant={variant}
    />
  );
}
