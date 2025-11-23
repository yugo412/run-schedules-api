import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  model_type: string;

  @Column()
  model_id: number;

  @Column()
  name: string;

  @Column()
  file_name: string;

  @Column()
  mime_type: string;

  @Column()
  size: number;

  @Column()
  @Exclude()
  order_column: number;
}
