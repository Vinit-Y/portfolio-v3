# Portfolio v3

This is a modern and responsive portfolio website built using cutting-edge technologies like **Next.js**, **React**, **TypeScript**, **Three.js**, **Tailwind CSS**, and more. It showcases projects, skills, and experiences in an interactive and visually appealing manner.

## Features

- **Dynamic Hero Section**: Animated text and spotlight effects.
- **Interactive 3D Globe**: Visualizes connections and data points.
- **Skills Showcase**: Categorized skills with icons.
- **Projects Section**: Highlights recent projects with descriptions and links.
- **Work Experience**: Detailed timeline of professional experience.
- **Approach Section**: Explains the development process with animations.
- **Responsive Design**: Optimized for all devices.
- **Sentry Integration**: Error tracking and monitoring.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm (package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vinit-Y/portfolio-v3.git
   cd portfolio-v3
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Technologies Used

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS, Framer Motion, Aceternity UI
- **3D Graphics**: Three.js, @react-three/fiber
- **Backend**: Node.js (for API integration)
- **Monitoring**: Sentry
- **Icons**: Lucide React, Devicons
- **Deployment**: Vercel

## Project Structure

- `components/`: Reusable React components.
- `data/`: Static data for skills, projects, and experience.
- `scripts/`: Utility scripts for tasks like downloading icons.
- `public/`: Static assets like images and icons.
- `app/`: Next.js app directory for routing and layout.
- `lib/`: Utility functions.
- `styles/`: Global CSS and Tailwind configuration.

## Deployment

The project is deployed on [Vercel](https://vercel.com). To deploy your own version:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Configure environment variables in the Vercel dashboard.
4. Deploy the project with a single click.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
NEXT_PUBLIC_SITE_URL=<your-site-url>
SENTRY_AUTH_TOKEN=<your-sentry-auth-token>
SENTRY_DSN=<your-sentry-dsn>
SENTRY_ORG=<your-sentry-org>
SENTRY_PROJECT=<your-sentry-project>
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, feel free to reach out:

- **Email**: [yadav.vini@northeastern.edu](mailto:yadav.vini@northeastern.edu)
- **LinkedIn**: [Vinit Yadav](https://www.linkedin.com/in/Vinit-Y)
- **GitHub**: [Vinit-Y](https://github.com/Vinit-Y)
