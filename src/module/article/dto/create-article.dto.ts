import { ArticleType } from '../entities/article.entity';

export class CreateArticleDto {
  article_author: string;
  article_avatar: string;
  article_website: string;
  article_type: ArticleType;
  article_visibility: boolean;
  article_date: Date;
  article_content: string;
  article_images: string;
  article_like: number;
  create_time: Date;
  update_time: Date;
}
