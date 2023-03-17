import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionEntity } from './entities/option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionEntity)
    private optionRepository: Repository<OptionEntity>,
  ) {}

  async create(createOptionDto: CreateOptionDto) {
    /**
     * 查询 option 数据表查找是否存在相同 option_name 的数据
     * 存在则返回错误，不存在进行存储
     */
    const isOptionName = await this.optionRepository.findOneBy({
      option_name: createOptionDto.option_name,
    });
    // 如果存在相同数据返回错误信息
    if (isOptionName) {
      return {
        type: 'error',
        msg: createOptionDto.option_name + ' 已存在',
      };
    }
    // 不存在相同数据进行正常存储
    return this.optionRepository.save(createOptionDto);
  }

  findAll() {
    return this.optionRepository.find();
  }

  findOne(id: number) {
    return this.optionRepository.findBy({ option_id: id });
  }

  update(id: number, updateOptionDto: UpdateOptionDto) {
    return this.optionRepository.update(id, updateOptionDto);
  }

  remove(id: number) {
    return this.optionRepository.delete(id);
  }
}
