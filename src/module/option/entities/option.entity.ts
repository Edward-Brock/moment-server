import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('option')
export class OptionEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: '配置 ID',
  })
  option_id: number;

  @Column({
    comment: '配置名称',
  })
  option_name: string;

  @Column({
    comment: '配置值',
  })
  option_value: string;
}
