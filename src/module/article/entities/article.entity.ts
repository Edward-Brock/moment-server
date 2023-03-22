import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ArticleType {
  NORMAL = 'normal',
  ADVERTISEMENT = 'advertisement',
}

@Entity('article')
export class ArticleEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: '文章ID',
  })
  article_id: number;

  @Column({
    comment: '文章创作者',
  })
  article_author: string;

  @Column({
    comment: '文章创作者头像',
  })
  article_avatar: string;

  @Column({
    comment: '文章创作者网址',
  })
  article_website: string;

  @Column({
    comment: '内容类型',
    type: 'enum',
    enum: ArticleType,
    default: ArticleType.NORMAL,
  })
  article_type: ArticleType;

  @Column({
    comment: '文章可见性',
    nullable: true,
    default: true,
  })
  article_visibility: boolean;

  @Column({
    comment: '文章日期',
    type: 'timestamp',
  })
  article_date: Date;

  @Column({
    comment: '文章内容',
    type: 'longtext',
  })
  article_content: string;

  @Column({
    comment: '文章图片地址',
    type: 'json',
    nullable: true,
  })
  article_images: string;

  @Column({
    comment: '文章点赞数',
    default: 0,
  })
  article_like: number;

  @CreateDateColumn({
    comment: '文章创建日期',
    type: 'timestamp',
  })
  create_time: Date;

  @UpdateDateColumn({
    comment: '文章更新日期',
    type: 'timestamp',
    nullable: true,
  })
  update_time: Date;
}
