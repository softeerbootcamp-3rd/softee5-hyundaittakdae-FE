// vite.config.js
export default {
  server: {
    proxy: {
      "/api": {
        target: "http://15.164.44.233:8080/", // Spring 서버 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
