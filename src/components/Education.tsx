import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding bg-section-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and continuous learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                        <GraduationCap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-tight mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-semibold">
                          {edu.school}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      {edu.duration}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center text-sm">
                        <Award className="w-4 h-4 mr-2 flex-shrink-0 text-primary" />
                        <span className="text-primary font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        Achievements
                      </h4>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                          >
                            <span className="text-primary mr-2">•</span>
                            <Badge variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-4">Lifelong Learning</h3>
              <p className="text-muted-foreground">
                Education doesn't stop at graduation. I'm constantly learning through online courses, 
                tech conferences, and hands-on projects to stay current with evolving technologies 
                and industry best practices.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;