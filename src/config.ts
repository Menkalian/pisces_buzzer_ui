const config = {
  api: {
    host: import.meta.env.VITE_API_HOST || "",
  },
  app: {
    defaultBuzzerId: import.meta.env.VITE_DEFAULT_BUZZER_ID || "",
  },
};

export default config;
