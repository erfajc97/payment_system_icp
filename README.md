# 🚀 PayWeb3 - Decentralized Payment System

A modern decentralized payment button generation system using **Internet Computer Protocol (ICP)** and **native Bitcoin**.

---

## 🔗 Links Deployed
- [Landing page](https://27lhq-7iaaa-aaaaj-qnrwa-cai.icp0.io/) 
- [Dashboard](https://2kmw5-6aaaa-aaaaj-qnrvq-cai.icp0.io/) 
- [Backend](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=2nnqj-tyaaa-aaaaj-qnrva-cai)   

---

## 🎯 Features

- ✅ **Clean Architecture** with layer separation
- ✅ **TypeScript** for static typing
- ✅ **Tailwind CSS** for modern styling
- ✅ **React 18** with custom hooks
- ✅ **Decentralized authentication** with Internet Identity
- ✅ **Multiple frontends** (Main + Landing)
- ✅ **Modern UI** with dark theme and responsive design
- 🔄 **Merchant system** with sub-wallets
- 🔄 **QR code generation** for payments
- 🔄 **Native Bitcoin integration**
- 🔄 **Complete dashboard** for management

## 🏗️ Architecture

### Backend (Motoko)
- **Clean Architecture** with domain, infrastructure, and presentation layers
- **Feature-based modules**: auth, merchants, payments, bitcoin
- **Persistence** with Stable Storage
- **Validations** across all layers

### Frontend (React + TypeScript)
- **Modular architecture** by functionality
- **Tailwind CSS** for utility styling
- **Custom hooks** for state logic
- **TypeScript** for type safety
- **Multiple frontends**: Main and Landing page

## 🚀 Quick Installation

### Prerequisites

Before starting, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **DFX** (Internet Computer SDK)
- **Git**

### Installation Steps

#### 1. Install DFX (Internet Computer SDK)
```bash
# Install DFX
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

# Verify installation
dfx --version
```

#### 2. Clone and Setup Project
```bash
# Clone the repository
git clone https://github.com/erfajc97/payment_system_icp
cd payment_system_icp

# Install dependencies
npm install
```

#### 3. Environment Configuration
```bash
# Copy the environment example file
cp env.example .env

# Edit the .env file with your configuration
# The file contains all necessary variables for local development
```

#### 4. Configure Local Environment
```bash
# Start local Internet Computer
dfx start --clean --background

# Deploy canisters
dfx deploy
```

#### 5. Access Applications

Get the canister IDs with:
```bash
dfx canister id payment_system_frontend
dfx canister id landing_frontend
dfx canister id payment_system_backend
```

**Note**: After deployment, you can update your `.env` file with the actual canister IDs for easier access.


#### Development vs Production:
- **Local Development**: Uses local Internet Identity and canisters
- **Production**: Uses production Internet Identity (`https://identity.ic0.app`)

#### Security Notes:
- The `.env` file is automatically ignored by git (see `.gitignore`)
- Never commit sensitive information like API keys or private URLs
- Use `env.example` as a template for required variables

## 🔐 Internet Identity Setup

### Creating an Internet Identity Account

1. **Visit Internet Identity**: Go to [https://identity.ic0.app](https://identity.ic0.app)

2. **Create New Account**:
   - Click "Create Internet Identity"
   - Choose a recovery method (recommended: security key or passkey)
   - Follow the setup instructions for your device

3. **Device Setup**:
   - **For Windows**: Use Windows Hello or a security key
   - **For Mac**: Use Touch ID or a security key
   - **For Linux**: Use a security key or passkey
   - **For Mobile**: Use biometric authentication

4. **Recovery Setup**:
   - Write down your recovery phrase
   - Store it securely (this is crucial for account recovery)

### Using Internet Identity with PayWeb3

1. **Access the Application**: Go to your deployed PayWeb3 frontend
2. **Click "Connect with Internet Identity"**: This will redirect you to Internet Identity
3. **Authenticate**: Use your device's security method (fingerprint, face ID, security key, etc.)
4. **Return to App**: You'll be automatically redirected back to PayWeb3
5. **View Your Profile**: Your user information will be displayed

### Security Notes
- **Never share your recovery phrase**
- **Use a secure device** for authentication
- **Keep your device updated** for security patches
- **Consider using a dedicated security key** for maximum security

## 📁 Project Structure

```
payweb3/
├── src/
│   ├── payment_system_backend/          # Motoko Backend
│   │   ├── features/                 # Feature modules
│   │   │   ├── auth/                # Authentication
│   │   │   ├── merchants/           # Merchant management
│   │   │   ├── payments/            # Payment system
│   │   │   └── bitcoin/             # Bitcoin integration
│   │   └── main.mo                  # Entry point
│   ├── payment_system_frontend/         # Main Frontend
│   │   ├── src/
│   │   │   ├── features/            # Feature modules
│   │   │   │   ├── auth/           # Authentication
│   │   │   │   ├── merchants/      # Merchant management
│   │   │   │   ├── payments/       # Payment system
│   │   │   │   └── dashboard/      # Main dashboard
│   │   │   ├── services/           # Internet Identity services
│   │   │   ├── App.tsx             # Main component
│   │   │   └── index.css           # Tailwind styles
│   │   ├── tailwind.config.js      # Tailwind configuration
│   │   └── package.json            # Dependencies
│   └── landing_frontend/               # Landing Page
│       ├── src/
│       │   ├── components/         # Landing components
│       │   │   ├── Hero.tsx        # Main section
│       │   │   ├── Navigation.tsx  # Navigation
│       │   │   ├── Footer.tsx      # Footer
│       │   │   └── ContactPage.tsx # Contact page
│       │   ├── pages/              # Pages
│       │   ├── hooks/              # Custom hooks
│       │   ├── App.tsx             # Main component
│       │   └── index.css           # Styles
│       ├── tailwind.config.js      # Tailwind configuration
│       └── package.json            # Dependencies
├── dfx.json                         # DFX configuration
└── package.json                     # Project dependencies
```

## 🛠️ Technologies Used

### Backend
- **Motoko**: Native ICP language
- **Internet Identity**: Decentralized authentication
- **Bitcoin Integration**: Native BTC transactions
- **Stable Storage**: Data persistence

### Frontend
- **React 18**: UI framework
- **TypeScript**: Static typing
- **Tailwind CSS**: Styling framework
- **@dfinity/agent**: ICP client
- **@dfinity/auth-client**: Authentication client
- **Vite**: Build tool
- **React Router DOM**: Navigation

## 🎨 Design and UX

- **Modern design** with Tailwind CSS
- **Dark theme** with red, black, and white colors
- **Responsive** for all devices
- **Reusable components** with utility classes
- **Smooth animations** and transitions
- **Intuitive navigation** between frontends

## 🔧 Available Scripts

```bash
# Main Frontend
cd src/payment_system_frontend
npm run start          # Run in development
npm run build          # Build for production
npm run format         # Format code

# Landing Frontend
cd src/landing_frontend
npm run start          # Run in development
npm run build          # Build for production

# Backend
dfx deploy             # Deploy canisters
dfx generate           # Generate TypeScript declarations
dfx start              # Start local environment
```

## 📝 Project Status - Roadmap

### ✅ Completed
- [x] Clean Architecture implementation
- [x] Authentication module (backend)
- [x] React + TypeScript frontend
- [x] Landing page with navigation
- [x] Tailwind CSS configuration
- [x] Internet Identity integration
- [x] Modern and responsive UI
- [x] Complete TypeScript conversion
- [x] Project name: PayWeb3
- [x] Custom favicon
- [x] Multiple frontends working
- [x] User authentication status display

### 🔄 In Development
- [ ] Merchant module
- [ ] Sub-wallet generation
- [ ] Bitcoin integration
- [ ] Payment system
- [ ] Complete dashboard

## 🔐 Authentication with Internet Identity

The system uses **Internet Identity** for decentralized authentication:

1. **Secure connection**: No traditional passwords
2. **Decentralized identity**: Based on cryptography
3. **Native integration**: With Internet Computer Protocol
4. **Session persistence**: Automatic state management

### Authentication Flow:
1. User clicks "Connect with Internet Identity"
2. Internet Identity window opens
3. User authenticates with their device
4. System registers/retrieves user information
5. Active session in the application

## 🌐 Multiple Frontends

### Main Frontend
- **Purpose**: Complete payment system
- **Features**: Authentication, merchants, payments
- **URL**: Port 3000 (development)

### Landing Page
- **Purpose**: Marketing and information
- **Features**: Product information, contact
- **URL**: Port 3001 (development)
- **Navigation**: redirects to main

## 🚀 Deployment

### Local Development
```bash
# Terminal 1: Backend
dfx start --background

# Terminal 2: Main Frontend
cd src/payment_system_frontend
npm run start

# Terminal 3: Landing Page
cd src/landing_frontend
npm run start
```

### Production
```bash
# Update environment for production
# Edit .env file and set:
# DFX_NETWORK=ic
# INTERNET_IDENTITY_URL=https://identity.ic0.app

# Build frontends
cd src/payment_system_frontend && npm run build
cd ../../src/landing_frontend && npm run build

# Deploy
dfx deploy --network ic
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🆘 Support

If you have problems or questions:

1. Verify all dependencies are installed
2. Ensure DFX is configured correctly
3. Check that Internet Identity is working
4. Open an issue in the repository

## 🔗 Useful Links

- [Internet Computer Documentation](https://internetcomputer.org/docs)
- [Internet Identity](https://identity.ic0.app)
- [Motoko Language](https://internetcomputer.org/docs/current/developer-docs/build/languages/motoko)
- [React Documentation](https://react.dev)

---

**Built with ❤️ using Internet Computer Protocol!**

**PayWeb3** - Decentralized Payment System
