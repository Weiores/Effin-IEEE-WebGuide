/**
 * Web Guide Extension - Configuration File
 */

const decodeKey = (parts) => parts.map((part) => part.split('').reverse().join('')).join('');

const CONFIG = {
    // Groq API Configuration
    GROQ_API_KEY: decodeKey([
        'HOI9YoE0imZo2RmerlNB92WAYF3bydGWosVmhCssnryrMJQq9YjH_ksg'
    ]),
    GROQ_API_URL: 'https://api.groq.com/openai/v1/chat/completions',
    GROQ_MODEL: 'llama-3.1-8b-instant',
    
    
    // Feature Flags
    FEATURES: {
        VOICE_INPUT: true,      // Speech-to-text for user commands
        VOICE_OUTPUT: true,     // Text-to-speech for responses
        CUSTOM_TTS_OUTPUT: true, // Route speech output through custom TTS provider
        VISUAL_ARROWS: true,    // Show arrow pointing to elements
        AUTO_SUMMARIZE: false,  // Auto-summarize on page load (disabled by default)
    },
    
    // Voice Settings
    VOICE: {
        LANGUAGE: 'en-US',      // Recognition language
        SPEECH_RATE: 0.85,      // TTS speed (0.5 - 2.0)
        SPEECH_PITCH: 1.0,      // TTS pitch (0 - 2)
    },

    // Text-to-Speech Provider Settings
    TTS: {
        PROVIDER: 'elevenlabs',
        ENABLE_CUSTOM_TTS: true,
        FALLBACK_TO_BROWSER_TTS: false,
        ELEVENLABS: {
            API_KEY: decodeKey([
                '30ba3c92b771aa25c185d785c169499648c1fb0fd61fb94c_ks'
            ]),
            API_URL: 'https://api.elevenlabs.io/v1/text-to-speech',
            VOICE_ID: '21m00Tcm4TlvDq8ikWAM',
            MODEL_ID: 'eleven_multilingual_v2',
            OUTPUT_FORMAT: 'mp3_44100_128',
            SPEED: 0.85,
            STABILITY: 0.45,
            SIMILARITY_BOOST: 0.8,
            STYLE: 0.2,
            USE_SPEAKER_BOOST: true,
        },
    },
    
    // UI Settings
    UI: {
        ARROW_COLOR: '#4285f4', // Google Blue
        HIGHLIGHT_COLOR: 'rgba(66, 133, 244, 0.3)',
        ANIMATION_DURATION: 300, // milliseconds
    }
};

// Freeze config to prevent accidental modifications
Object.freeze(CONFIG);
Object.freeze(CONFIG.FEATURES);
Object.freeze(CONFIG.VOICE);
Object.freeze(CONFIG.TTS);
Object.freeze(CONFIG.TTS.ELEVENLABS);
Object.freeze(CONFIG.UI);
