import { Exclude, Expose } from 'class-transformer';
import { Schedule } from 'src/schedule/schedule.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('types')
export class Type {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  slug: string;

  @Column()
  @Exclude()
  title: string;

  @Expose({ name: 'name' })
  get nameAlias(): string {
    return this.title;
  }

  @ManyToMany(() => Schedule, (schedule) => schedule.types)
  schedules: Schedule[];
}
