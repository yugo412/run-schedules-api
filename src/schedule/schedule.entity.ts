import { Exclude, Expose } from 'class-transformer';
import { City } from 'src/city/city.entity';
import { Media } from 'src/media/media.entity';
import { Package } from 'src/package/package.entity';
import { Type } from 'src/type/type.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('simple-json')
  categories: string[];

  @Column()
  badge: string;

  @Column()
  started_at: Date;

  @Column({ nullable: true })
  finished_at: Date;

  @Column()
  is_virtual: boolean;

  @Expose()
  get url(): string {
    return `${process.env.APP_URL}/event/${this.slug}`;
  }

  @Column()
  location: string;

  @ManyToOne(() => City, (city) => city.schedules)
  @JoinColumn({ name: 'district_id' })
  city: City;

  @ManyToMany(() => Type, (type) => type.schedules)
  @JoinTable({
    name: 'schedule_type',
    joinColumn: {
      name: 'schedule_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'type_id',
      referencedColumnName: 'id',
    },
  })
  types: Type[];

  @OneToMany(() => Package, (schedulePackage) => schedulePackage.schedule)
  packages: Package[];

  @Exclude()
  media: Media | null;

  @Expose()
  get poster(): string | null {
    if (this.media) {
      return `${process.env.APP_URL}/storage/${this.media.id}/${this.media.file_name}`;
    }

    return null;
  }

  @DeleteDateColumn()
  @Exclude()
  deleted_at: Date;
}
