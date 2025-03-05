# StoryVerse: Interactive AI-Powered Storytelling Platform

StoryVerse is an interactive storytelling platform that will combine AI technologies to create immersive narrative experiences. The platform will allow users to generate, visualize, and interact with stories through text, images, audio, and video.

## Current State

The project is in early development, following a frontend-first approach. Currently implemented:

- **Authentication Page**: Simple password-based authentication
- **Profile Selection**: Choose between Ivan and Isaac profiles
- **Basic Project Structure**: Next.js app with Material UI components

## 🛠️ Tech Stack

- **Frontend**: Next.js 14.2.24 with TypeScript, React, Material UI, Tailwind CSS
- **Authentication**: Simple password-based auth (JWT to be added later)
- **Future Integrations**: (To be implemented)
  - OpenAI GPT (Text Generation)
  - ElevenLabs (Text-to-Speech & Speech-to-Text)
  - DALL-E (Image Generation)
  - PIAPI/Wan2.1 (Video Generation)

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/storyverse.git

# Navigate to the project directory
cd storyverse

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your password

# Start the development server
npm run dev
```

## 🔑 Environment Variables

Create a `.env.local` file with the following variable:

```
# Authentication
APP_PASSWORD=your-app-password
```

## 📖 Development Approach

StoryVerse follows a **Frontend First** development approach:

1. **Start with the frontend**: Build the authentication page, then the main app, profile switching, etc.
2. **Modular API integration**: Each AI service will be implemented as a modular, independent component.
3. **Iterative development**: Build, test, and validate each feature incrementally.

## 🏗️ Current Project Architecture

```
└── storyverse/
    ├── app/                  # Next.js app directory
    │   ├── auth/             # Authentication page
    │   ├── profile/          # Profile selection page
    │   ├── stories/          # Stories page (placeholder)
    │   ├── providers/        # Theme provider
    │   ├── layout.tsx        # Root layout
    │   ├── page.tsx          # Root page (redirects to auth)
    │   └── globals.css       # Global styles
    └── public/               # Static assets
        └── assets/           # Asset files
            ├── ivan-avatar.png # Ivan profile avatar
            └── isaac-avatar.png # Isaac profile avatar
```

## 🔄 Current Workflow

1. **Authentication**: Users log in using a simple password
2. **Profile Selection**: Upon successful authentication, users select between Ivan or Isaac profiles
3. **Stories Page**: After profile selection, users are redirected to a stories page (currently a placeholder)

## Next Steps

1. **Story Creation**: Implement UI for story creation
2. **AI Integration**: Begin integrating OpenAI for text generation
3. **Media Generation**: Add support for image, audio, and video generation
4. **Complete Story Experience**: Combine all elements into a cohesive story experience

---

Built with ❤️ for young storytellers 