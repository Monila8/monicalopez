import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

function BlogPost({ slug, content }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(process.cwd() + "/blog-post/" + params.slug + ".md")
  const fileContent = fs.readFileSync(fullPath, { encoding: "utf8" })
  const matterResult = matter(fileContent)
  const rawContent = await remark().use(html).process(matterResult.content)
  return { props: { slug: params.slug, content: rawContent.toString() } }
}

export async function getStaticPaths({}) {
  return {
    paths: [
      { params: { slug: "loop" } },
      { params: { slug: "array-tutorial" } },
      { params: { slug: "foo" } },
      { params: { slug: "bar" } },
    ],
    fallback: false,
  }
}

export default BlogPost
