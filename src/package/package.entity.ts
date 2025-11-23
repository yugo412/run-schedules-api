import { Exclude, Expose } from 'class-transformer';
import { json } from 'express';
import { Schedule } from 'src/schedule/schedule.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('packages')
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column('simple-json')
  @Exclude()
  benefit: string[];

  @Expose()
  get benefits(): string[] {
    return Array.isArray(this.benefit)
      ? this.benefit.map((value): string => value?.trim())
      : [];
  }

  @Column()
  is_sold: boolean;

  @Column()
  price_type: string;

  @Column()
  price: number;

  @Expose()
  get formatted_price(): string {
    const price: string = Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(this.price);

    return price.replace(/\s/g, '');
  }

  @Column()
  started_at: Date;

  @Column()
  ended_at: Date;

  @ManyToOne(() => Schedule, (schedule) => schedule.packages)
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;
}
