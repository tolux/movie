import { BaseEntity } from 'src/helpers/db.helpers';
import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  url: string;

  @Column()
  rate: number;

  @ManyToOne(() => UserEntity, (user) => user.movies)
  user: UserEntity;
}
