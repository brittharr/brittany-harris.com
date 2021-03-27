import fs from 'fs';
import path from 'path';
import frontmatter from '@github-docs/frontmatter';
import { title, description, url, baseurl } from '../src/lib/constants.js';

const { version: svelteKitVersion } = JSON.parse(
	fs.readFileSync(path.join('node_modules', '@sveltejs/kit', 'package.json'), 'utf8')
);

const POST_DIR = '_posts';

const root = path.resolve('.');
const time = new Date();

let posts = [];
try {
	posts = fs
		.readdirSync(`${root}/${POST_DIR}`)
		.map((file) => {
			if (file[0] === '.' || path.extname(file) !== '.md') return;

			const markdown = fs.readFileSync(`${root}/${POST_DIR}/${file}`, 'utf-8');
			const { data, content } = frontmatter(markdown);

			const slug = file.replace(/\.md$/, '');

			if (!data.date) data.date = slug.slice(0, 10);

			return {
				...data,
				content,
				slug: slug.slice(11),
				pubdate: new Date(data.date)
			};
		})
		.filter((d) => d);
} catch (err) {
	console.log(err);
}

const formatPubdate = (date) => date.toUTCString(); // FIXME RFC822
const permalink = ({ date, slug }) =>
	`/blog/${date.getFullYear()}/${date
		.getMonth()
		.toString()
		.padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${slug}/`;

const rss = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
	<title>${title}</title>
  <description>${description}</description>
  <link>${url}${baseurl}/</link>
  <atom:link href="${url}${baseurl}/feed.xml" rel="self" type="application/rss+xml"/>
  <pubDate>${formatPubdate(time)}</pubDate>
  <lastBuildDate>${formatPubdate(time)}</lastBuildDate>
  <generator>SvelteKit v${svelteKitVersion}</generator>
	${posts.map(
		(post) => `
		<item>
			<title>${post.title}</title>
			${post.description ? `<description>${post.description}</description>` : ''}
			<pubDate>${formatPubdate(post.pubdate)}</pubDate>
			<link>${url}${baseurl}${permalink(post)}</link>
			<guid isPermaLink="true">${url}${baseurl}${permalink(post)}</guid>
      ${(post.tags || []).map((tag) => `<category>${tag}</category>`)}
      ${(post.categories || []).map((cat) => `<category>${cat}</category>`)}
		</item>
	`
	)}
</channel>

</rss>
`
	.replace(/>[^\S]+/gm, '>')
	.replace(/[^\S]+</gm, '<')
	.trim();

fs.writeFileSync(`static/feed.xml`, rss);
console.log('✨ Generated RSS Feed');
