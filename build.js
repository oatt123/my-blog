const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const postsDir = './posts';
const outputFile = './posts.json';

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

const articles = files.map(file => {
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta = {};
  let content = raw;

  if (match) {
    match[1].split('\n').forEach(line => {
      const i = line.indexOf(':');
      if (i === -1) return;
      const key = line.substring(0, i).trim();
      let val = line.substring(i + 1).trim();
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''));
      }
      meta[key] = val;
    });
    content = match[2];
  }

  return {
    id: file.replace('.md', ''),
    title: meta.title || file,
    date: meta.date || '',
    category: meta.category || '未分类',
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    excerpt: meta.excerpt || '',
    content: marked.parse(content),
  };
});

articles.sort((a, b) => b.date.localeCompare(a.date));
fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
console.log(`✅ 生成 ${outputFile}，共 ${articles.length} 篇文章`);
