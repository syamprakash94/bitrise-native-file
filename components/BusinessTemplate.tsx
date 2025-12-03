import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

interface BusinessTemplateProps {
  appName: string;
  primaryColor: string;
  logoUrl: string;
  contactEmail: string;
}

const BusinessTemplate: React.FC<BusinessTemplateProps> = ({
  appName,
  primaryColor,
  logoUrl,
  contactEmail,
}) => {
  const handleContactPress = () => {
    // In a real app, this would open email client
    console.log('Contact pressed:', contactEmail);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { backgroundColor: primaryColor }]}>
        {logoUrl ? (
          <Image source={{ uri: logoUrl }} style={styles.logo} />
        ) : (
          <View style={[styles.logoPlaceholder, { backgroundColor: 'white' }]}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>
        )}
        <Text style={styles.appName}>{appName || 'Business App'}</Text>
        <Text style={styles.tagline}>Professional Solutions</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.serviceGrid}>
            <View style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>📊</Text>
              <Text style={styles.serviceTitle}>Analytics</Text>
              <Text style={styles.serviceDescription}>Data-driven insights</Text>
            </View>
            <View style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>💼</Text>
              <Text style={styles.serviceTitle}>Consulting</Text>
              <Text style={styles.serviceDescription}>Expert guidance</Text>
            </View>
            <View style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>🚀</Text>
              <Text style={styles.serviceTitle}>Growth</Text>
              <Text style={styles.serviceDescription}>Scale your business</Text>
            </View>
            <View style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>🛡️</Text>
              <Text style={styles.serviceTitle}>Security</Text>
              <Text style={styles.serviceDescription}>Protect your data</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>✓</Text>
              <Text style={styles.featureText}>24/7 Customer Support</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>✓</Text>
              <Text style={styles.featureText}>Proven Track Record</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>✓</Text>
              <Text style={styles.featureText}>Custom Solutions</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.contactButton, { backgroundColor: primaryColor }]}
          onPress={handleContactPress}
        >
          <Text style={styles.contactButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  featureList: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 18,
    color: '#28a745',
    marginRight: 12,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 16,
    color: '#333',
  },
  contactButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  contactButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default BusinessTemplate;
