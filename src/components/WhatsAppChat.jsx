import {
  Box,
  Tooltip,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsAppChat() {
  const openWhatsApp = () => {

    window.open(
      "https://wa.me/+919281506441",
      "_blank"
    );

  };

  return (
    <Tooltip title="Chat with us">
      <Box
        onClick={openWhatsApp}
        sx={{
          position: "fixed",

          bottom: 110,

          right:  18,

          width: 50,

          height: 50,

          borderRadius: "50%",

          background:
            "#25D366",

          display: "flex",

          alignItems: "center",

          justifyContent:
            "center",

          cursor: "pointer",

          zIndex: 9999,

          boxShadow:
            "0 10px 30px rgba(0,0,0,0.25)",

          transition: "0.3s ease",

          "&:hover": {
            transform:
              "scale(1.08)",

            boxShadow:
              "0 14px 34px rgba(0,0,0,0.3)",
          },
        }}
      >
        <WhatsAppIcon
          sx={{
            color: "#fff",

            fontSize: 28,
          }}
        />
      </Box>
    </Tooltip>
  );
}

export default WhatsAppChat;