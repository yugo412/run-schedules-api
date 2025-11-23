import { Exclude } from 'class-transformer';
import { City } from 'src/city/city.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  slug: string;

  @Column()
  name: string;

  @OneToMany(() => City, (city) => city.region)
  cities: City[];
}
