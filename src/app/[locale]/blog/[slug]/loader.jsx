import { getPost } from '@/src/utils/blogUtils';

export async function loader({ params }) {
  const post = await getPost(params.slug);
  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }
  return post;
}
