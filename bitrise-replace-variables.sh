#!/bin/bash

# Enhanced Bitrise script for template variable replacement
# This script replaces template variables with actual values from environment variables

echo "🔧 Starting Enhanced Template Variable Replacement..."
echo "=================================================="

# Define all files that contain template variables
TEMPLATE_FILES=(
  "./App.tsx"
  "./components/TemplateRouter.tsx"
  "./components/BusinessTemplate.tsx"
  "./components/EcommerceTemplate.tsx"
  "./components/SocialTemplate.tsx"
  "./components/PortfolioTemplate.tsx"
)

# Display current working directory and file structure
echo "📁 Current working directory:"
pwd
echo ""
echo "📂 File structure:"
ls -la
echo ""

# Display environment variables for debugging
echo "📋 Environment Variables:"
echo "TEMPLATE_TYPE = '$TEMPLATE_TYPE'"
echo "APP_NAME = '$APP_NAME'"
echo "PRIMARY_COLOR = '$PRIMARY_COLOR'"
echo "LOGO_URL = '$LOGO_URL'"
echo "CONTACT_EMAIL = '$CONTACT_EMAIL'"
echo "STORE_NAME = '$STORE_NAME'"
echo "THEME_COLOR = '$THEME_COLOR'"
echo "CURRENCY = '$CURRENCY'"
echo "API_BASE_URL = '$API_BASE_URL'"
echo "COMMUNITY_NAME = '$COMMUNITY_NAME'"
echo "ACCENT_COLOR = '$ACCENT_COLOR'"
echo "WELCOME_MESSAGE = '$WELCOME_MESSAGE'"
echo "NAME = '$NAME'"
echo "PROFESSION = '$PROFESSION'"
echo "BIO = '$BIO'"
echo ""

# Function to replace variables in a file
replace_variables() {
  local file=$1
  if [ ! -f "$file" ]; then
    echo "⚠️  File $file not found, skipping..."
    return 1
  fi
  
  echo "🔄 Processing file: $file"
  
  # Create backup
  cp "$file" "$file.bak"
  
  # Show original content (first 10 lines)
  echo "📄 Original content (first 10 lines):"
  head -10 "$file"
  echo ""
  
  # Replace all template variables with environment variables or defaults
  echo "🔧 Performing replacements..."
  
  # Use more robust replacement with proper escaping
  sed -i "s|{{TEMPLATE_TYPE}}|${TEMPLATE_TYPE:-business}|g" "$file"
  sed -i "s|{{APP_NAME}}|${APP_NAME:-My Business App}|g" "$file"
  sed -i "s|{{PRIMARY_COLOR}}|${PRIMARY_COLOR:-#007bff}|g" "$file"
  sed -i "s|{{LOGO_URL}}|${LOGO_URL:-}|g" "$file"
  sed -i "s|{{CONTACT_EMAIL}}|${CONTACT_EMAIL:-contact@example.com}|g" "$file"
  sed -i "s|{{STORE_NAME}}|${STORE_NAME:-My Store}|g" "$file"
  sed -i "s|{{THEME_COLOR}}|${THEME_COLOR:-#e91e63}|g" "$file"
  sed -i "s|{{CURRENCY}}|${CURRENCY:-USD}|g" "$file"
  sed -i "s|{{API_BASE_URL}}|${API_BASE_URL:-https://api.example.com}|g" "$file"
  sed -i "s|{{COMMUNITY_NAME}}|${COMMUNITY_NAME:-My Community}|g" "$file"
  sed -i "s|{{ACCENT_COLOR}}|${ACCENT_COLOR:-#28a745}|g" "$file"
  sed -i "s|{{WELCOME_MESSAGE}}|${WELCOME_MESSAGE:-Welcome to our community!}|g" "$file"
  sed -i "s|{{NAME}}|${NAME:-John Doe}|g" "$file"
  sed -i "s|{{PROFESSION}}|${PROFESSION:-Developer}|g" "$file"
  sed -i "s|{{BIO}}|${BIO:-Passionate about creating amazing experiences}|g" "$file"
  
  # Show modified content (first 10 lines)
  echo "📄 Modified content (first 10 lines):"
  head -10 "$file"
  echo ""
  
  # Check if replacement was successful
  if grep -q "{{" "$file"; then
    echo "⚠️  Warning: Some variables were not replaced in $file"
    echo "Remaining variables:"
    grep -o "{{[^}]*}}" "$file" | sort | uniq
  else
    echo "✅ All variables successfully replaced in $file"
  fi
  
  echo "✅ Completed processing: $file"
  echo "----------------------------------------"
  return 0
}

# Process each template file
success_count=0
total_files=${#TEMPLATE_FILES[@]}

for file in "${TEMPLATE_FILES[@]}"; do
  if replace_variables "$file"; then
    ((success_count++))
  fi
done

echo ""
echo "🎉 Template variable replacement completed!"
echo "📊 Summary:"
echo "   Files processed: $success_count/$total_files"
echo "   Template Type: ${TEMPLATE_TYPE:-business}"
echo "   Primary Color: ${PRIMARY_COLOR:-#007bff}"

# Show a sample of the processed TemplateRouter.tsx for verification
if [ -f "./components/TemplateRouter.tsx" ]; then
  echo ""
  echo "📄 Sample of processed TemplateRouter.tsx (lines 10-20):"
  sed -n '10,20p' "./components/TemplateRouter.tsx"
fi

# Final verification
echo ""
echo "🔍 Final verification - checking for unreplaced variables:"
find . -name "*.tsx" -exec grep -l "{{" {} \; | while read file; do
  echo "⚠️  $file still contains unreplaced variables:"
  grep -o "{{[^}]*}}" "$file" | sort | uniq
done

echo ""
echo "✅ Script completed successfully!"
