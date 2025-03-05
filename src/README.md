# StoryVerse: Interactive AI-Powered Storytelling Platform

![StoryVerse Logo](./public/assets/storyverse-logo.webp)

StoryVerse is an innovative interactive storytelling platform that combines cutting-edge AI technologies to create immersive narrative experiences. The platform allows users to generate, visualize, and interact with stories through text, images, audio, and video.

## ✨ Features

- **Profile-Based Experience**: Select between different profiles (Ivan or Isaac) with personalized worlds, characters, and stories
- **AI-Generated Storytelling**: Create unique narratives using OpenAI's GPT models
- **Visual Story Experience**: Generate images for story scenes using DALL-E
- **Animated Story Scenes**: Convert still images to animated videos with Wan2.1
- **Voice Narration**: Text-to-speech capabilities through ElevenLabs with multi-voice support
- **Voice Input**: Speech-to-text functionality for interactive storytelling
- **Complete Story Experience**: Combine audio and video into a synchronized mini-movie
- **Secure & Child-Friendly**: Built with strict content validation and child-appropriate design

## 🛠️ Tech Stack

- **Frontend**: Next.js with TypeScript, React, Chakra UI, Tailwind CSS
- **Authentication**: NextAuth.js with JWT
- **Database**: Supabase
- **AI Services**:
  - OpenAI GPT (Text Generation)
  - ElevenLabs (Text-to-Speech & Speech-to-Text)
  - DALL-E (Image Generation)
  - PIAPI/Wan2.1 (Video Generation)
- **Media Processing**: FFmpeg for audio-video synchronization
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **Validation**: Zod for schema validation

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/storyverse.git

# Navigate to the project directory
cd storyverse

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys and configuration

# Start the development server
npm run dev
```

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```
# Authentication
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# OpenAI
OPENAI_API_KEY=your-openai-api-key

# ElevenLabs
ELEVENLABS_API_KEY=your-elevenlabs-api-key

# PIAPI (Wan2.1)
PIAPI_API_KEY=your-piapi-api-key
```

## 📖 Development Approach

StoryVerse follows a **Frontend First** development approach:

1. **Start with the frontend**: Build the authentication page, then the main app, profile switching, etc.
2. **Modular API integration**: Each AI service (TTS, STT, OpenAI, etc.) is implemented as a modular, independent component.
3. **Iterative development**: Build, test, and validate each feature incrementally.
4. **Child-friendly design**: Ensure all UI components and generated content are appropriate for young users.

## 🏗️ Project Architecture

```
└── storyverse/
    ├── app/                  # Next.js app directory
    │   ├── api/              # API routes
    │   ├── auth/             # Authentication pages
    │   ├── profile/          # Profile selection
    │   └── stories/          # Story generation and viewing
    ├── components/           # Reusable UI components
    ├── hooks/                # Custom React hooks
    │   ├── useAudioRecorder.ts
    │   ├── useStoryGenerator.ts
    │   └── useImageGenerator.ts
    ├── lib/                  # Utility functions and services
    │   ├── ai/               # AI integration services
    │   ├── database/         # Database functions
    │   └── media/            # Media processing utilities
    ├── public/               # Static assets
    └── styles/               # Global styles
```

## 🔄 Workflow

1. **Authentication**: Users log in using a secret password
2. **Profile Selection**: Choose between Ivan or Isaac profiles
3. **Story Creation**: Generate stories using AI based on user input
4. **Image Generation**: Create images for each story section
5. **Video Creation**: Convert images to animated videos
6. **Audio Narration**: Generate voice narration for the story
7. **Final Assembly**: Combine audio and video into a mini-movie
8. **Save & Share**: Store the story in the database for later viewing

## 👨‍💻 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for young storytellers 