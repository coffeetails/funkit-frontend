import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { client } from './sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
	return builder.image(source);
}
