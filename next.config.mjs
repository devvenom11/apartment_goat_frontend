/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['gsap'],
  distDir: './dist', // Changes the build output directory to `./dist/`.

  // Disable CSS minification for debugging
  webpack(config) {
    config.optimization.minimize = false;
    return config;
  }
}

export default nextConfig;