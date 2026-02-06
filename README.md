# Web Guide - Chrome Extension

> Your virtual tour guide for the web. Making the internet accessible for everyone.

<img width="358" height="599" alt="Screenshot 2026-02-06 085627" src="https://github.com/user-attachments/assets/d7f2b874-7475-45ed-af54-148162df71b8" />

## Overview

Web Guide is a Chrome extension that acts as a **virtual tour guide** for any webpage. It helps users understand where they are, what the page is for, and guides them to their next action—solving accessibility challenges for people who struggle with understanding pages and navigating to the right place.

### Key Features

- **Page Summarization**: Explains the current page in simple, clear language
- **Next Action Guidance**: Suggests what users can do and highlights the recommended element
- **Voice Commands**: Speak naturally to ask questions or request navigation
- **Voice Responses**: Hear responses spoken aloud (Text-to-Speech)
- **Visual Indicators**: Animated arrows and highlights point to relevant elements
- **WCAG Aligned**: Designed with accessibility principles at its core

## Quick Start

### Installation (Developer Mode)

A chrome extension that uses AI to guide user through voice mode and visual cues
- Step 1: Download the zip file 
- Step 2: Head to chrome://extensions 
- Step 3: Turn on Developer Mode 
- Step 4: Click Load Unpack at the top left of the side bar
- Step 5: Use the extension as per normal and enable mic permission on the webpage 
- Step 6: Refresh the webpage if the extension could not load

<img width="424" height="268" alt="Screenshot 2026-02-06 085359" src="https://github.com/user-attachments/assets/0c3780d4-6ec9-4bd6-b014-013c2cb56742" />

### Voice Commands Examples

- "Where am I?"
- "What is this page about?"
- "What can I do here?"
- "Take me to checkout"
- "Find the search bar"
- "Show me the menu"
- "I want to log in"
<img width="1198" height="674" alt="image" src="https://github.com/user-attachments/assets/5bc05829-31a3-4fc5-857b-bd3ca0227c6f" />

### Visual Guidance

When the extension identifies a relevant element:
1. The page scrolls to bring the element into view
2. An animated arrow points to the element
3. A tooltip describes what the element is
4. A pulsing highlight draws attention
<img width="1918" height="1031" alt="Screenshot 2026-02-06 090252" src="https://github.com/user-attachments/assets/8f56b672-13b2-4e18-addb-bd0143e63906" />

Click anywhere to dismiss the highlight.

## Requirements

- **Browser**: Chrome or Edge with Manifest V3 support
- **Permissions**: `activeTab`, `scripting`, `storage`, and `<all_urls>` host access (see `manifest.json`)
- **Network**: Outbound HTTPS access to Groq and ElevenLabs APIs (or a backend proxy)
- **Microphone**: Required for voice commands when `VOICE_INPUT` is enabled
- **Audio output**: Required for voice responses when `VOICE_OUTPUT` is enabled

# Contributors
---
> Team Effin @ iNTUition v12.0
- [See Wijie](https://www.linkedin.com/in/see-wi-jie-759952299/)
- [Yeo Wei Xuan](https://www.linkedin.com/in/wei-xuan-yeo-890218379/)
- [Chan Teik Fei](https://www.linkedin.com/in/chan-teik-fei/)
- Keith Seah Ken Yi
