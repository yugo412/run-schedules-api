import { Exclude } from 'class-transformer';
import { Region } from 'src/region/region.entity';
import { Schedule } from 'src/schedule/schedule.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('districts')
export class City {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  slug: string;

  @Column()
  name: string;

  @OneToMany(() => Schedule, (schedule) => schedule.city)
  schedules: Schedule[];

  @ManyToOne(() => Region, (region) => region.cities)
  @JoinColumn({ name: 'region_id' })
  region: Region;
}
