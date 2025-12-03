import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface PortfolioTemplateProps {
  name: string;
  profession: string;
  bio: string;
  primaryColor: string;
}

const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({
  name,
  profession,
  bio,
  primaryColor,
}) => {
  const handleContactPress = () => {
    // In a real app, this would open contact form
    console.log('Contact pressed');
  };

  const handleProjectPress = (projectId: number) => {
    // In a real app, this would navigate to project details
    console.log('Project pressed:', projectId);
  };

  const projects = [
    { id: 1, title: 'Mobile App Design', category: 'UI/UX', image: '📱' },
    { id: 2, title: 'Web Development', category: 'Frontend', image: '💻' },
    { id: 3, title: 'Brand Identity', category: 'Design', image: '🎨' },
    { id: 4, title: 'E-commerce Site', category: 'Full Stack', image: '🛒' },
  ];

  const skills = [
    { name: 'React Native', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Node.js', level: 75 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { backgroundColor: primaryColor }]}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {name ? name.charAt(0).toUpperCase() : 'P'}
            </Text>
          </View>
          <Text style={styles.name}>{name || 'Portfolio Owner'}</Text>
          <Text style={styles.profession}>{profession || 'Creative Professional'}</Text>
          <Text style={styles.bio}>
            {bio || 'Passionate about creating amazing digital experiences'}
          </Text>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={handleContactPress}
          >
            <Text style={styles.contactButtonText}>Get In Touch</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>
              {bio || 'I am a passionate creative professional with expertise in modern web technologies and design. I love creating user-centered solutions that make a difference.'}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <View style={styles.skillHeader}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  <Text style={styles.skillLevel}>{skill.level}%</Text>
                </View>
                <View style={styles.skillBar}>
                  <View
                    style={[
                      styles.skillProgress,
                      { width: `${skill.level}%`, backgroundColor: primaryColor },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          <View style={styles.projectsGrid}>
            {projects.map((project) => (
              <TouchableOpacity
                key={project.id}
                style={styles.projectCard}
                onPress={() => handleProjectPress(project.id)}
              >
                <Text style={styles.projectImage}>{project.image}</Text>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectCategory}>{project.category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.experienceList}>
            <View style={styles.experienceItem}>
              <View style={styles.experienceIcon}>
                <Text style={styles.experienceIconText}>💼</Text>
              </View>
              <View style={styles.experienceContent}>
                <Text style={styles.experienceTitle}>Senior Developer</Text>
                <Text style={styles.experienceCompany}>Tech Company Inc.</Text>
                <Text style={styles.experienceDuration}>2022 - Present</Text>
              </View>
            </View>
            <View style={styles.experienceItem}>
              <View style={styles.experienceIcon}>
                <Text style={styles.experienceIconText}>🎯</Text>
              </View>
              <View style={styles.experienceContent}>
                <Text style={styles.experienceTitle}>UI/UX Designer</Text>
                <Text style={styles.experienceCompany}>Design Studio</Text>
                <Text style={styles.experienceDuration}>2020 - 2022</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Let's Work Together</Text>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaText}>
              Ready to bring your ideas to life? Let's discuss your next project!
            </Text>
            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: primaryColor }]}
              onPress={handleContactPress}
            >
              <Text style={styles.ctaButtonText}>Start a Project</Text>
            </TouchableOpacity>
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
  profileSection: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#666',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: 'white',
    opacity: 0.9,
    marginBottom: 12,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  contactButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  contactButtonText: {
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
  aboutCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aboutText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  skillsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  skillItem: {
    marginBottom: 16,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  skillLevel: {
    fontSize: 14,
    color: '#666',
  },
  skillBar: {
    height: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    overflow: 'hidden',
  },
  skillProgress: {
    height: '100%',
    borderRadius: 4,
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  projectCard: {
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
  projectImage: {
    fontSize: 40,
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  projectCategory: {
    fontSize: 12,
    color: '#666',
  },
  experienceList: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  experienceItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  experienceIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  experienceIconText: {
    fontSize: 20,
  },
  experienceContent: {
    flex: 1,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  experienceCompany: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  experienceDuration: {
    fontSize: 12,
    color: '#999',
  },
  ctaCard: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  ctaButton: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PortfolioTemplate;
