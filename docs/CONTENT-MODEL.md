# Content Model

## Experience

```ts
{
  year: string;
  organization: string;
  role: string;
  description: string;
}
```

Recommended future fields:
- startDate
- endDate
- location
- responsibilities
- outcomes
- links
- images
- categories

## Recognition

```ts
{
  year: string;
  title: string;
  organization: string;
  description: string;
}
```

Recommended future fields:
- credentialUrl
- certificateImage
- category
- date
- verified

## Case Study

```ts
{
  slug: string;
  title: string;
  organization: string;
  summary: string;
  role: string;
  year: string;
  categories: string[];
  outcomes: string[];
}
```

## Insight

Recommended fields:
- title
- slug
- date
- category
- readingTime
- coverImage
- excerpt
- content
