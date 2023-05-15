import { BaseEntity } from 'src/helpers/db.helpers';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { ERoles } from 'src/@types/app.types';
import { OtpEntity } from 'src/auth/entities/otp.entity';
import { Movie } from 'src/movie/entities/movie.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  verified: boolean;

  @Column()
  password: string;

  @Column({ enum: ERoles, default: ERoles.USER, type: 'enum' })
  role: ERoles;

  @OneToOne(() => OtpEntity, (otpEntity) => otpEntity.user, {
    cascade: true,
  })
  otp: OtpEntity;

  @OneToMany(() => Movie, (movies) => movies.user)
  movies: Movie[];
}
