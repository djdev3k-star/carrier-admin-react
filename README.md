# 🚚 Carrier Admin Dashboard

A modern React Admin dashboard for transportation carriers. This project includes:

- Driver & Vehicle Management
- Compliance & Regulatory Tracking
- Maintenance & Insurance Monitoring
- Built with React Admin, MUI, and Supabase
- Deployed on Netlify

---

## 🧱 Stack

- **Frontend**: Vite + React + React Admin + MUI
- **Backend**: Supabase (PostgreSQL + REST API)
- **Hosting**: Netlify

---

## 📦 Installation

```bash
git clone https://github.com/djdev3k-star/carrier-admin.git
cd carrier-admin
npm install

```

### Environment Variables

Create a `.env` file in the root:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

```

---

## 🚀 Development

```bash
npm run dev

```

Open `http://localhost:5173`

---

## 📡 Deploy to Netlify

1. Push your project to GitHub
2. Connect to Netlify
3. Set environment variables in the Netlify dashboard
4. Build command: `npm run build`
5. Publish directory: `dist`

---

## 🗃️ Resources / Modules

- `drivers`: Manage driver profiles and licensing
- `vehicles`: Vehicle records and status
- `compliance`: Track DOT, CDL, medical certs, etc.
- `maintenance`: Vehicle servicing logs
- `insurance`: Policy records, renewal reminders

---

## 🔐 Coming Soon

- Supabase Auth integration
- File uploads for driver documents
- Role-based access control
- PDF download/export

---

## 📁 Folder Structure

```
src/
├── App.tsx
├── Dashboard.tsx
├── dataProvider.ts
├── theme.ts
├── Layout.tsx
└── resources/
    ├── drivers/
    ├── vehicles/
    ├── compliance/
    ├── maintenance/
    └── insurance/

```

---

## 🧪 Testing

Coming soon – integration tests with Playwright & unit tests with Vitest.
