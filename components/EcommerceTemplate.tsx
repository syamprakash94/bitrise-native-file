import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

interface EcommerceTemplateProps {
  storeName: string;
  themeColor: string;
  currency: string;
  apiBaseUrl: string;
}

const EcommerceTemplate: React.FC<EcommerceTemplateProps> = ({
  storeName,
  themeColor,
  currency,
  apiBaseUrl,
}) => {
  const handleShopNowPress = () => {
    // In a real app, this would navigate to products
    console.log('Shop now pressed');
  };

  const products = [
    { id: 1, name: 'Premium Headphones', price: 199, image: '🎧' },
    { id: 2, name: 'Smart Watch', price: 299, image: '⌚' },
    { id: 3, name: 'Wireless Speaker', price: 149, image: '🔊' },
    { id: 4, name: 'Gaming Mouse', price: 79, image: '🖱️' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { backgroundColor: themeColor }]}>
        <Text style={styles.storeName}>{storeName || 'Ecommerce Store'}</Text>
        <Text style={styles.storeTagline}>Shop the Latest Trends</Text>
        <TouchableOpacity
          style={styles.shopNowButton}
          onPress={handleShopNowPress}
        >
          <Text style={styles.shopNowText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <View style={styles.productGrid}>
            {products.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <Text style={styles.productImage}>{product.image}</Text>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>
                  {currency} {product.price}
                </Text>
                <TouchableOpacity
                  style={[styles.addToCartButton, { backgroundColor: themeColor }]}
                >
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Shop With Us?</Text>
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>🚚</Text>
              <Text style={styles.benefitText}>Free Shipping</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>🔒</Text>
              <Text style={styles.benefitText}>Secure Payment</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>↩️</Text>
              <Text style={styles.benefitText}>Easy Returns</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>⭐</Text>
              <Text style={styles.benefitText}>Top Rated</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoryGrid}>
            <View style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>📱</Text>
              <Text style={styles.categoryName}>Electronics</Text>
            </View>
            <View style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>👕</Text>
              <Text style={styles.categoryName}>Fashion</Text>
            </View>
            <View style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>🏠</Text>
              <Text style={styles.categoryName}>Home</Text>
            </View>
            <View style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>🎮</Text>
              <Text style={styles.categoryName}>Gaming</Text>
            </View>
          </View>
        </View>
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
  storeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  storeTagline: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
    marginBottom: 20,
  },
  shopNowButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  shopNowText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    fontSize: 40,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 8,
  },
  addToCartButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  benefitsList: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  benefitText: {
    fontSize: 16,
    color: '#333',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
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
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default EcommerceTemplate;
