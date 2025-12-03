import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BusinessTemplate from './BusinessTemplate';
import EcommerceTemplate from './EcommerceTemplate';
import SocialTemplate from './SocialTemplate';
import PortfolioTemplate from './PortfolioTemplate';

// Simple template configuration
// This will be replaced by Bitrise during build
console.log('TEMPLATE_TYPE', '{{TEMPLATE_TYPE}}');

const TEMPLATE_CONFIG = {
  type: '{{TEMPLATE_TYPE}}',
  business: {
    appName: '{{APP_NAME}}',
    primaryColor: '{{PRIMARY_COLOR}}',
    logoUrl: '{{LOGO_URL}}',
    contactEmail: '{{CONTACT_EMAIL}}',
  },
  ecommerce: {
    storeName: '{{STORE_NAME}}',
    themeColor: '{{THEME_COLOR}}',
    currency: '{{CURRENCY}}',
    apiBaseUrl: '{{API_BASE_URL}}',
  },
  social: {
    communityName: '{{COMMUNITY_NAME}}',
    accentColor: '{{ACCENT_COLOR}}',
    welcomeMessage: '{{WELCOME_MESSAGE}}',
  },
  portfolio: {
    name: '{{NAME}}',
    profession: '{{PROFESSION}}',
    bio: '{{BIO}}',
    primaryColor: '{{PRIMARY_COLOR}}',
  },
};

const TemplateRouter: React.FC = () => {
  console.log('TEMPLATE_TYPE', '{{TEMPLATE_TYPE}}');
  // Get template type
  const templateType = TEMPLATE_CONFIG.type;
  
  console.log('TemplateRouter - templateType:', templateType);
  
  // Check if replacement failed
  const isReplacementFailed = templateType.includes('{{') && templateType.includes('}}');
  
  // Use fallback if replacement failed
  const actualTemplateType = isReplacementFailed ? 'business' : templateType;
  
  console.log('TemplateRouter - isReplacementFailed:', isReplacementFailed);
  console.log('TemplateRouter - actualTemplateType:', actualTemplateType);

  // Render appropriate template
  if (actualTemplateType === 'business') {
    return (
      <BusinessTemplate
        appName={TEMPLATE_CONFIG.business.appName}
        primaryColor={TEMPLATE_CONFIG.business.primaryColor}
        logoUrl={TEMPLATE_CONFIG.business.logoUrl}
        contactEmail={TEMPLATE_CONFIG.business.contactEmail}
      />
    );
  }
  
  if (actualTemplateType === 'ecommerce') {
    return (
      <EcommerceTemplate
        storeName={TEMPLATE_CONFIG.ecommerce.storeName}
        themeColor={TEMPLATE_CONFIG.ecommerce.themeColor}
        currency={TEMPLATE_CONFIG.ecommerce.currency}
        apiBaseUrl={TEMPLATE_CONFIG.ecommerce.apiBaseUrl}
      />
    );
  }
  
  if (actualTemplateType === 'social') {
    return (
      <SocialTemplate
        communityName={TEMPLATE_CONFIG.social.communityName}
        accentColor={TEMPLATE_CONFIG.social.accentColor}
        welcomeMessage={TEMPLATE_CONFIG.social.welcomeMessage}
      />
    );
  }
  
  if (actualTemplateType === 'portfolio') {
    return (
      <PortfolioTemplate
        name={TEMPLATE_CONFIG.portfolio.name}
        profession={TEMPLATE_CONFIG.portfolio.profession}
        bio={TEMPLATE_CONFIG.portfolio.bio}
        primaryColor={TEMPLATE_CONFIG.portfolio.primaryColor}
      />
    );
  }
  
  // Fallback UI
  return (
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackTitle}>Template Not Found</Text>
      <Text style={styles.fallbackMessage}>
        The template type "{actualTemplateType}" is not supported.
      </Text>
      <Text style={styles.fallbackSubtext}>
        Supported templates: business, ecommerce, social, portfolio
      </Text>
      <Text style={styles.debugText}>
        Debug: Original value was "{templateType}"
      </Text>
      <Text style={styles.debugText}>
        Replacement failed: {isReplacementFailed ? 'Yes' : 'No'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  fallbackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  fallbackMessage: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  fallbackSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  debugText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'monospace',
  },
});

export default TemplateRouter;
