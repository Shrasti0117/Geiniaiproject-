# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Recent Updates (March 16, 2026)

- Initial Gemini AI-powered React app structure pushed to GitHub.
- Main features and structure:
	- **React + Vite** setup with HMR and ESLint.
	- **Component-based structure:**
		- `Main` and `Sidebar` components for UI layout.
		- Context API for state management (`Context.jsx`).
	- **Gemini AI integration:**
		- `gemini.js` configures and connects to Google Generative AI (Gemini 2.0 Flash model).
	- **Rich assets:**
		- Multiple icons and images in `src/assets` for UI/UX.
	- **How to use:**
		- Start a new chat, interact with Gemini, and view results in real time.

> Note: **Do not expose API keys publicly.**

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
