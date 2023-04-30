/** @type {import('next').NextConfig} */
const { config } = require("dotenv");
const { parsed } = config({ path: `./.env.${process.env.NODE_ENV}` });

module.exports = {
  env: parsed,
  reactStrictMode: true,
};


