import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';
import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  const { personal } = portfolioData;

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100k+", label: "Users Served" },
    { number: "15+", label: "Technologies" }
  ];

  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-lg opacity-30 animate-glow" />
              <img
                src={profileImage}
                alt={personal.name}
                className="relative w-full rounded-2xl shadow-elegant"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Full Stack Developer & Problem Solver
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {personal.bio}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-primary font-semibold min-w-[80px]">Location:</span>
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary font-semibold min-w-[80px]">Email:</span>
                <a href={`mailto:${personal.email}`} className="text-primary hover:underline">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary font-semibold min-w-[80px]">Phone:</span>
                <a href={`tel:${personal.phone}`} className="text-primary hover:underline">
                  {personal.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card text-center">
              <CardContent className="p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;