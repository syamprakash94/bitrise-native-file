# Dynamic Template System

This React Native app demonstrates dynamic app building based on template values passed from a frontend. The app supports 4 different templates, each with its own unique UI and variables.

## Templates

### 1. Business Template
**Template Type:** `business`
**Variables:**
- `TEMPLATE_TYPE`: "business"
- `APP_NAME`: Business application name
- `PRIMARY_COLOR`: Primary color for branding (hex color)
- `LOGO_URL`: URL to company logo image
- `CONTACT_EMAIL`: Contact email address

**Features:**
- Professional business landing page
- Services showcase grid
- Company benefits list
- Contact button

### 2. Ecommerce Template
**Template Type:** `ecommerce`
**Variables:**
- `TEMPLATE_TYPE`: "ecommerce"
- `STORE_NAME`: Name of the ecommerce store
- `THEME_COLOR`: Theme color for branding (hex color)
- `CURRENCY`: Currency code (e.g., "USD", "EUR")
- `API_BASE_URL`: Base URL for API endpoints

**Features:**
- Store homepage with featured products
- Product grid with pricing
- Shopping benefits
- Category navigation

### 3. Social Template
**Template Type:** `social`
**Variables:**
- `TEMPLATE_TYPE`: "social"
- `COMMUNITY_NAME`: Name of the social community
- `ACCENT_COLOR`: Accent color for branding (hex color)
- `WELCOME_MESSAGE`: Welcome message for new users

**Features:**
- Community homepage
- Recent posts feed
- Community statistics
- Quick action buttons

### 4. Portfolio Template
**Template Type:** `portfolio`
**Variables:**
- `TEMPLATE_TYPE`: "portfolio"
- `NAME`: Portfolio owner's name
- `PROFESSION`: Professional title
- `BIO`: Personal bio/description
- `PRIMARY_COLOR`: Primary color for branding (hex color)

**Features:**
- Personal portfolio homepage
- Skills showcase with progress bars
- Featured projects grid
- Experience timeline
- Call-to-action section

## How It Works

1. **Template Router**: The `TemplateRouter` component reads the `TEMPLATE_TYPE` variable and renders the appropriate template component.

2. **Variable Replacement**: During the Bitrise build process, all template variables (wrapped in `{{}}`) are replaced with actual values from the frontend API call.

3. **Dynamic Styling**: Each template uses its respective color variables to create a cohesive branded experience.

## File Structure

```
components/
├── TemplateRouter.tsx      # Main router component
├── BusinessTemplate.tsx    # Business template UI
├── EcommerceTemplate.tsx  # Ecommerce template UI
├── SocialTemplate.tsx     # Social template UI
└── PortfolioTemplate.tsx   # Portfolio template UI
```

## Usage

When Bitrise builds the app with template variables, the app will automatically render the correct template based on the `TEMPLATE_TYPE` value. Each template will display the provided variables in a professionally designed UI.

## Example Build Parameters

```javascript
// Business template example
{
  TEMPLATE_TYPE: "business",
  APP_NAME: "TechCorp Solutions",
  PRIMARY_COLOR: "#007bff",
  LOGO_URL: "https://example.com/logo.png",
  CONTACT_EMAIL: "contact@techcorp.com"
}

// Ecommerce template example
{
  TEMPLATE_TYPE: "ecommerce",
  STORE_NAME: "Fashion Store",
  THEME_COLOR: "#e91e63",
  CURRENCY: "USD",
  API_BASE_URL: "https://api.fashionstore.com"
}
```
