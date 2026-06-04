import fs from 'fs';
import path from 'path';

const pages = [
  'Home', 'About', 'Legacy', 'Ecology', 'Gallery', 
  'Events', 'Charity', 'Visit', 'Blog', 'Contact', 
  'Donation', 'Volunteer'
];

const dir = path.join(process.cwd(), 'src', 'pages');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

pages.forEach(page => {
  const content = `import { motion } from 'framer-motion';

export default function ${page}() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-primary mb-4">${page}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          This is the placeholder for the ${page} page. We will build out the complete animated experience shortly.
        </p>
      </motion.div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(dir, `${page}.jsx`), content);
});

console.log('Pages created successfully.');
