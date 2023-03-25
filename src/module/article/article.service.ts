import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private articleRepository: Repository<ArticleEntity>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    createArticleDto.article_date = createArticleDto.create_time = new Date();
    return this.articleRepository.save(createArticleDto);
  }

  findAll() {
    return this.articleRepository.find({
      order: {
        article_date: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return this.articleRepository.findByIds([id]);
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articleRepository.delete(id);
  }

  async updateArticleLike(id: number) {
    const articleLike = await this.articleRepository.findOneBy({
      article_id: id,
    });
    // articleLike.article_like++
    articleLike.article_like++;
    return this.articleRepository.update(id, articleLike);
  }
}
