import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    publishDate: z.string(),
    repoUrl: z.string().url().optional(),
    docUrl: z.string().optional(),
    tags: z.array(z.string()),
    category: z.enum(['Física & Criogenia', 'Modelagem & Simulação', 'IA & Computação', 'Engenharia']),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      detail: z.string().optional(),
    })).optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
