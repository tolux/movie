import { BaseEntity } from 'src/helpers/db.helpers';
import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class OtpEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  otp: number;

  @Column()
  expiration: string;

  @OneToOne(() => UserEntity, (user) => user.otp)
  user: UserEntity;
}
